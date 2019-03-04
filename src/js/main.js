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
    prevArrow: '.js-shop-slider-prev',
    nextArrow: '.js-shop-slider-next',
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

  document.querySelector('.js-tab-button-conference').addEventListener('click', function() {
    $('.js-conference-name-slider').slick('setPosition')
    $('.js-conference-tables-slider').slick('setPosition')
  })

  document.querySelector('.js-tab-button-division').addEventListener('click', function() {
    $('.js-division-name-slider').slick('setPosition')
    $('.js-division-tables-slider').slick('setPosition')
  })

  document.querySelector('.js-tab-button-khl').addEventListener('click', function() {
    $('.js-khl-name-slider').slick('setPosition')
    $('.js-khl-tables-slider').slick('setPosition')
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
