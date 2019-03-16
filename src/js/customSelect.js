import Choices from 'choices.js'
import SimpleBar from 'simplebar'

export default function() {
  const choicesOptions = {
    itemSelectText: '',
    noResultsText: '',
    shouldSort: false,
    searchResultLimit: 999
  }
  // const seasonSelect = document.getElementById('season')


  const customSelects = Array.from(document.querySelectorAll('.js-custom-select'))
  const isIE = /Trident|MSIE/.test(navigator.userAgent)
  

  customSelects.forEach(select => {
    const selectElement = select.querySelector('select')
    if (selectElement) {
      new Choices(selectElement, choicesOptions)
    } else {
      throw new Error('No select input element present')
    }
   
    const choicesList = select.querySelector('.choices__list--dropdown .choices__list')
  
    if (choicesList) {
      $(choicesList).wrap("<div class='choices__list-wrapper'></div>")
      
    } else {
      throw new Error('Not found choices list for custom scrollbar addition')
    }
   
    if (!isIE) {
      const choicesListWrapper = select.querySelector('.choices__list--dropdown .choices__list-wrapper')
      new SimpleBar(choicesListWrapper, {
        autoHide: false
      })
    }
  })

  
}