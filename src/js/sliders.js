
import 'slick-carousel'

export default function() {

// Слайдер кубков

  $('.team__slider-text').slick({
    arrows: false,
    fade: true,
    dots: true,
    appendDots: '.team__slider-pagination',
    adaptiveHeight: true,
    asNavFor: '.team__slider-images'
  })

  $('.team__slider-images').slick({
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.team__slider-text'
   
  })

  $('.js-news-slider').slick({
    arrows: false,
    fade: true,
    dots: true,
    appendDots: '.news-slider__controls',
    autoplay: true,
    autoplaySpeed: 5000
  })

  $('.js-videos-slider').slick({
    vertical: true,
    slidesToShow: 3,
    arrows: true,
    // draggable: false,
    prevArrow: '.js-videos-slider-prev',
    nextArrow: '.js-videos-slider-next'
  })

  $('.js-photos-slider').slick({
    vertical: true,
    slidesToShow: 3,
    arrows: true,
    draggable: false,
    prevArrow: '.js-photos-slider-prev',
    nextArrow: '.js-photos-slider-next'
  })

  $('.js-conference-name-slider').slick({
    arrows: true,
    dots: false,
    prevArrow: '.js-conference-slider-prev',
    nextArrow: '.js-conference-slider-next',
    asNavFor: '.js-conference-tables-slider'
  })

  $('.js-conference-tables-slider').slick({
    arrows: false,
    dots: false,
    draggable: false,
    // adaptiveHeight: true
  })

  $('.js-khl-name-slider').slick({
    arrows: true,
    dots: false,
    prevArrow: '.js-khl-slider-prev',
    nextArrow: '.js-khl-slider-next',
    asNavFor: '.js-khl-tables-slider'
  })

  $('.js-khl-tables-slider').slick({
    arrows: false,
    dots: false,
    draggable: false
  })

  $('.js-playoff-name-slider').slick({
    arrows: true,
    dots: false,
    prevArrow: '.js-playoff-slider-prev',
    nextArrow: '.js-playoff-slider-next',
    asNavFor: '.js-playoff-tables-slider'
  })

  $('.js-playoff-tables-slider').slick({
    arrows: false,
    dots: false,
    draggable: false,
    // adaptiveHeight: true
  })

  $('.js-products-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '.js-shop-slider-prev',
    nextArrow: '.js-shop-slider-next'
  })

}
