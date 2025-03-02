document.addEventListener("DOMContentLoaded", function(){
    const swiper = new Swiper('.swiper', {
        direction: 'horizontal',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: false,
          dynamicMainBullets: false,
          renderBullet: function (index, className) {
            if (index < 4) {
              return '<span class="' + className + '"></span>';
            }
          },
        },
        autoplay: {
            delay: 3000,
          },
        slidesPerView: 3,  
        slidesPerGroup: 3,
      });
})