// 🔹 Mobile Navbar Toggle
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// 🔹 Scroll Reveal Animation
const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 120) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// 🔹 Floating Particle Motion
setInterval(() => {
  const part = document.querySelector(".particles");
  part.style.transform = `translate(${Math.random()*10}px, ${Math.random()*10}px)`;
}, 2000);
