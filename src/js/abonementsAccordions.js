// import {makeSlideToggle, setupAccordionStyles} from './slideToggle'

export default function() {
  const accordions = Array.from(document.querySelectorAll('.js-abonement-accordion'))
  const slidingDuration = 1000

  accordions.forEach((accordion, index) => {
    const accordionButton = accordion.querySelector('.js-accordion-button')
    const accordionContent = accordion.querySelector('.js-accordion-content')
    const accordionWrapper = accordion

    accordionButton.addEventListener('click', function(event) {
      event.preventDefault()
      if (accordionWrapper.classList.contains('active')) {
        accordionWrapper.classList.remove('active')
        $(accordionContent).slideUp()

        console.log(`Self closing accordion ${index + 1}`)
      } else {
        accordionWrapper.classList.add('active')
        $(accordionContent).slideDown()
      }
    })
  })
}
