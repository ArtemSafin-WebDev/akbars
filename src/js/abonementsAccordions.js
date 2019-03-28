export default function() {
  const accordions = Array.from(document.querySelectorAll('.js-abonement-accordion'))
  const slidingDuration = 1000
  let activeAccordions = []



  accordions.forEach(accordion => {
    const accordionButton = accordion.querySelector('.js-accordion-button')
    const accordionContent = accordion.querySelector('.js-accordion-content')

    accordionButton.addEventListener('click', function(event) {
      event.preventDefault()
      if (activeAccordions.includes(accordion)) {
        accordion.classList.remove('active')
        $(accordionContent).slideUp(slidingDuration)
        activeAccordions = activeAccordions.filter(acc => {
          if (acc ===  accordion) {
            return false
          } else {
            return true
          }
        })
      } else {
        activeAccordions.forEach(accordionToClose => {
          const contentToClose = accordionToClose.querySelector('.js-accordion-content')
          accordionToClose.classList.remove('active')
          $(contentToClose).slideUp(slidingDuration)
        })
        activeAccordions = []
        activeAccordions.push(accordion)
        accordion.classList.add('active')
        $(accordionContent).slideDown(slidingDuration)
      }
    })
  })
}
  

  

 


