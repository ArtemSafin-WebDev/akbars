// import {makeSlideToggle, setupAccordionStyles} from './slideToggle'

export default function() {
  const accordions = Array.from(document.querySelectorAll('.js-abonement-accordion'))
  const slidingDuration = 1000

  accordions.forEach((accordion, index) => {
    const accordionButton = accordion.querySelector('.js-accordion-button')
    const accordionContent = accordion.querySelector('.js-accordion-content')
    const accordionWrapper = accordion

    // setupAccordionStyles(accordionContent)
    // const slideToggle = makeSlideToggle(accordionContent)

    accordionButton.addEventListener('click', function(event) {
      event.preventDefault()
      if (accordionWrapper.classList.contains('active')) {
        accordionWrapper.classList.remove('active')
        $(accordionContent).slideUp()

        // slideToggle(accordionContent)
        console.log(`Self closing accordion ${index + 1}`)
      } else {
        accordionWrapper.classList.add('active')
        $(accordionContent).slideDown()

        // slideToggle(accordionContent)

        // accordions.forEach((accordion, index) => {
        //   if (accordion.classList.contains('active')) {
        //     accordion.classList.remove('active')
        //     $(accordion.querySelector('.js-accordion-content')).slideUp(slidingDuration)

        //     console.log(`Closing accordion ${index + 1}`)
        //   } else if (accordion === accordionWrapper) {
        //     accordionWrapper.classList.add('active')
        //     $(accordionContent).slideDown(slidingDuration)

        //     console.log(`Opening accordion ${index + 1}`)
        //   } else {
        //     console.log(`Doing nothing accordion ${index + 1}`)
        //   }
        // })
      }
    })
  })
}
