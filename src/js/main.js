import '@babel/polyfill'
import $ from 'jquery'
import 'slick-carousel'
import '@fancyapps/fancybox'
import makeTabsController from './tabs'
import objectFitImages from 'object-fit-images'
// import 'simplebar'

import 'simplebar';
import Choices from 'choices.js'

document.addEventListener('DOMContentLoaded', function(event) {
  // Полифилл для CSS свойства ObjectFit

  objectFitImages();

  // Скроллбар

  
  
  // new SimpleBar(document.getElementById('division-simplebar'), { autoHide: false });
  // new SimpleBar(document.getElementById('conference-simplebar'), { autoHide: false });
  

  // Слайдер кубков

  const teamSliderDotsContainer = document.querySelector('.team__slider-pagination')
  const newsSliderDotsContainer = document.querySelector('.news-slider__controls')

  $('.team__slider-text').slick({
    arrows: false,
    fade: true,
    dots: true,
    appendDots: teamSliderDotsContainer,
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
    appendDots: newsSliderDotsContainer
  })

  $('.js-videos-slider').slick({
    vertical: true,
    slidesToShow: 3,
    arrows: true,
    draggable: false,
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

  $('.js-division-name-slider').slick({
    arrows: true,
    dots: false,
    prevArrow: '.js-division-slider-prev',
    nextArrow: '.js-division-slider-next',
    asNavFor: '.js-division-tables-slider'
  })

  $('.js-division-tables-slider').slick({
    arrows: false,
    dots: false,
    draggable: false
  })

  $('.js-products-slider').slick({
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    prevArrow: '.js-shop-slider-prev',
    nextArrow: '.js-shop-slider-next'
  })

  // Модальное окно поиска

  const searchButton = document.getElementById('search-button')
  const searchModal = document.querySelector('.search-modal')

  if (searchModal) {
    searchButton.addEventListener('click', event => {
      event.preventDefault()
      document.body.classList.toggle('search-modal-open')
    })

    searchModal.addEventListener('click', event => {
      event.preventDefault()
      if (event.target === searchModal) {
        document.body.classList.remove('search-modal-open')
      }
    })
  }

  // Иниализация всех табов на странице с помощью фабрики функций

  const tabContainers = Array.from(document.querySelectorAll('.js-tabs-container'))

  if (tabContainers.length > 0) {
    tabContainers.forEach(tabContainer => {
      const initializeTab = makeTabsController()
      initializeTab(tabContainer)
    })
  }

  
  // Политика по кукам

  const cookiePolicyPanel = document.querySelector('.js-cookie-policy')
  const cookiePolicyAccept = document.querySelector('.js-cookie-policy-accept')

  if (cookiePolicyPanel) {
    const cookiePolicyAccepted = localStorage.getItem('cookieAccepted') === 'Y'

    if (!cookiePolicyAccepted) {
      cookiePolicyPanel.classList.add('shown')
    }
    cookiePolicyAccept.addEventListener('click', function() {
      localStorage.setItem('cookieAccepted', 'Y')
      cookiePolicyPanel.classList.remove('shown')
    })
  }


  // Кастомный селект


  // const choicesOptions = {
  //   itemSelectText: ''
  // }
  // new Choices('#season', choicesOptions)

 
})
