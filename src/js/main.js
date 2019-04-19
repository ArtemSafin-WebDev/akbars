import '@babel/polyfill'
// import '@fancyapps/fancybox'
import 'lightcase'

import objectFitImages from 'object-fit-images'
import smoothscroll from 'smoothscroll-polyfill'
import customEventsPolyfill from './customEventsPolyfill'


import setTabsOnPage from './tabs'
import initializeSliders from './sliders'
import searchModal from './search'
// import addCopyrightText from './copyrightText'
import cookiePolicy from './cookiePolicy'
import customSelect from './customSelect'
import tableSorting from './tableSorting'
import formValidation from './formValidation'
import photoGallery from './photogallery'
import playoffTooltips from './playoffTooltips'
import customScrollbars from './customScrollbars'
import scrollableTable from './scrollableTable'
import highlightMaps from './highlightMaps'
import datepickers from './datepickers'
import loginOpen from './loginOpen'
import socialOpen from './socialOpen'
import selectsGroups from './selectsGroup'
import plansTables from './plansTables'
import abonementAccordions from './abonementsAccordions'
import smoothScrollingLinks from './anchorLinksSmoothScrolling'
import abonementsModals from './abonementsModals'
import prognosisSubmitTest from './prognosisSubmitTest';
import touchDetection from './touchDetection';

import calendarTooltips from './calendarTooltips'
import tabURLChange from './tabUrlChange'
import mobileHide from './mobileHide'
import audioPlayer from './audioPlayer'



document.addEventListener('DOMContentLoaded', function() {

  // Полифилл .contains для IE 11

  if (!SVGElement.prototype.contains) {
    SVGElement.prototype.contains = HTMLDivElement.prototype.contains
  }
  
  // Полифилл для CSS свойства ObjectFit(заполнение контейнера изображением)
  objectFitImages()

  // Полифилл для плавного скроллинга

  smoothscroll.polyfill()

  // Полифилл кастомных событий

  customEventsPolyfill()

  // Определяем тач устройства

  touchDetection()

  // Инициализиуем слайдеры на странице

  initializeSliders()

  // Добавляем сведения об источнике при копировании текста с сайта

  // addCopyrightText()

  // Модальное окно поиска

  searchModal()

   // Смена URL при смене табов

   tabURLChange()

  // Иниализация всех табов на странице с помощью фабрики функций

  setTabsOnPage()

  // Активируем группы селектов

  selectsGroups()

  // Политика по кукам

  cookiePolicy()

  // Кастомный селект

  customSelect()

  // Сортировка таблиц

  tableSorting()

  // Валидация форм

  formValidation()

  // Фотогалерея

  photoGallery()

  // Тултипы "История встреч" в разделе плей-офф

  playoffTooltips()

  // Кастомный скроллбар

  customScrollbars()

  // Таблицы с горизонтальной прокруткой

  scrollableTable()

  // Подсвечиваем карту зала

  highlightMaps()

  // Включаем датапикеры

  datepickers()

  // Открытие меню логина

  loginOpen()

  // Открытие меню социальных сетей

  socialOpen()

  // Таблицы абонементов

  plansTables()

  // Аккордионы абонементов

  abonementAccordions()

  // Плавная прокрутка якорей

  smoothScrollingLinks()

  // Модальные окна абонементов

  abonementsModals()

  // Тест кнопки прогноза

  prognosisSubmitTest()

  // Тултипы календаря

  calendarTooltips()

  // Хайды как на мобильной версии

  mobileHide()


  // Аудио плеер

  audioPlayer()
  

 

})

window.addEventListener('load', function(event) {
  const preloader = document.querySelector('.js-preloader')

  if (preloader) {
    preloader.classList.remove('shown')
  }
})
