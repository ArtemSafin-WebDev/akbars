import SimpleBar from 'simplebar'
import { throttle } from 'lodash'

export default function() {
  const conferenceSliderItems = Array.from(document.querySelectorAll('.js-conference-slider-item'))
  let scrollableConferenceElements = []
  
  conferenceSliderItems.forEach(item => {
    const simplebar = new SimpleBar(item.querySelector('.js-conference-simplebar'))
    const scrollableContainer = simplebar.getScrollElement();
    const gradient = item.querySelector('.js-conference-gradient')
    scrollableContainer.addEventListener('scroll', throttle(function(event) {
      if (this.scrollTop !== 0) {
        gradient.classList.add('shown')
      } else {
        gradient.classList.remove('shown')
      }
    }, 200))
    scrollableConferenceElements.push(scrollableContainer)
  })


  window.scrollableConferenceElements = scrollableConferenceElements

}
