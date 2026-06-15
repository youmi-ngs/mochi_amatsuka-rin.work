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

  // スクロールフェードイン
  const fadeElements = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    { threshold: 0.1 }
  );
  fadeElements.forEach((el) => observer.observe(el));

  // 動画ポップアップ
  const videoModal = document.querySelector(".video-modal");
  const videoIframe = document.querySelector(".video-modal__iframe");
  const videoClose = document.querySelector(".video-modal__close");
  const videoOverlay = document.querySelector(".video-modal__overlay");
  const videoItems = document.querySelectorAll(".videos__item[data-video]");

  if (videoModal && videoItems.length > 0) {
    videoItems.forEach((item) => {
      item.addEventListener("click", () => {
        videoIframe.src = item.dataset.video;
        videoModal.classList.add("is-open");
        document.body.style.overflow = "hidden";
      });
    });

    function closeVideo() {
      videoModal.classList.remove("is-open");
      videoIframe.src = "";
      document.body.style.overflow = "";
    }

    videoClose.addEventListener("click", closeVideo);
    videoOverlay.addEventListener("click", closeVideo);
  }

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
