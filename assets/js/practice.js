/* ════════════════════════════════════════════════════════════════════
   POWERHOUSE LAW — PRACTICE PAGE SCRIPT
   FAQ accordion behavior.
   Loaded after main.js on practice area pages.
════════════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  document.querySelectorAll('.faq-q').forEach(q => {
    q.addEventListener('click', function () {
      const expanded = this.getAttribute('aria-expanded') === 'true';
      const ans = this.nextElementSibling;
      this.setAttribute('aria-expanded', String(!expanded));
      if (ans) ans.classList.toggle('is-open', !expanded);
    });
  });
})();
