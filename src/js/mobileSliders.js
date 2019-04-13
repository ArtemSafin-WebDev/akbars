import 'slick-carousel'
import Swiper from 'swiper/dist/js/swiper.js'
import goalSliders from './mobileGoalsItems'

export default function() {
  $('.js-mobile-news-slider').slick({
    arrows: false,
    fade: true,
    dots: true,
    appendDots: '.js-news-dots'
  })


  const mediaSwiperElements = Array.from(document.querySelectorAll('.js-ak-bars-info-swiper'))

  mediaSwiperElements.forEach(element => {
    new Swiper(element, {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 15
    })
  })

  const shopSwiperElement = document.querySelector('.js-shop-slider')

  if (shopSwiperElement) {
    new Swiper(shopSwiperElement, {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 15
    })
  }

  const playerSwiperElements = document.querySelectorAll('.js-players-swiper')

  playerSwiperElements.forEach(element => {
    new Swiper(element, {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 15
    })
  })
  

  const regularNameSliderElement = document.querySelector('.js-swiper-regular-name-slider')
  const regularTableSliderElement = document.querySelector('.js-swiper-regular-table')

  if (regularNameSliderElement && regularTableSliderElement) {
    let regularNameSlider = new Swiper(regularNameSliderElement, {
      loop: true,
      navigation: {
        nextEl: '.js-swiper-regular-next',
        prevEl: '.js-swiper-regular-prev'
      }
    })

    let regularTableSlider = new Swiper(regularTableSliderElement, {
      loop: true
    })

    regularNameSlider.controller.control = regularTableSlider
    regularTableSlider.controller.control = regularNameSlider
    
  }


  const playoffNameSliderElement = document.querySelector('.js-swiper-playoff-name-slider')
  const playoffTableSliderElement = document.querySelector('.js-swiper-playoff-table')

  if (playoffNameSliderElement && playoffTableSliderElement) {
    let playoffNameSlider = new Swiper(playoffNameSliderElement, {
      loop: true,
      navigation: {
        nextEl: '.js-swiper-playoff-next',
        prevEl: '.js-swiper-playoff-prev'
      }
    })

    let playoffTableSlider = new Swiper(playoffTableSliderElement, {
      loop: true
    })

    playoffNameSlider.controller.control = playoffTableSlider
    playoffTableSlider.controller.control = playoffNameSlider
  }



  

  

  // initGoalSliders()

  window.goalSliders = {
    initialized: [],
    init: function() {
      this.destroy()
      this.initialized = goalSliders()
    },
    destroy: function() {
      if (this.initialized.length > 0) {
        this.initialized.forEach(function(slider) {
          slider.destroy(true, false)
        })
        this.initialized = []
      }
    }
  }

  window.goalSliders.init()
  

}
