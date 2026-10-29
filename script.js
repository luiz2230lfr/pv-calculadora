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

  // Depoimentos: setas (computador) andam um card para o lado no carrossel.
  document.querySelectorAll("[data-depo]").forEach(function (seta) {
    seta.addEventListener("click", function () {
      var trilho = seta.parentNode.querySelector(".depoimentos");
      var card = trilho.querySelector(".depoimento");
      var passo = card ? card.getBoundingClientRect().width + 24 : 300;
      trilho.scrollBy({ left: passo * Number(seta.getAttribute("data-depo")), behavior: reduzirMovimento ? "auto" : "smooth" });
    });
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
