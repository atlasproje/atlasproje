/* =========================================================
   Atlas Proje — Main JavaScript
   ========================================================= */

'use strict';

/* --- Navigation ----------------------------------------- */
(function initNav() {
  const nav  = document.querySelector('.nav');
  const hamburger = document.querySelector('.nav__hamburger');
  const mobileMenu = document.querySelector('.nav__mobile');
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';

  // Mark active link
  document.querySelectorAll('.nav__link[data-page]').forEach(link => {
    if (link.dataset.page === currentPath) {
      link.classList.add('active');
    }
  });

  // Scroll handler — add .scrolled class
  function onScroll() {
    if (window.scrollY > 30) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    // Close on link click
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }
})();


/* --- Scroll-reveal (Intersection Observer) -------------- */
(function initReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => observer.observe(el));
})();


/* --- Animated counter (stats section) ------------------- */
(function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el     = entry.target;
        const target = parseInt(el.dataset.count, 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1600;
        const start  = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const ease = 1 - Math.pow(1 - progress, 3); // ease-out cubic
          el.textContent = Math.floor(ease * target) + suffix;
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(el => observer.observe(el));
})();


/* --- Contact form --------------------------------------- */
(function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const successMsg = document.getElementById('formSuccess');
  const errorMsg   = document.getElementById('formError');

  form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Basic validation
    const required = form.querySelectorAll('[required]');
    let valid = true;
    required.forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#ef4444';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });

    if (!valid) {
      if (errorMsg) { errorMsg.style.display = 'block'; }
      return;
    }

    // Simulate submission (replace with actual backend call)
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.disabled = true;
      btn.innerHTML = (window.I18N ? I18N.get('cnt.btn_sending') : 'Gönderiliyor…');
    }

    setTimeout(() => {
      form.reset();
      if (btn) {
        btn.disabled = false;
        btn.innerHTML = (window.I18N ? I18N.get('cnt.btn_submit') : '<i class="fa-solid fa-paper-plane"></i> Gönder');
      }
      if (errorMsg)   { errorMsg.style.display = 'none'; }
      if (successMsg) { successMsg.style.display = 'block'; }
    }, 1000);
  });

  // Remove red border on input
  form.querySelectorAll('input, select, textarea').forEach(f => {
    f.addEventListener('input', () => { f.style.borderColor = ''; });
  });
})();


/* --- Smooth scroll for hash links ----------------------- */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});
