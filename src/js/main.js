import '@babel/polyfill'
// import $ from 'jquery'
import '@fancyapps/fancybox'

import setTabsOnPage from './tabs'
import objectFitImages from 'object-fit-images'
import initializeSliders from './sliders';
import searchModal from './search';
import addCopyrightText from './copyrightText';
import cookiePolicy from './cookiePolicy'
import SimpleBar from 'simplebar'
import customSelect from './customSelect';
import tableSorting from './tableSorting';
import formValidation from './formValidation';



document.addEventListener('DOMContentLoaded', function(event) {
  // Полифилл для CSS свойства ObjectFit(заполнение контейнера изображением)
  objectFitImages()

  // Инициализиуем слайдеры на странице
  initializeSliders()

  // Добавляем сведения об источнике при копировании текста с сайта

  addCopyrightText()

  // Модальное окно поиска

  searchModal()

  // Иниализация всех табов на странице с помощью фабрики функций

  setTabsOnPage()

  // Политика по кукам

  cookiePolicy()

  // Кастомный селект

  customSelect()


  // Сортировка таблиц

  tableSorting()

  // Валидация форм

  formValidation()

  
  ///////////////////////////////
  // Скролл внутри блока плей-офф
  //////////////////////////////

  // Для колонки плей-офф

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
      } else {
        conferenceGradient.classList.remove('shown')
      }
    })
  }

  // Для обычной колонки конференций и дивизионов

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
      } else {
        conferenceGradient.classList.remove('shown')
      }
    })
  }


  //////////////////////////
  // Ссылки "История встреч"
  /////////////////////////


  // Находим все ссылки и превращаем Node List в массив

  const historyLinks = Array.from(document.querySelectorAll('.conference__playoff-history'))


  // Функция-обработчик в форме замыкания

  function makeTooltipOpener(link) {
    event.preventDefault()
    var open = false
    let tooltip = link.parentElement.parentElement.parentElement.querySelector('.conference__playoff-table-tooltip')
    let tooltipContent;
    if (tooltip) {
      tooltipContent = tooltip.querySelector('.conference__playoff-table-tooltip-content');
    }
    return function(event) {
      event.preventDefault()
      if (!open) {
        tooltip.classList.add('shown')
        $(tooltipContent).slideDown()
        open = true
      } else {
        tooltip.classList.remove('shown')
        open = false
        $(tooltipContent).slideUp()
      }
    }
  }

  // Создаем и назначаем обработчик для каждой ссылки из массива

  historyLinks.forEach(link => {
    link.addEventListener('click', makeTooltipOpener(link))
  })
})
