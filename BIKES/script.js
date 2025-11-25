// 🔹 Navbar toggle (fixed duplicate)
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Auto-close menu on mobile
document.querySelectorAll(".nav-links a").forEach(a => {
  a.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// 🔹 Scroll reveal animation
const cards = document.querySelectorAll(".bike-card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));
