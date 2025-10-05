// ----------  HEADER SHRINK ON SCROLL  ----------
const header = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  header.classList.toggle('glass', window.scrollY > 40);
});

// ----------  FADE-IN HERO TEXT  ----------
const heroText = document.querySelector('.hero-text');
setTimeout(() => {
  heroText.style.transition = 'opacity .8s ease, transform .8s ease';
  heroText.style.opacity = 1;
  heroText.style.transform = 'translateY(0)';
}, 150);

// ----------  SMOOTH SCROLL (polyfill for Safari) ----------
if (!('scrollBehavior' in document.documentElement.style)) {
  import('https://cdn.jsdelivr.net/npm/scroll-behavior-polyfill@2/dist/index.min.js');
}