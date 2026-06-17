/* ════════════════════════════════════════════════════════════════════
   POWERHOUSE LAW — MAIN SCRIPT
   Shared across every page. Owns scroll progress, sticky nav state,
   reveal animations, mobile drawer, and L1/L2/L3 mobile accordions.
   Exposes window.PHL.closeMobileMenu() for callers that need it.
════════════════════════════════════════════════════════════════════ */
(() => {
  'use strict';

  // ── Scroll progress ──
  const scrollEl = document.getElementById('scroll-progress');
  if (scrollEl) {
    window.addEventListener('scroll', () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      scrollEl.style.width = (window.scrollY / max * 100) + '%';
    }, { passive: true });
  }

  // ── Nav scrolled state ──
  const navEl = document.getElementById('nav');
  if (navEl) {
    window.addEventListener('scroll', () => {
      navEl.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });
  }

  // ── Reveal on scroll ──
  const revealObs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        revealObs.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
  document.querySelectorAll('[data-reveal]').forEach(el => revealObs.observe(el));

  // ── Mobile drawer + accordion ──
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  let menuOpen = false;

  function openMenu() {
    if (!hamburger || !mobileMenu) return;
    menuOpen = true;
    hamburger.classList.add('open');
    mobileMenu.classList.add('open');
    document.body.classList.add('menu-open');
  }
  function closeMenu() {
    if (!hamburger || !mobileMenu) return;
    menuOpen = false;
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.classList.remove('menu-open');
    document.querySelectorAll('.mob-acc-btn, .mob-l2-btn, .mob-l3-btn').forEach(btn => {
      btn.setAttribute('aria-expanded', 'false');
    });
    document.querySelectorAll('.mob-acc-panel, .mob-l2-panel, .mob-l3-panel').forEach(panel => {
      panel.classList.remove('is-open');
    });
  }

  if (hamburger) {
    hamburger.addEventListener('click', e => {
      e.stopPropagation();
      menuOpen ? closeMenu() : openMenu();
    });
  }
  if (mobileMenu) {
    mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', closeMenu));
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && menuOpen) closeMenu();
  });

  // Accordion init — generic toggle for any depth
  function initAccordion(btnSel) {
    document.querySelectorAll(btnSel).forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        const expanded = this.getAttribute('aria-expanded') === 'true';
        const panel = document.getElementById(this.getAttribute('aria-controls'));
        if (!panel) return;
        this.setAttribute('aria-expanded', String(!expanded));
        panel.classList.toggle('is-open', !expanded);
      });
    });
  }
  initAccordion('.mob-acc-btn');
  initAccordion('.mob-l2-btn');
  initAccordion('.mob-l3-btn');

  // ── Testimonials dots (shared component — visual state only) ──
  const dots = document.querySelectorAll('.testimonials-dot');
  dots.forEach(d => {
    d.addEventListener('click', () => {
      dots.forEach(x => x.classList.remove('active'));
      d.classList.add('active');
    });
  });

  // Expose for page scripts that need to close the drawer programmatically
  window.PHL = window.PHL || {};
  window.PHL.closeMobileMenu = closeMenu;
})();
