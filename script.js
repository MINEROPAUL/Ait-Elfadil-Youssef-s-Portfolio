document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling
  smoothScrolling();

  // Hide/show navigation bar on scroll
  hideShowNavbar();

  // Fade effect on scroll
  fadeEffectOnScroll();
});

function smoothScrolling() {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = link.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      const targetOffset =
        targetSection.offsetTop - document.querySelector("header").offsetHeight;

      window.scrollTo({
        top: targetOffset,
        behavior: "smooth",
      });
    });
  });
}

function hideShowNavbar() {
  let prevScrollpos = window.pageYOffset;

  window.addEventListener("scroll", function () {
    let currentScrollPos = window.pageYOffset;
    const navbar = document.querySelector("header");

    if (prevScrollpos > currentScrollPos) {
      navbar.style.top = "0";
    } else {
      navbar.style.top = "-70px";
    }

    prevScrollpos = currentScrollPos;
  });
}

function fadeEffectOnScroll() {
  const sections = document.querySelectorAll(".section");

  window.addEventListener("scroll", function () {
    sections.forEach(function (section) {
      const sectionTop = section.getBoundingClientRect().top;
      const sectionBottom = section.getBoundingClientRect().bottom;

      if (sectionTop < window.innerHeight && sectionBottom >= 0) {
        section.style.opacity = "1";
        section.style.transform = "translateY(0)";
      } else {
        section.style.opacity = "0";
        section.style.transform = "translateY(50px)";
      }
    });
  });
}

