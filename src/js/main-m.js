
import '@babel/polyfill'
import objectFitImages from 'object-fit-images'
import smoothscroll from 'smoothscroll-polyfill'

import mobileMenu from './mobileMenu'
import hideOnScroll from './mobileHideOnScroll'
import mobileSliders from './mobileSliders'
import setTabsOnPage from './tabs'
import tabURLChange from './tabUrlChange'
import touchDetection from './touchDetection'
import photogallery from './mobilePhotogallery'
import scrollIntoViewButtons from './scrollTabButtonIntoView'
import mobileHide from './mobileHide'
import formValidation from './formValidation'
import 'simplebar'
import 'lightcase'


import calendarTooltips from './mobileCalendarTooltips'


document.addEventListener('DOMContentLoaded', function() {

  // Полифилл .contains для IE 11

  if (!SVGElement.prototype.contains) {
    SVGElement.prototype.contains = HTMLDivElement.prototype.contains
  }

  // Полифилл для CSS свойства ObjectFit(заполнение контейнера изображением)

  objectFitImages()

  // Полифилл для плавного скроллинга

  smoothscroll.polyfill()

  // Определение тач девайсов

  touchDetection()

  // Мобильное меню навигации

  mobileMenu()

  // Скрываем шапку при скролле

  hideOnScroll()

  // Слайдеры мобильной версии
  
  mobileSliders()

  // Смена URL при смене таба

  tabURLChange()

  // Иниализация всех табов на странице с помощью фабрики функций

  setTabsOnPage()

  // Фотогалерея

  photogallery()


  // Прокручиваем кнопки активированных табов

  // scrollIntoViewButtons()


  // Мобильный хайд 

  mobileHide()


  // Валидация форм

  formValidation()

  // Тултипы календаря

  calendarTooltips()

})