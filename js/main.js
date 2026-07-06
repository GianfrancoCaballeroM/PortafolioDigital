/* =============================================
   PORTFOLIO — main.js
   Handles: navbar scroll, mobile menu,
            scroll reveal, typewriter effect
   ============================================= */

// ── NAVBAR SCROLL ─────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ── MOBILE HAMBURGER ──────────────────────────
const hamburger = document.getElementById('hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const open = navLinks.classList.contains('open');
  hamburger.setAttribute('aria-expanded', open);
  // Animate spans into X
  const spans = hamburger.querySelectorAll('span');
  if (open) {
    spans[0].style.transform = 'translateY(7px) rotate(45deg)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'translateY(-7px) rotate(-45deg)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
});

// Close nav on link click (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => {
      s.style.transform = '';
      s.style.opacity   = '';
    });
  });
});

// ── SCROLL REVEAL ─────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

document.querySelectorAll('.reveal').forEach(el => {
  revealObserver.observe(el);
});

// ── TYPEWRITER ────────────────────────────────
const phrases = [
  'Backend Developer & Architect',
  'Spec-Driven Development (SDD)',
  'Security by Design mindset',
  'Tech Lead + AI Orchestration',
  'Clean Architecture practitioner',
  'Cybersecurity — long-term goal 🔐',
];

let phraseIndex  = 0;
let charIndex    = 0;
let isDeleting   = false;
let typeSpeed    = 70;

const typewriterEl = document.getElementById('typewriter');

function type() {
  const currentPhrase = phrases[phraseIndex];

  if (!isDeleting) {
    typewriterEl.textContent = currentPhrase.slice(0, ++charIndex);
    if (charIndex === currentPhrase.length) {
      isDeleting = true;
      typeSpeed  = 40;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typewriterEl.textContent = currentPhrase.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting  = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeSpeed   = 70;
    }
  }

  setTimeout(type, isDeleting ? typeSpeed * 0.6 : typeSpeed);
}

// Start typewriter after a short delay
setTimeout(type, 1000);

// ── ACTIVE NAV LINK ON SCROLL ─────────────────
const sections = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.35 });

sections.forEach(s => sectionObserver.observe(s));

// ── SMOOTH ANCHOR SCROLL ──────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const href = anchor.getAttribute('href');
    if (href === '#') return;
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 72; // navbar height
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ── STAT COUNTER ANIMATION ─────────────────────
function animateCounter(el, target, suffix = '', duration = 1200) {
  const isNumeric = !isNaN(parseInt(target));
  if (!isNumeric) return; // Skip non-numeric like "SDD"

  const num     = parseInt(target);
  const start   = 0;
  const startTs = performance.now();

  function update(ts) {
    const elapsed  = ts - startTs;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const current  = Math.floor(start + (num - start) * eased);
    el.textContent = current + suffix;
    if (progress < 1) requestAnimationFrame(update);
  }
  requestAnimationFrame(update);
}

const statObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const raw = el.dataset.target;
      if (!raw) return;

      const suffix = raw.replace(/[0-9]/g, '').replace('+', '');
      const hasPlusSign = raw.includes('+');
      animateCounter(el, raw, hasPlusSign ? '+' : suffix);
      statObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

// Set data-target on stat numbers
document.querySelectorAll('.stat-number').forEach(el => {
  el.dataset.target = el.textContent;
  el.textContent = '0';
  statObserver.observe(el);
});

// ── CONSOLE EASTER EGG ────────────────────────
console.log(`
%c  < Gianfranco Caballero Medina />
%c  Backend Developer · Fullstack · Security Enthusiast
%c  Universidad Ricardo Palma — Lima, Peru

  Hola reclutador 👋 Si llegaste hasta acá,
  ya sabés que me gusta construir cosas bien.
  Escribime: gianfrancocaballeromedina@hotmail.com
`,
  'color: #00d4ff; font-size: 18px; font-weight: bold; font-family: monospace',
  'color: #7c3aed; font-size: 12px; font-family: monospace',
  'color: #94a3b8; font-size: 11px; font-family: monospace'
);
