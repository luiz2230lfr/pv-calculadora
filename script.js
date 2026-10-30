(function () {
  "use strict";

  var config = window.CONFIG || {};
  var links = {
    basico: config.CHECKOUT_BASICO_URL,
    premium: config.CHECKOUT_PREMIUM_URL,
  };

  // Botões dos planos: vão para o checkout correspondente (configurado em config.js).
  document.querySelectorAll("[data-checkout]").forEach(function (botao) {
    var plano = botao.getAttribute("data-checkout");
    var url = (links[plano] || "").trim();
    if (/^https:\/\//i.test(url)) {
      botao.setAttribute("href", url);
      botao.removeAttribute("data-pendente");
    } else {
      botao.setAttribute("href", "#planos");
      botao.setAttribute("data-pendente", "");
      console.warn("[Página de vendas] Link de checkout do plano '" + plano + "' ainda não configurado em config.js.");
    }
  });

  // Microsoft Clarity: carrega só depois que a página terminou de abrir (não atrasa o carregamento).
  // Modo sem rastreio (?semrastreio=1): não carrega o Clarity e mostra um aviso discreto no canto.
  if (window.SEM_RASTREIO) {
    var aviso = document.createElement("div");
    aviso.textContent = "Modo sem rastreio";
    aviso.setAttribute("style", "position:fixed;left:12px;bottom:12px;z-index:50;padding:6px 12px;border-radius:999px;background:#3B2925;color:#F8F4EF;font:700 12px/1.2 system-ui,sans-serif;opacity:.85;pointer-events:none");
    document.body.appendChild(aviso);
  }

  if (!window.SEM_RASTREIO && /^[a-z0-9]+$/i.test(config.CLARITY_ID || "")) {
    var carregarClarity = function () {
      (function (c, l, a, r, i, t, y) {
        c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
        t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
        y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
      })(window, document, "clarity", "script", config.CLARITY_ID);
    };
    var quandoOcioso = function () {
      if ("requestIdleCallback" in window) requestIdleCallback(carregarClarity, { timeout: 3000 });
      else setTimeout(carregarClarity, 1500);
    };
    if (document.readyState === "complete") quandoOcioso();
    else window.addEventListener("load", quandoOcioso, { once: true });
  }

  var reduzirMovimento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Vídeo de demonstração: só começa a baixar depois que a página carregou (a capa aparece antes),
  // toca quando está visível e pausa fora da tela. Quem prefere menos movimento vê só a capa.
  document.querySelectorAll(".video-demo").forEach(function (video) {
    if (reduzirMovimento) return;
    function iniciar() {
      if (!("IntersectionObserver" in window)) { video.play().catch(function () {}); return; }
      new IntersectionObserver(function (entradas) {
        entradas.forEach(function (e) {
          if (e.isIntersecting) { var p = video.play(); if (p && p.catch) p.catch(function () {}); }
          else video.pause();
        });
      }, { threshold: 0.25 }).observe(video);
    }
    if (document.readyState === "complete") iniciar();
    else window.addEventListener("load", iniciar, { once: true });
  });

  // Depoimentos: setas, bolinhas e deslizar ficam sincronizados.
  // Cada bolinha é uma posição possível (considera quantos cards aparecem por vez).
  document.querySelectorAll(".depoimentos-carrossel").forEach(function (carrossel) {
    var trilho = carrossel.querySelector(".depoimentos");
    var cards = trilho.querySelectorAll(".depoimento");
    var ant = carrossel.querySelector("[data-depo='-1']");
    var prox = carrossel.querySelector("[data-depo='1']");
    var bolinhas = carrossel.parentNode.querySelector(".depoimentos__bolinhas");
    if (!cards.length) return;
    var posicoes = 1;
    var atual = 0;

    function passo() {
      return cards.length > 1 ? cards[1].offsetLeft - cards[0].offsetLeft : trilho.clientWidth;
    }
    function irPara(i) {
      i = Math.max(0, Math.min(posicoes - 1, i));
      trilho.scrollTo({ left: i * passo(), behavior: reduzirMovimento ? "auto" : "smooth" });
    }
    function marcar() {
      var i = Math.max(0, Math.min(posicoes - 1, Math.round(trilho.scrollLeft / passo())));
      if (trilho.scrollLeft + trilho.clientWidth >= trilho.scrollWidth - 2) i = posicoes - 1;
      atual = i;
      ant.disabled = i === 0;
      prox.disabled = i === posicoes - 1;
      bolinhas.querySelectorAll("button").forEach(function (b, n) {
        if (n === i) b.setAttribute("aria-current", "true"); else b.removeAttribute("aria-current");
      });
    }
    function montar() {
      var porVez = Math.max(1, Math.round(trilho.clientWidth / passo()));
      var total = Math.max(1, cards.length - porVez + 1);
      if (total !== posicoes || !bolinhas.children.length) {
        posicoes = total;
        bolinhas.textContent = "";
        for (var n = 0; n < posicoes; n++) {
          var b = document.createElement("button");
          b.type = "button";
          b.setAttribute("aria-label", "Ver depoimento " + (n + 1) + " de " + posicoes);
          b.addEventListener("click", irPara.bind(null, n));
          bolinhas.appendChild(b);
        }
      }
      marcar();
    }

    ant.addEventListener("click", function () { irPara(atual - 1); });
    prox.addEventListener("click", function () { irPara(atual + 1); });
    var agendado = false;
    trilho.addEventListener("scroll", function () {
      if (agendado) return;
      agendado = true;
      requestAnimationFrame(function () { agendado = false; marcar(); });
    }, { passive: true });
    window.addEventListener("resize", montar);
    montar();
  });

  // Imagens: sem menu de "salvar imagem" ao clicar com o botão direito ou segurar o dedo.
  // Vale só para imagens e vídeo; textos, links e botões continuam normais.
  document.addEventListener("contextmenu", function (e) {
    if (e.target.closest && e.target.closest("img, video, .slot, .celular")) e.preventDefault();
  });
  document.addEventListener("dragstart", function (e) {
    if (e.target.tagName === "IMG") e.preventDefault();
  });

  // Zoom limitado (pedido do Luiz): pinça, Ctrl/Cmd com + ou - e Ctrl com a roda do mouse.
  // Alguns navegadores ignoram isso por acessibilidade. A rolagem normal e o deslizar do carrossel continuam.
  document.addEventListener("gesturestart", function (e) { e.preventDefault(); });
  document.addEventListener("touchmove", function (e) {
    if (e.touches && e.touches.length > 1) e.preventDefault();
  }, { passive: false });
  document.addEventListener("wheel", function (e) {
    if (e.ctrlKey) e.preventDefault();
  }, { passive: false });
  document.addEventListener("keydown", function (e) {
    if ((e.ctrlKey || e.metaKey) && ["+", "-", "=", "_", "Add", "Subtract"].indexOf(e.key) !== -1) e.preventDefault();
  });

  // Animação leve de entrada das seções (desligada para quem prefere menos movimento).
  var animaveis = document.querySelectorAll("[data-revelar]");
  if (reduzirMovimento || !("IntersectionObserver" in window)) {
    animaveis.forEach(function (el) { el.classList.add("revelado"); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("revelado");
          observador.unobserve(entrada.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    animaveis.forEach(function (el) { observador.observe(el); });
  }
})();
