import '@babel/polyfill'
import '@fancyapps/fancybox'
import 'lightcase'


import objectFitImages from 'object-fit-images'
import smoothscroll from 'smoothscroll-polyfill';

import setTabsOnPage from './tabs'
import initializeSliders from './sliders'
import searchModal from './search'
import addCopyrightText from './copyrightText'
import cookiePolicy from './cookiePolicy'
import customSelect from './customSelect'
import tableSorting from './tableSorting'
import formValidation from './formValidation'
import photoGallery from './photogallery'
import playoffTooltips from './playoffTooltips'
import customScrollbars from './customScrollbars'
import scrollableTable from './scrollableTable'
import highlightMaps from './highlightMaps'

document.addEventListener('DOMContentLoaded', function() {
  // Полифилл для CSS свойства ObjectFit(заполнение контейнера изображением)
  objectFitImages()

  // Полифилл для плавного скроллинга

  smoothscroll.polyfill()

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
  
})




window.addEventListener("load", function(event) {
  const preloader = document.querySelector('.js-preloader')

  if (preloader) {
    preloader.classList.remove('shown')
  }
});