/* ═══════════════════════════════════
   ARNADEEP SAHA — PORTFOLIO SCRIPTS
═══════════════════════════════════ */

/* ── Navbar: scroll state ── */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 30);
});

/* ── Hamburger menu ── */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileMenu.classList.toggle('open');
});

document.querySelectorAll('.mob-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mobileMenu.classList.remove('open');
  });
});

/* ── Smooth scroll for all anchor links ── */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 70;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

/* ── Scroll reveal ── */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

/* ── Active nav link on scroll ── */
const sections = document.querySelectorAll('section[id]');
const navLinkEls = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.getAttribute('id');
      navLinkEls.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${id}`
          ? 'var(--white)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ── Project Modal Data ── */
const projectData = [
  {
    title: 'CampusTrace',
    subtitle: 'Lost & Found Web Platform',
    problem: 'No organized system existed for reporting or recovering lost items on campus, leading to confusion and unrecovered belongings.',
    solution: 'Built a centralized web platform where students can log lost items, search for found ones, and connect to recover their belongings.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Knapsack-Based Ad Budget Optimizer',
    subtitle: 'Algorithm-Driven Marketing Tool',
    problem: 'Limited advertising budgets often get distributed inefficiently across channels, reducing overall campaign ROI.',
    solution: 'Implemented the 0/1 Knapsack dynamic programming algorithm to optimally allocate ad spend across channels for maximum return.',
    tech: ['Python', 'C++'],
  },
  {
    title: 'Water Tank Level Indicator',
    subtitle: 'ESP32 Embedded IoT System',
    problem: 'Manual water tank monitoring is inefficient, often resulting in overflow or running out of water without warning.',
    solution: 'Designed an automated sensor-based system using ESP32 and ultrasonic/float sensors that continuously monitors and reports water levels.',
    tech: ['ESP32', 'Embedded C', 'IoT'],
  },
];

/* ── Open Modal ── */
function openModal(index) {
  const p = projectData[index];
  const overlay = document.getElementById('modal-overlay');
  const content = document.getElementById('modal-content');

  content.innerHTML = `
    <div class="modal-content-inner">
      <h2>${p.title}</h2>
      <p class="modal-sub">${p.subtitle}</p>
      <div class="modal-section">
        <h4>Problem</h4>
        <p>${p.problem}</p>
      </div>
      <div class="modal-section">
        <h4>Solution</h4>
        <p>${p.solution}</p>
      </div>
      <div class="modal-section">
        <h4>Tech Stack</h4>
        <div class="modal-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

/* ── Close Modal ── */
function closeModal() {
  const overlay = document.getElementById('modal-overlay');
  overlay.classList.remove('open');
  document.body.style.overflow = '';
}

/* Close modal on Escape key */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* ── Contact Form ── */
function handleSubmit(e) {
  e.preventDefault();
  const btn = e.target.querySelector('button[type="submit"]');
  const success = document.getElementById('form-success');

  btn.textContent = 'Sending…';
  btn.disabled = true;

  // Simulate sending
  setTimeout(() => {
    success.classList.remove('hidden');
    e.target.reset();
    btn.textContent = 'Send Message';
    btn.disabled = false;

    setTimeout(() => {
      success.classList.add('hidden');
    }, 4000);
  }, 1000);
}

/* ── Staggered skill card animation ── */
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, i) => {
  card.style.transitionDelay = `${i * 0.05}s`;
});

/* ── Console Easter egg ── */
console.log(
  '%c Arnadeep Saha ',
  'background:#e8b84b;color:#0c0c0c;font-size:18px;font-weight:bold;padding:6px 12px;border-radius:4px;',
);
console.log('%c CSE Student · VIT Vellore · DSA-Focused Developer', 'color:#e8b84b;font-size:11px;');