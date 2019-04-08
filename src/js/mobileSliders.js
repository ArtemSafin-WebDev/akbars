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
}
