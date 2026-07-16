/* ================================================================
   SALT — script.js
   Vanilla JavaScript only. No dependencies, no build step.
   Handles: mobile menu, sticky header state, scroll-reveal animation,
   smooth anchor scrolling fallback, and the dynamic footer year.
   ================================================================ */

(function () {
  'use strict';

  var prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches;

  /* --------------------------------------------------------------
     Mobile menu toggle
     -------------------------------------------------------------- */
  var menuToggle = document.getElementById('menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');

  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileNav.hidden = isOpen;

      var label = menuToggle.querySelector('.visually-hidden');
      if (label) {
        label.textContent = isOpen ? 'Open menu' : 'Close menu';
      }
    });

    /* Close the mobile menu automatically when a link is chosen,
       so guests land on the section rather than a still-open panel. */
    mobileNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileNav.hidden = true;
      });
    });
  }

  /* --------------------------------------------------------------
     Sticky header — subtle shadow/background shift once scrolled
     -------------------------------------------------------------- */
  var header = document.getElementById('site-header');

  function updateHeaderState() {
    if (!header) { return; }
    if (window.scrollY > 12) {
      header.style.boxShadow = '0 1px 0 rgba(28, 27, 24, 0.06)';
    } else {
      header.style.boxShadow = 'none';
    }
  }

  window.addEventListener('scroll', updateHeaderState, { passive: true });
  updateHeaderState();

  /* --------------------------------------------------------------
     Scroll-reveal animation
     Elements with the `.reveal` class fade and lift gently into
     place as they enter the viewport. Fully skipped when the
     visitor has requested reduced motion — elements are simply
     shown immediately (handled here and reinforced in CSS).
     -------------------------------------------------------------- */
  var revealEls = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) {
      el.classList.add('is-visible');
    });
  } else {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* --------------------------------------------------------------
     Smooth anchor scrolling fallback
     Modern browsers honour `scroll-behavior: smooth` in CSS.
     This adds a small, dependency-free fallback for older browsers
     and ensures the mobile menu closes before scrolling.
     -------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      var targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') { return; }

      var target = document.querySelector(targetId);
      if (!target) { return; }

      event.preventDefault();
      target.scrollIntoView({
        behavior: prefersReducedMotion ? 'auto' : 'smooth',
        block: 'start'
      });

      /* Keep the URL shareable without a jarring jump */
      history.pushState(null, '', targetId);
    });
  });

  /* --------------------------------------------------------------
     Footer year
     -------------------------------------------------------------- */
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }

  /* --------------------------------------------------------------
     Analytics placeholder
     If privacy-respecting analytics are added later, initialise
     them here rather than inline in the HTML. Nothing runs by
     default — no third-party requests are made from this file.
     -------------------------------------------------------------- */

})();
