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
      //effect: 'fade',
      loop: true

    });

    document.querySelector('.btn-next').addEventListener('click', function () {
      swiper2.slideNext(); // 切换到下一张幻灯片
    });

    document.querySelector('.btn-prev').addEventListener('click', function () {
      swiper2.slidePrev(); // 切换到上一张幻灯片
    });