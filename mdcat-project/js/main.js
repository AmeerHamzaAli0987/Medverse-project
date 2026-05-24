/* ═══════════════════════════════════════════
   MDCAT Preparation — Main JavaScript
   ═══════════════════════════════════════════ */

// ═══ PARTICLES ═══
const canvas = document.getElementById('particles-canvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  function createParticles() {
    particles = [];
    const count = Math.floor((window.innerWidth * window.innerHeight) / 18000);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.3,
        dx: (Math.random() - 0.5) * 0.25,
        dy: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.5 + 0.1,
        color: Math.random() > 0.6 ? '#8b5cf6' : Math.random() > 0.5 ? '#06b6d4' : '#a78bfa'
      });
    }
  }

  function drawParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.opacity;
      ctx.fill();
      p.x += p.dx; p.y += p.dy;
      if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
      if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
    });
    ctx.globalAlpha = 1;
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(139,92,246,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(drawParticles);
  }

  resizeCanvas(); createParticles(); drawParticles();
  window.addEventListener('resize', () => { resizeCanvas(); createParticles(); });
}

// ═══ NAVBAR SCROLL ═══
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
  });
}

// ═══ MOBILE MENU ═══
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  if (menu) menu.classList.toggle('open');
}
window.toggleMenu = toggleMenu;

// ═══ SCROLL REVEAL ═══
const reveals = document.querySelectorAll('.reveal');
if (reveals.length) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });
  reveals.forEach(el => observer.observe(el));
  // Hero elements animate on load
  document.querySelectorAll('.hero .reveal').forEach((el, i) => {
    setTimeout(() => el.classList.add('visible'), 100 + i * 150);
  });
  // Force check already-visible elements on load
  setTimeout(() => {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) {
        el.classList.add('visible');
      }
    });
  }, 200);
}

// ═══ COUNTER ANIMATION ═══
function animateCounter(el, target, suffix = '') {
  const duration = 2000;
  const start = performance.now();
  const update = (time) => {
    const progress = Math.min((time - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    const display = target >= 1000
      ? (current >= 1000 ? (current / 1000).toFixed(0) + 'K+' : current + '')
      : current + suffix;
    el.textContent = display;
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target >= 1000 ? (target / 1000).toFixed(0) + 'K+' : target + suffix;
  };
  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const el = e.target;
      animateCounter(el, parseInt(el.dataset.count), el.dataset.suffix || '');
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });
document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

// ═══ COURSE CARD TILT ═══
document.querySelectorAll('.course-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `translateY(-8px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
  });
  card.addEventListener('mouseleave', () => { card.style.transform = ''; });
});

// ═══ AUTH STATE CHECK (for navbar) ═══
function updateNavForAuth() {
  const user = getLoggedInUser();
  const loginBtn = document.querySelector('.btn-login');
  const signupBtn = document.querySelector('.btn-signup');
  if (!loginBtn || !signupBtn) return;
  if (user) {
    loginBtn.textContent = user.fullName ? user.fullName.split(' ')[0] : user.email.split('@')[0];
    loginBtn.href = '#';
    signupBtn.textContent = 'Logout';
    signupBtn.onclick = (e) => {
      e.preventDefault();
      localStorage.removeItem('mdcat_current_user');
      location.reload();
    };
  }
}

function getLoggedInUser() {
  try {
    const u = localStorage.getItem('mdcat_current_user');
    return u ? JSON.parse(u) : null;
  } catch { return null; }
}

document.addEventListener('DOMContentLoaded', updateNavForAuth);
