const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
  navbar.classList.toggle("active");
});
// header mobile nav toggle
const menuToggle = document.querySelector(".menu-toggle");
const mobilePanel = document.getElementById("mobileNavPanel");
const mobileOverlay = document.getElementById("mobileNavOverlay");
const navLinks = document.querySelectorAll(".mobile-link");
const mainNav = document.getElementById("main-nav");

function openMobileNav() {
  menuToggle.classList.add("open");
  menuToggle.setAttribute("aria-expanded", "true");
  mobilePanel.classList.add("open");
  mobilePanel.setAttribute("aria-hidden", "false");
  mobileOverlay.classList.add("open");
  mobileOverlay.setAttribute("aria-hidden", "false");
}

function closeMobileNav() {
  menuToggle.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
  mobilePanel.classList.remove("open");
  mobilePanel.setAttribute("aria-hidden", "true");
  mobileOverlay.classList.remove("open");
  mobileOverlay.setAttribute("aria-hidden", "true");
}

menuToggle?.addEventListener("click", () => {
  const isOpen = menuToggle.classList.contains("open");
  if (isOpen) closeMobileNav();
  else openMobileNav();
});

// close when clicking overlay
mobileOverlay?.addEventListener("click", closeMobileNav);

// close mobile nav when clicking a link (for single-page scroll)
navLinks.forEach(link => link.addEventListener("click", closeMobileNav));

// close on ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeMobileNav();
});

// basic keyboard focus: if desktop nav hidden and focus goes to it, open mobile nav
document.addEventListener("focusin", (e) => {
  if (!mainNav) return;
  const computed = window.getComputedStyle(mainNav).display;
  if (computed === "none" && e.target.closest(".main-nav") ) {
    openMobileNav();
  }
});
