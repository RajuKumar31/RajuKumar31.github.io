// NAVBAR SHADOW ON SCROLL

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if (window.scrollY > 50) {
    navbar.style.background = "rgba(5,8,22,0.95)";
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.35)";
  } else {
    navbar.style.background = "rgba(5,8,22,0.75)";
    navbar.style.boxShadow = "none";
  }

});

// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
  ".section, .project-card, .featured-card, .timeline-item, .skill-card, .cert-card, .contact-card"
);

const revealOnScroll = () => {

  revealElements.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }

  });

};

// INITIAL STYLES

revealElements.forEach((element) => {

  element.style.opacity = "0";
  element.style.transform = "translateY(40px)";
  element.style.transition = "all 0.8s ease";

});

// RUN ON LOAD

window.addEventListener("load", revealOnScroll);

// RUN ON SCROLL

window.addEventListener("scroll", revealOnScroll);

// ACTIVE NAVIGATION HIGHLIGHT

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop) {
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }

  });

});

// SMOOTH BUTTON HOVER EFFECT

const buttons = document.querySelectorAll(
  ".primary-btn, .secondary-btn, .resume-btn"
);

buttons.forEach((button) => {

  button.addEventListener("mouseenter", () => {
    button.style.transform = "translateY(-3px)";
  });

  button.addEventListener("mouseleave", () => {
    button.style.transform = "translateY(0)";
  });

});