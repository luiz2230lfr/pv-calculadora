(function () {
  "use strict";
  var cfg = window.CONFIG || {};
  // Links de compra simples. Pixel, UTMs e marcação da versão ficam para depois.
  function checkout(raw) {
    var value = String(raw || "").trim();
    try { var url = new URL(value); return url.protocol === "https:" && url.hostname === "checkout.payt.com.br" ? url.href : ""; } catch (_) { return ""; }
  }
  var destinations = { basico: checkout(cfg.CHECKOUT_BASICO_URL), premium: checkout(cfg.CHECKOUT_PREMIUM_URL), upgrade: checkout(cfg.CHECKOUT_UPGRADE_URL) };
  document.querySelectorAll("a[data-checkout]").forEach(function (link) {
    var destination = destinations[link.dataset.checkout];
    if (destination) link.href = destination;
    else { link.removeAttribute("href"); link.setAttribute("aria-disabled", "true"); }
  });
  if (document.body.dataset.page === "upgrade" && !destinations.upgrade && destinations.basico) {
    location.replace(destinations.basico);
    return;
  }
  var basicLink = document.querySelector("a[data-basico]");
  if (basicLink) {
    var upgradeURL = String(cfg.CHECKOUT_UPGRADE_URL || "").trim();
    if (!upgradeURL) {
      // Proteção: sem oferta de R$ 19,90, o Básico vai ao seu checkout normal.
      var basicURL = String(cfg.CHECKOUT_BASICO_URL || "").trim();
      if (/^https:\/\/checkout\.payt\.com\.br\//.test(basicURL)) basicLink.href = basicURL;
      else { basicLink.removeAttribute("href"); basicLink.setAttribute("aria-disabled", "true"); }
    }
  }
  var social = document.querySelector("#depoimentos");
  if (social && Array.isArray(cfg.DEPOIMENTOS) && cfg.DEPOIMENTOS.length) {
    var track = social.querySelector(".social-track");
    cfg.DEPOIMENTOS.forEach(function (d) {
      if (!/^\/b\/assets\/[^/]+\.webp$/.test(d.arquivo || "") || !d.alt || !d.width || !d.height) return;
      var figure = document.createElement("figure");
      var image = new Image(d.width, d.height);
      image.src = d.arquivo; image.alt = d.alt; image.loading = "lazy"; image.decoding = "async";
      if (d.arquivo800) image.srcset = d.arquivo + " 400w, " + d.arquivo800 + " 800w";
      image.sizes = "(max-width:650px) 224px, 250px";
      figure.appendChild(image); track.appendChild(figure);
    });
    social.hidden = !track.children.length;
    var previous = social.querySelector("[data-social-prev]");
    var next = social.querySelector("[data-social-next]");
    var counter = social.querySelector("[data-social-count]");
    var dots = social.querySelector(".social-dots");
    if (dots) {
      Array.prototype.forEach.call(track.children, function () {
        var dot = document.createElement("span");
        dot.className = "social-dot";
        dots.appendChild(dot);
      });
    }
    function socialPosition() {
      if (!track.children.length) return;
      var step = track.clientWidth;
      var index = Math.min(track.children.length - 1, Math.round(track.scrollLeft / step));
      if (counter) counter.textContent = (index + 1) + " / " + track.children.length;
      if (dots) Array.prototype.forEach.call(dots.children, function (dot, i) { dot.classList.toggle("is-active", i === index); });
      if (previous) previous.disabled = track.scrollLeft < 2;
      if (next) next.disabled = track.scrollLeft >= track.scrollWidth - track.clientWidth - 2;
    }
    function moveSocial(direction) {
      var step = track.clientWidth;
      track.scrollBy({ left: direction * step, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    }
    if (previous) previous.addEventListener("click", function () { moveSocial(-1); });
    if (next) next.addEventListener("click", function () { moveSocial(1); });
    track.addEventListener("scroll", socialPosition, { passive: true });
    window.addEventListener("resize", socialPosition);
    socialPosition();
  }
  function text(selector, value) {
    var el = document.querySelector(selector); if (el && value) { el.textContent = value; el.hidden = false; }
  }
  function legal(selector, raw) {
    var el = document.querySelector(selector);
    if (!el || !raw) return;
    try { var u = new URL(raw, location.origin); if (u.protocol === "https:" || u.origin === location.origin) { el.href = u.href; el.hidden = false; } } catch (_) {}
  }
  text("[data-responsavel]", cfg.B_RESPONSAVEL);
  if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cfg.B_EMAIL || "")) {
    text("[data-email]", cfg.B_EMAIL); document.querySelector("[data-email]").href = "mailto:" + cfg.B_EMAIL;
  }
  legal("[data-termos]", cfg.B_TERMOS_URL); legal("[data-privacidade]", cfg.B_PRIVACIDADE_URL);
})();
