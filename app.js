// 🎬 Project video hover play/pause
const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon');
const hoverSign = document.querySelector('.hover-sign');

const videoList = [video1, video2, video3];

videoList.forEach(function (video) {
  video.addEventListener("mouseover", function () {
    video.play();
    hoverSign.classList.add("active");
  });
  video.addEventListener("mouseout", function () {
    video.pause();
    hoverSign.classList.remove("active");
  });
});

// 🧱 Sidebar open/close
menu.addEventListener("click", function () {
  sideBar.classList.remove("close-sidebar");
  sideBar.classList.add("open-sidebar");
});

closeIcon.addEventListener("click", function () {
  sideBar.classList.remove("open-sidebar");
  sideBar.classList.add("close-sidebar");
});

// 🧭 Smooth Scroll + Active Link Highlight + Auto-close on link click
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header ul li a");
const sideLinks = document.querySelectorAll(".sidebar ul li a");

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 70, // adjust offset for navbar height
        behavior: "smooth",
      });
    }
  });
});

// Sidebar auto close on link click
sideLinks.forEach(link => {
  link.addEventListener("click", () => {
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
  });
});

// Active link highlight while scrolling
window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100;
    if (scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  sideLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
// 🌠 Particle Background for Education Section
const canvas = document.getElementById('particleCanvas');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2 + 0.5,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#72a1de';
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;
    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(drawParticles);
}
drawParticles();

