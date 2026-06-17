/* ════════════════════════════════════════════════════════════════════
   POWERHOUSE LAW — HOME PAGE SCRIPT
   Loader animation, testimonials dots, hero parallax.
   Loaded after main.js on index.html.
════════════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  // ── Loader ──
  const fillEl = document.getElementById('loader-fill');
  const pctEl  = document.getElementById('loader-pct');
  const loaderEl = document.getElementById('loader');
  if (fillEl && pctEl && loaderEl) {
    const DURATION = 2800;
    const startTime = performance.now();
    const easeOut = t => 1 - Math.pow(1 - t, 3);
    function animProgress(now) {
      const t = Math.min((now - startTime) / DURATION, 1);
      const eased = easeOut(t);
      const pct = Math.floor(eased * 100);
      fillEl.style.width = eased * 100 + '%';
      pctEl.textContent = String(pct).padStart(3, '0');
      if (t < 1) requestAnimationFrame(animProgress);
      else setTimeout(() => loaderEl.classList.add('exit'), 400);
    }
    requestAnimationFrame(animProgress);
    loaderEl.addEventListener('animationend', e => {
      if (e.animationName === 'loader-exit') loaderEl.style.display = 'none';
    });
  }

  // ── Hero parallax ──
  const watermark = document.getElementById('heroWatermark');
  const bgPortrait = document.getElementById('heroBgPortrait');
  const isTouch = window.matchMedia('(hover: none), (pointer: coarse)').matches;
  if (!isTouch && (watermark || bgPortrait)) {
    let targetX = 0, targetY = 0;
    let currentX = 0, currentY = 0;
    let raf;
    window.addEventListener('mousemove', e => {
      targetX = (e.clientX / window.innerWidth  - 0.5) * 2;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2;
      if (!raf) raf = requestAnimationFrame(loop);
    });
    function loop() {
      currentX += (targetX - currentX) * 0.05;
      currentY += (targetY - currentY) * 0.05;
      if (watermark) {
        const wmX = currentX * 22;
        const wmY = currentY * 18;
        watermark.style.transform = `translate(calc(-50% + ${wmX}px), calc(-50% + ${wmY}px))`;
      }
      if (bgPortrait) {
        const bgX = currentX * -8;
        const bgY = currentY * -6;
        bgPortrait.style.transform = `translate3d(${bgX}px, ${bgY}px, 0)`;
      }
      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        raf = requestAnimationFrame(loop);
      } else { raf = null; }
    }
  }
})();
