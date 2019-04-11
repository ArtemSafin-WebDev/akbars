
import '@babel/polyfill'
import objectFitImages from 'object-fit-images'
import smoothscroll from 'smoothscroll-polyfill'

import mobileMenu from './mobileMenu'
import hideOnScroll from './mobileHideOnScroll'
import mobileSliders from './mobileSliders'
import setTabsOnPage from './tabs'
import touchDetection from './touchDetection'
import photogallery from './mobilePhotogallery'
import scrollIntoViewButtons from './scrollTabButtonIntoView'
import mobileHide from './mobileHide'
import 'simplebar'


document.addEventListener('DOMContentLoaded', function() {

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

  // Иниализация всех табов на странице с помощью фабрики функций

  setTabsOnPage()

  // Фотогалерея

  photogallery()


  // Прокручиваем кнопки активированных табов

  // scrollIntoViewButtons()


  // Мобильный хайд 

  mobileHide()


  
})