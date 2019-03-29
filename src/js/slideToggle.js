import anime from 'lib/anime.es.js';


export function slideDown(element) {
  const initialDisplayMode = element.style.display
  let computedStyles
  let height

  element.style.display = 'block'
  element.style.boxSizing = 'border-box'

  compStyles = window.getComputedStyle(element);

}