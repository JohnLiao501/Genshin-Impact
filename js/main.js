var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 6,
      freeMode: true,
      watchSlidesProgress: true,
      loop: true

    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      loop: true

    });

    document.querySelector('.btn-next').addEventListener('click', function () {
      swiper2.slideNext();
    });

    document.querySelector('.btn-prev').addEventListener('click', function () {
      swiper2.slidePrev();
    });