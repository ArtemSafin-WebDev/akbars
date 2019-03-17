import SimpleBar from 'simplebar'
import { throttle } from 'lodash'

export default function() {
  // Для колонки плей-офф

  const playoffScrollElement = document.querySelector('.js-playoff-simplebar')
  let playoffSimplebar
  if (playoffScrollElement) {
    playoffSimplebar = new SimpleBar(playoffScrollElement)
  }

  if (playoffSimplebar) {
    const conferenceGradient = document.querySelector('.js-playoff-top-gradient')
    playoffSimplebar.getScrollElement().addEventListener('scroll', throttle(function() {
      const scrollTop = this.scrollTop
      if (scrollTop > 0) {
        conferenceGradient.classList.add('shown')
      } else {
        conferenceGradient.classList.remove('shown')
      }
    }, 200))
  }

  // Для обычной колонки конференций и дивизионов

  const conferenceScrollElement = document.querySelector('.js-conference-info-simplebar')
  let conferenceInfoSimplebar
  if (conferenceScrollElement) {
    conferenceInfoSimplebar = new SimpleBar(conferenceScrollElement)
  }

  if (conferenceInfoSimplebar) {
    const conferenceGradient = document.querySelector('.js-conference-top-gradient')
    conferenceInfoSimplebar.getScrollElement().addEventListener('scroll', throttle(function() {
      const scrollTop = this.scrollTop
      if (scrollTop > 0) {
        conferenceGradient.classList.add('shown')
      } else {
        conferenceGradient.classList.remove('shown')
      }
    }, 200))
  }





  // const statisticsScrollContainer = document.querySelector('.js-statistics-table-wrapper')
  // let statisticsScrollBar;

  // if (statisticsScrollContainer) {
  //   statisticsScrollBar = new SimpleBar(statisticsScrollContainer, {autoHide: false})
  // }

}
