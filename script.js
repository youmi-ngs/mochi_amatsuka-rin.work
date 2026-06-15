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

  // プロフィールカルーセル
  const images = document.querySelectorAll(".profile-fv__image");
  const prevBtn = document.querySelector(".profile-fv__arrow--prev");
  const nextBtn = document.querySelector(".profile-fv__arrow--next");

  if (images.length > 0 && prevBtn && nextBtn) {
    let current = 0;

    function showImage(index) {
      images.forEach((img) => img.classList.remove("is-active"));
      images[index].classList.add("is-active");
    }

    prevBtn.addEventListener("click", () => {
      current = (current - 1 + images.length) % images.length;
      showImage(current);
    });

    nextBtn.addEventListener("click", () => {
      current = (current + 1) % images.length;
      showImage(current);
    });
  }
});
