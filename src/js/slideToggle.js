import anime from 'animejs'



export function setupAccordionStyles(element) {
  element.style.height = '0'
  // element.style.visibility = 'hidden'
  element.style.overflow = 'hidden'
  element.style.display = 'block'
}



export function makeSlideToggle(element) {
  let animating = false
  let open = false
  let animationObject
  const initialHeight = getHeight(element)

  function getHeight(element) {
    const initialDisplayMode = element.style.display
    const initialHeight = element.style.height
    let computedStyles
    let height

    element.style.display = 'block'
    element.style.boxSizing = 'border-box'
    element.style.height = 'auto'

    computedStyles = window.getComputedStyle(element)
    height = computedStyles.getPropertyValue('height')

    element.style.display = initialDisplayMode
    element.style.height = initialHeight

    return height
  }

  return function() {
    if (!open && !animating) {
      
      element.style.height = '0'
      // element.style.visibility = 'visible'

      animating = true
      animationObject = anime({
        targets: element,
        height: parseInt(initialHeight),
        easing: 'linear',
        duration: 400,
        complete: () => {
          console.log('Slide down complete')
          element.style.height = ''
          animating = false
          open = true
        }
      })
    } else if (!open && animating) {
      animationObject.reverse()
    } else {
      animating = true
      anime({
        targets: element,
        height: 0,
        easing: 'linear',
        duration: 400,
        complete: () => {
          console.log('Slide up complete')
          
          animating = false
          open = false
        }
      })
    }
  }
}
