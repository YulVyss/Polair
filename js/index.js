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

const sliderBrands = new Swiper('.brands__slider', {
  // Optional parameters
  init: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  spaceBetween: 0,

  pagination: {
    el: ".brands__pagination",
    dynamicBullets: true,
  },


});

// GSAP animation

let tl = gsap.timeline()
tl.from('.header__bottom', { duration: 1, yPercent: -100 })
  .from('.slide__img', { opacity: 0.5, duration: 1 })
  .from('.slide__link', { backgroundColor: '#003154', color: '#fff', duration: 2, repeat: 2, yoyo: true })
