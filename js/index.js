const menuList = document.querySelectorAll('.header__menu-list')

window.addEventListener('click', function (ev) {
  if (ev.target.classList.contains('header__menu-list')) {
    ev.target.classList.toggle('show')
  }
  // nav button in header
  if (ev.target.classList.contains('header__nav-mobile')) {
    ev.target.classList.toggle('active')
    document.querySelector('.header__infoblock-mobile').classList.toggle('active')
    document.querySelector('body').classList.toggle('_lock')
  }
  if (ev.target.classList.contains('nav-mobile__item')) {
    ev.target.parentNode.classList.toggle('active')
    document.querySelector('.header__infoblock-mobile').classList.toggle('active')
    document.querySelector('body').classList.toggle('_lock')
  }
  // if (ev.target.classList.contains('header__infolink')) {
  //   document.querySelector('.nav-mobile').classList.remove('active')
  //   document.querySelector('.header__infoblock-mobile').classList.remove('active')
  // }
  // if(ev.target.classList.contains('header__search-btn')) {
  //   document.querySelector('.'header__search-input).classList.add(open)
  // }
  if (ev.target.classList.contains('footer__subtitle_mob')) {
    ev.target.classList.toggle('active')
    document.querySelectorAll('.footer__prod .footer__list').forEach(el => el.classList.toggle('active'))
  }
})



//==============================================================
//SLIDER

// FIRST

const slider = new Swiper('.section-main__slider', {
  // Optional parameters
  init: true,
  loop: true,
  centeredSlides: false,
  initialSlide: 3,
  slidesPerView: 1,
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },

});

// SECOND
// window.addEventListener('resize', (e) => {
//   if (document.querySelector('.brands__slider').classList.contains('swiper-initialized')) return;
//   const sliderBrands2 = new Swiper('.brands__slider', {
//     // Optional parameters
//     init: true,
//     loop: true,
//     centeredSlides: false,
//     slidesPerView: 1,
//     spaceBetween: 0,

//     pagination: {
//       el: ".brands__pagination",
//       dynamicBullets: true,
//     },
//   });
// });
// console.log(document.documentElement.innerWidth)
// if (document.documentElement.clientWidth < 479.99) {
const sliderBrands = new Swiper('.brands__slider', {
  // Optional parameters
  init: true,
  loop: true,
  centeredSlides: false,
  slidesPerView: 1,
  spaceBetween: 0,

  pagination: {
    el: ".brands__pagination",
    dynamicBullets: true,
  },


});
// }
