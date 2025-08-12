const menuToggle = document.querySelector(".menu-icon");
const navLinks = document.querySelector(".nav-links");
const header = document.querySelector(".navbar");
//   CURRENT VIEWPORT SIZE
const currentViewportSize = window.innerWidth;
console.log(currentViewportSize)

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  //   NAV HEIGHT
  const navHeight = header.offsetHeight;
  //   AUTO ADJUST NAV LINKS MARGIN TOP
  navLinks.style.marginTop = `${navHeight}px`;
});

