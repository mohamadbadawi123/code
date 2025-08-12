(function () {
  "use strict";

  var navButton = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  if (navButton && nav) {
    navButton.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      navButton.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Smooth scroll for on-page anchors
  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!(target instanceof Element)) return;
    if (target.matches('a[href^="#"]')) {
      var id = target.getAttribute("href");
      if (!id) return;
      var el = document.querySelector(id);
      if (el) {
        event.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  });

  // Dynamic year in footer
  var yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();