import Choices from 'choices.js'
import SimpleBar from 'simplebar'

export default function() {
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
}