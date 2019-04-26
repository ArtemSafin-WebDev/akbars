import 'slick-carousel'
import Swiper from 'swiper/dist/js/swiper.js'

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
    asNavFor: '.team__slider-text',
    autoplay: true,
    autoplaySpeed: 5000
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

  function scrollTopAllTables() {
    const tables = window.scrollableConferenceElements
    if (tables.length > 0) {
      tables.forEach(table => {
        table.scrollTop = 0
      })
    }
  }

  $('.js-conference-name-slider').slick({
    arrows: true,
    dots: false,
    prevArrow: '.js-conference-slider-prev',
    nextArrow: '.js-conference-slider-next',
    asNavFor: '.js-conference-tables-slider'
  })

  $('.js-conference-tables-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    console.log('Executing before change on conference')
    scrollTopAllTables()
  })

  $('.js-conference-tables-slider').slick({
    arrows: false,
    dots: false,
    draggable: false
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

  $('.js-playoff-tables-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    console.log('Executing before change on playoff')
    scrollTopAllTables()
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
    draggable: false
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

  const akBarsInfoItems = Array.from(document.querySelectorAll('.js-ak-bars-info-item'))

  akBarsInfoItems.forEach(item => {
    new Swiper(item.querySelector('.js-ak-bars-info-slider'), {
      slidesPerView: 'auto',
      spaceBetween: 20,
      navigation: {
        nextEl: item.querySelector('.js-ak-bars-info-next'),
        prevEl: item.querySelector('.js-ak-bars-info-prev')
      },
      on: {
        reachEnd: function() {
          item.classList.remove('right-gradient-shown')
          item.classList.add('left-gradient-shown')
        },
        reachBeginning: function() {
          item.classList.remove('left-gradient-shown')
        },
        fromEdge: function() {
          item.classList.add('right-gradient-shown')
          item.classList.remove('left-gradient-shown')
        }
      }
    })
    console.log('Initialized')
  })

  const newsGallery = document.querySelector('.js-news-gallery')

  if (newsGallery) {
    const gradients = document.querySelector('.js-news-gallery-gradients')

    new Swiper(newsGallery, {
      slidesPerView: 'auto',
      spaceBetween: 30,
      navigation: {
        nextEl: document.querySelector('.js-news-gallery-next'),
        prevEl: document.querySelector('.js-news-gallery-prev')
      },
      on: {
        progress: function(progress) {
          console.log(progress)
          if (progress !== -0 && progress !== 1) {
            console.log('Adding both')
            gradients.classList.add('left-gradient')
            gradients.classList.add('right-gradient')
          }
        },
        reachEnd: function() {
          console.log('Removing right gradient')
          gradients.classList.remove('right-gradient')
        },
        reachBeginning: function() {
          console.log('Removing left gradient')
          gradients.classList.remove('left-gradient')
        }
      }
    })
  }

  function initGoalSliders() {
    const goalsItems = Array.from(document.querySelectorAll('.js-videos-goals-item'))
    const initializedSwipers = []
    goalsItems.forEach(item => {
      const slider = item.querySelector('.js-videos-goals-slider')
      const pagination = item.querySelector('.js-videos-goals-slider-pagination')
      const gradientWrapper = item.querySelector('.js-gradient-wrapper')
      const goalSwiper = new Swiper(slider, {
        slidesPerView: 'auto',
        spaceBetween: 30,
        pagination: {
          el: pagination,
          type: 'fraction'
        },
        navigation: {
          nextEl: item.querySelector('.js-video-goals-next'),
          prevEl: item.querySelector('.js-video-goals-prev')
        },
        on: {
          reachEnd: function() {
            gradientWrapper.classList.remove('right-gradient-shown')
            gradientWrapper.classList.add('left-gradient-shown')
          },
          reachBeginning: function() {
            gradientWrapper.classList.remove('left-gradient-shown')
          },
          fromEdge: function() {
            gradientWrapper.classList.add('right-gradient-shown')
            gradientWrapper.classList.remove('left-gradient-shown')
          }
        }
      })
      initializedSwipers.push(goalSwiper)
    })
    return initializedSwipers
  }

  window.goalSliders = {
    initialized: [],
    init: function() {
      this.destroy()
      this.initialized = initGoalSliders()
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
