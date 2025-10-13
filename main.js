// ----------  HEADER SHRINK ON SCROLL  ----------
const header = document.getElementById("navbar");
window.addEventListener("scroll", () => {
  header.classList.toggle("glass", window.scrollY > 40);
});

// ----------  FADE-IN HERO TEXT  ----------
const heroText = document.querySelector(".hero-text");
setTimeout(() => {
  heroText.style.transition = "opacity .8s ease, transform .8s ease";
  heroText.style.opacity = 1;
  heroText.style.transform = "translateY(0)";
}, 150);

// ----------  SMOOTH SCROLL (polyfill for Safari) ----------
if (!("scrollBehavior" in document.documentElement.style)) {
  import(
    "https://cdn.jsdelivr.net/npm/scroll-behavior-polyfill@2/dist/index.min.js"
  );
}

/*click  button to scroll to top of page*/
const images = document.querySelectorAll(".slider img");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const categoryBtns = document.querySelectorAll(".category-btn");
let current = 0;

function showImage(index) {
  images.forEach((img) => img.classList.remove("active"));
  categoryBtns.forEach((btn) => btn.classList.remove("active"));
  images[index].classList.add("active");
  categoryBtns[index].classList.add("active");
  current = index;
}

nextBtn.addEventListener("click", () => {
  current = (current + 1) % images.length;
  showImage(current);
});

prevBtn.addEventListener("click", () => {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
});

categoryBtns.forEach((btn, index) => {
  btn.addEventListener("click", () => showImage(index));
});
