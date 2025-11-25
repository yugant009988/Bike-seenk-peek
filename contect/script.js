// FOOTER YEAR
document.getElementById("year").textContent = new Date().getFullYear();

// NAVBAR LOGIC
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.classList.toggle("open");
});

// CLOSE NAV WHEN CLICKED
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});

// FORM LOGIC
const form = document.getElementById("contactForm");
const statusBox = document.getElementById("formStatus");
const sendBtn = document.getElementById("sendBtn");

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  // VALIDATION
  if (name.length < 3) {
    statusBox.textContent = "Name must be at least 3 characters.";
    statusBox.style.color = "red";
    return;
  }

  if (!validateEmail(email)) {
    statusBox.textContent = "Please enter a valid email.";
    statusBox.style.color = "red";
    return;
  }

  if (subject.length < 4) {
    statusBox.textContent = "Subject too short.";
    statusBox.style.color = "red";
    return;
  }

  if (message.length < 10) {
    statusBox.textContent = "Message must be at least 10 characters.";
    statusBox.style.color = "red";
    return;
  }

  // LOADING STATE
  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";
  statusBox.style.color = "#ffe536";
  statusBox.textContent = "Sending your message...";

  // SIMULATED API SEND
  setTimeout(() => {
    sendBtn.disabled = false;
    sendBtn.textContent = "Send Message";

    statusBox.style.color = "#22cc88";
    statusBox.textContent = "Message delivered successfully!";

    form.reset();
  }, 1300);
});

// REVEAL ANIMATION
const revealItems = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

revealItems.forEach(item => revealObserver.observe(item));
