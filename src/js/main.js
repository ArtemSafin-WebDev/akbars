import $ from 'jquery'

import 'slick-carousel'
import '@fancyapps/fancybox'
import makeTabsController from './tabs'

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM Loaded')

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
    prevArrow: '.js-videos-slider-prev',
    nextArrow: '.js-videos-slider-next'
  })

  $('.js-photos-slider').slick({
    vertical: true,
    slidesToShow: 3,
    arrows: true,
    prevArrow: '.js-photos-slider-prev',
    nextArrow: '.js-photos-slider-next'
  })

  // Модальное окно поиска

  const searchButton = document.getElementById('search-button')
  const searchModal = document.querySelector('.search-modal')

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

  // Иниализация всех табов на странице с помощью фабрики функций

  const tabContainers = Array.from(document.querySelectorAll('.js-tabs-container'))

  tabContainers.forEach(tabContainer => {
    const initializeTab = makeTabsController()
    initializeTab(tabContainer)
  })

  // Фиксы для слайдеров в табах. Слайдер не инициализируется правильно, если у элемента стоит свойство display: none

  document.querySelector('.js-tab-button-info').addEventListener('click', function() {
    $('.js-videos-slider').slick('setPosition')
  })
  document.querySelector('.js-tab-button-photos').addEventListener('click', function() {
    $('.js-photos-slider').slick('setPosition')
  })

  // Календарь

  // $.ajax({
  //   type: 'POST',
  //   url: 'https://www.ak-bars.ru/calendar/loadtable.php',
  //   data: { month: 2, year: 2019, team: 1 },
  //   success: function(data) {
  //     console.log(data)
  //   },
  //   error: function(XMLHttpRequest, textStatus, errorThrown) {
  //     alert('Ошибка связи с сервером!')
  //     return false
  //   }
  // })



})
