import '@babel/polyfill'
import $ from 'jquery'
import 'slick-carousel'
import '@fancyapps/fancybox'
import makeTabsController from './tabs'
import objectFitImages from 'object-fit-images'
// import 'simplebar'

import SimpleBar from 'simplebar'
import Choices from 'choices.js'

document.addEventListener('DOMContentLoaded', function(event) {
  // Полифилл для CSS свойства ObjectFit

  objectFitImages()

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
    draggable: false,
    adaptiveHeight: true
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

  const searchButton = document.querySelector('.js-search-modal-open')
  const searchModal = document.querySelector('.js-search-modal')
  const searchModalClose = document.querySelector('.js-search-modal-close')

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

    searchModalClose.addEventListener('click', event => {
      event.preventDefault()
      document.body.classList.remove('search-modal-open')
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

  const choicesOptions = {
    itemSelectText: '',
    noResultsText: '',
    shouldSort: false
  }
  const seasonSelect = document.getElementById('season')

  if (seasonSelect) {
    new Choices(seasonSelect, choicesOptions)

    $('.staff .choices__list--dropdown .choices__list').wrap("<div class='choices__list-wrapper'></div>")

    const isIE = /Trident|MSIE/.test(navigator.userAgent)
    if (!isIE) {
      new SimpleBar(document.querySelector('.staff .choices__list--dropdown .choices__list-wrapper'), {
        autoHide: false
      })
    }
  }

  // Добавление текста при копировании с сайта

  document.oncopy = function() {
    var bodyElement = document.body
    var selection = getSelection()
    var href = document.location.href
    var copyright = "<br><br>Источник: <a href='" + href + "'>" + href + '</a><br>© Официальный сайт ХК Ак Барс'
    var text = selection + copyright
    var divElement = document.createElement('div')
    divElement.style.position = 'absolute'
    divElement.style.left = '-99999px'
    divElement.innerHTML = text
    bodyElement.appendChild(divElement)
    selection.selectAllChildren(divElement)
    setTimeout(function() {
      bodyElement.removeChild(divElement)
    }, 0)
  }

  // Сортировка таблиц

  // const table = document.querySelector('.staff__info-table')
  // if (table) {

  //   //  Получаем ряды, находящиеся в tBody таблицы

  //   const tBody = table.tBodies[0]
  //   const tRows = Array.from(tBody.rows)

  //   let column = 3;
  //   let dateColumn = 3;

  //   // Нужно написать дополнительную логику для сортировки дат

  //   // Сортируем, сравнивая значение колонки текущего ряда со значением колонки из следующего

  //   let tRowsSorted = tRows.sort((a, b) => {
  //     let valueRowA = a.cells[column - 1].textContent.trim();
  //     let valueRowB = b.cells[column - 1].textContent.trim();
  //     if (column === dateColumn) {
  //       valueRowA = valueRowA.split('.').reverse().join('');
  //       valueRowB = valueRowB.split('.').reverse().join('');
  //     }
  //     return $.isNumeric(valueRowA) && $.isNumeric(valueRowB) ? valueRowA - valueRowB : valueRowA.toString().localeCompare(valueRowB);
  //   })

  //   // Перемещаем ряды в новом порядке

  //   tRowsSorted.forEach(tr => {
  //     tBody.appendChild(tr)
  //   })
  // }

  $.fn.dataTable.moment('DD.MM.YYYY')

  $.fn.dataTable.moment = function(format, locale) {
    var types = $.fn.dataTable.ext.type

    // Add type detection
    types.detect.unshift(function(d) {
      return moment(d, format, locale, true).isValid() ? 'moment-' + format : null
    })

    // Add sorting method - use an integer for the sorting
    types.order['moment-' + format + '-pre'] = function(d) {
      return moment(d, format, locale, true).unix()
    }
  }

  $('.js-table-sortable').DataTable({
    paging: false,
    info: false,
    searching: false,
    aaSorting: []
  })

  // Скролл внутри блока плей-офф

  const playoffScrollElement = document.querySelector('.js-playoff-simplebar')
  let playoffSimplebar
  if (playoffScrollElement) {
    playoffSimplebar = new SimpleBar(playoffScrollElement)
  }

  if (playoffSimplebar) {
    const conferenceGradient = document.querySelector('.js-playoff-top-gradient')
    playoffSimplebar.getScrollElement().addEventListener('scroll', function() {
      const scrollTop = this.scrollTop
      if (scrollTop > 0) {
        conferenceGradient.classList.add('shown')
        console.log('Gradient shown')
      } else {
        conferenceGradient.classList.remove('shown')
        console.log('Gradient removed')
      }
    })
  }

  const conferenceScrollElement = document.querySelector('.js-conference-info-simplebar')
  let conferenceInfoSimplebar
  if (conferenceScrollElement) {
    conferenceInfoSimplebar = new SimpleBar(conferenceScrollElement)
  }

  if (conferenceInfoSimplebar) {
    const conferenceGradient = document.querySelector('.js-conference-top-gradient')
    conferenceInfoSimplebar.getScrollElement().addEventListener('scroll', function() {
      const scrollTop = this.scrollTop
      if (scrollTop > 0) {
        conferenceGradient.classList.add('shown')
        console.log('Gradient shown')
      } else {
        conferenceGradient.classList.remove('shown')
        console.log('Gradient removed')
      }
    })
  }

  const historyLinks = Array.from(document.querySelectorAll('.conference__playoff-history'))

  historyLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault()
      const tooltip = link.parentElement.parentElement.parentElement.querySelector('.conference__playoff-table-tooltip')
      tooltip.classList.toggle('shown')
      $(tooltip).slideDown();
    })
  })
})
