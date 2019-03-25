
import '@babel/polyfill'
import objectFitImages from 'object-fit-images'

import mobileMenu from './mobileMenu'
import hideOnScroll from './mobileHideOnScroll'
import mobileSliders from './mobileSliders'
import setTabsOnPage from './tabs'
import 'simplebar'

document.addEventListener('DOMContentLoaded', function() {

  // Полифилл для CSS свойства ObjectFit(заполнение контейнера изображением)

  objectFitImages()

  // Мобильное меню навигации

  mobileMenu()

  // Скрываем шапку при скролле

  hideOnScroll()

  // Слайдеры мобильной версии
  

  mobileSliders()

  // Иниализация всех табов на странице с помощью фабрики функций

  // setTabsOnPage()


  
})