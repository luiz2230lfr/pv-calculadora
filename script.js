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
