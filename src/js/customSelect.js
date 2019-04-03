import Choices from 'choices.js'

import PerfectScrollbar from 'perfect-scrollbar'

export default function() {
  const choicesOptions = {
    itemSelectText: '',
    noResultsText: 'Нет результатов',
    shouldSort: false,
    searchResultLimit: 999
  }
  // const seasonSelect = document.getElementById('season')

  const customSelects = Array.from(document.querySelectorAll('.js-custom-select'))
  const isIE = /Trident|MSIE/.test(navigator.userAgent)

  var selectInstances = []

  customSelects.forEach(select => {
    const selectElement = select.querySelector('select')
   
    let scrolledToTop = false

    if (selectElement) {
      selectInstances.push(new Choices(selectElement, choicesOptions))
    } else {
      throw new Error('No select input element present')
    }

    const choicesList = select.querySelector('.choices__list--dropdown .choices__list')
    const dropdown = select.querySelector('.choices__list--dropdown')

    choicesList.addEventListener('ps-y-reach-end', function() {
      scrolledToTop = true
      dropdown.classList.add('hide-gradient')
    })
    choicesList.addEventListener('ps-scroll-up', function() {
      if (scrolledToTop) {
        scrolledToTop = false
        dropdown.classList.remove('hide-gradient')
      }
    })
   
    const ps = new PerfectScrollbar(choicesList, {
      wheelSpeed: 1,
      wheelPropagation: false
    })

    selectElement.addEventListener(
      'search',
      function() {
        ps.update();
        
      },
      false
    )
    selectElement.addEventListener(
      'showDropdown',
      function() {
        ps.update();
        
      },
      false
    )
  })

  

  window.selectInstances = selectInstances
}
