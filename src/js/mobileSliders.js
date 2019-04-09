import 'slick-carousel'
import Swiper from 'swiper/dist/js/swiper.js'

export default function() {
  $('.js-mobile-news-slider').slick({
    arrows: false,
    fade: true,
    dots: true,
    appendDots: '.js-news-dots'
  })

  const akBarsInfoSwiper = new Swiper('.js-ak-bars-info-swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 15
  })

  const shopSlider = new Swiper('.js-shop-slider', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 15
  })

  const playersSlider = new Swiper('.js-players-swiper', {
    loop: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    spaceBetween: 15
  })

  let regularNameSlider = new Swiper('.js-swiper-regular-name-slider', {
    loop: true,
    navigation: {
      nextEl: '.js-swiper-regular-next',
      prevEl: '.js-swiper-regular-prev'
    }
  })

  let regularTableSlider = new Swiper('.js-swiper-regular-table', {
    loop: true
  })

  if (regularNameSlider && regularTableSlider) {
    regularNameSlider.controller.control = regularTableSlider
    regularTableSlider.controller.control = regularNameSlider
  }

  let playoffNameSlider = new Swiper('.js-swiper-playoff-name-slider', {
    loop: true,
    navigation: {
      nextEl: '.js-swiper-playoff-next',
      prevEl: '.js-swiper-playoff-prev'
    }
  })


  let playoffTableSlider = new Swiper('.js-swiper-playoff-table', {
    loop: true
  })


  if (playoffNameSlider && playoffTableSlider) {
    playoffNameSlider.controller.control = playoffTableSlider
    playoffTableSlider.controller.control = playoffNameSlider
  }
  



}
