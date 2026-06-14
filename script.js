document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menuOverlay = document.querySelector(".menu-overlay");
  const menuClose = document.querySelector(".menu-close");
  const menuLinks = document.querySelectorAll(".menu-overlay__list a");

  hamburger.addEventListener("click", () => {
    menuOverlay.classList.add("is-open");
    document.body.style.overflow = "hidden";
  });

  menuClose.addEventListener("click", () => {
    menuOverlay.classList.remove("is-open");
    document.body.style.overflow = "";
  });

  menuLinks.forEach((link) => {
    link.addEventListener("click", () => {
      menuOverlay.classList.remove("is-open");
      document.body.style.overflow = "";
    });
  });
});
