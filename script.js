/* ==========================================================================
   RTEI — script.js  (shared across all pages)
   ========================================================================== */
(function () {
  "use strict";

  /* ---- Mobile nav toggle ---- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      document.body.style.overflow = open ? "hidden" : "";
    });
    // close when a link is tapped
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  /* ---- Footer year ---- */
  const yr = document.getElementById("year");
  if (yr) yr.textContent = new Date().getFullYear();

  /* ---- Scroll reveal ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("in"); });
  }

  /* ---- Form validation + fake submit ----
     To go live, wire each <form data-form> to a backend.
     Easiest: create a free Formspree form and set
       form.setAttribute("action", "https://formspree.io/f/XXXX")
     then change handleSubmit to actually POST. For now it validates
     client-side and shows a success message. */
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneRe = /^[+]?[\d\s().-]{7,}$/;

  document.querySelectorAll("[data-form]").forEach(function (form) {
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      let ok = true;

      form.querySelectorAll("[required]").forEach(function (input) {
        const field = input.closest(".field");
        let valid = input.value.trim() !== "";
        if (valid && input.type === "email") valid = emailRe.test(input.value.trim());
        if (valid && input.dataset.type === "phone") valid = phoneRe.test(input.value.trim());
        field.classList.toggle("invalid", !valid);
        if (!valid) ok = false;
      });

      if (!ok) {
        const firstBad = form.querySelector(".invalid input, .invalid select, .invalid textarea");
        if (firstBad) firstBad.focus();
        return;
      }

      /* --- success path (replace with real POST when going live) --- */
      const success = form.querySelector(".form-success");
      if (success) {
        success.classList.add("show");
        success.setAttribute("role", "status");
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      form.reset();
    });

    // clear error styling as the user types
    form.querySelectorAll("input, select, textarea").forEach(function (input) {
      input.addEventListener("input", function () {
        const field = input.closest(".field");
        if (field) field.classList.remove("invalid");
      });
    });
  });
})();
