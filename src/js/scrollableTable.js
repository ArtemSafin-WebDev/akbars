
import SimpleBar from 'simplebar'

export default function() {
  const scrollableTables = Array.from(document.querySelectorAll('.js-scrollable-table'))

  scrollableTables.forEach(table => {
    console.log('Adding custom scrollbar')
    const scrollableWrapper = table.querySelector('.js-scrollable-table-wrapper')
    const statisticsScrollBar = new SimpleBar(scrollableWrapper, {autoHide: false})
    const scrollableElement = statisticsScrollBar.getScrollElement()
    const scrollIncrement = 150;
    
    const scrollLeftButton = table.querySelector('.js-statistics-scroll-button-left')
    const scrollRightButton = table.querySelector('.js-statistics-scroll-button-right')
    const gradient = table.querySelector('.js-scrollable-table-gradient')

    scrollLeftButton.addEventListener('click', function(event) {
      event.preventDefault()
      // scrollableElement.scrollLeft -= 30;
      scrollableElement.scrollBy({ top: 0, left: -scrollIncrement, behavior: 'smooth' });
    })
    scrollRightButton.addEventListener('click', function(event) {
      event.preventDefault()
      // scrollableElement.scrollLeft += 30;
      scrollableElement.scrollBy({ top: 0, left: scrollIncrement, behavior: 'smooth' });
    })

    scrollableElement.addEventListener('scroll', function(event) {
      console.log(this.scrollLeft)
      console.log(event)
    })
  })
}