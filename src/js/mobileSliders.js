import 'slick-carousel'

export default function() {
  $('.js-mobile-news-slider').slick({
    arrows: false,
    fade: true,
    dots: true,
    appendDots: '.js-news-dots'
  })
}