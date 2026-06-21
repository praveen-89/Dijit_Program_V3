/**
 * DIJIT Talent Cloud - Core App Logic
 * Handles: Mobile nav, password toggle, theme awareness
 */

document.addEventListener('DOMContentLoaded', () => {

  // ── Mobile Navigation ──────────────────────────────────────────────────
  const navToggle  = document.querySelector('.nav-toggle');
  const navLinks   = document.querySelector('.nav-links');
  const navOverlay = document.querySelector('.nav-overlay');

  const openNav  = () => {
    navLinks?.classList.add('is-open');
    navOverlay?.classList.add('is-open');
    navToggle?.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    navLinks?.classList.remove('is-open');
    navOverlay?.classList.remove('is-open');
    navToggle?.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  navToggle?.addEventListener('click', () => {
    const isOpen = navLinks?.classList.contains('is-open');
    isOpen ? closeNav() : openNav();
  });

  navOverlay?.addEventListener('click', closeNav);

  // Close nav on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });

  // ── Password Visibility Toggle ─────────────────────────────────────────
  document.querySelectorAll('.password-toggle').forEach(toggle => {
    toggle.addEventListener('click', () => {
      const inputId = toggle.getAttribute('data-input');
      const input   = document.getElementById(inputId);
      if (!input) return;

      const isPassword = input.type === 'password';
      input.type = isPassword ? 'text' : 'password';
      toggle.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');

      // Swap icon
      const eyeIcon = toggle.querySelector('i');
      if (eyeIcon) {
        eyeIcon.className = isPassword ? 'ph ph-eye-slash' : 'ph ph-eye';
      }
    });
  });

  // ── Active nav link highlighting ───────────────────────────────────────
  const currentPath = window.location.pathname.split('/').pop();
  document.querySelectorAll('.nav-link, .sidebar-link').forEach(link => {
    const href = link.getAttribute('href')?.split('/').pop();
    if (href && href === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  // ── Scroll-reveal via IntersectionObserver ─────────────────────────────
  const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('opacity-0');
        scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  document.querySelectorAll('.scroll-reveal').forEach(el => {
    el.classList.add('opacity-0');
    scrollObserver.observe(el);
  });

});
