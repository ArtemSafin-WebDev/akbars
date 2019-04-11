export default function() {
  const header = document.querySelector('.js-header')
  let lastScrollTop = 0
  const delta = 250
  const navbarHeight = header.offsetHeight + 100
  // let navbarHidden = false
  let didScroll = false

  window.addEventListener('scroll', function(evt) {
    didScroll = true
  })

  setInterval(function() {
    if (didScroll) {
      hasScrolled()
      didScroll = false
    }
  }, 250)

  function hasScrolled() {
    
      var st = window.scrollY
      if (Math.abs(lastScrollTop - st) <= delta) return
      // If current position > last position AND scrolled past navbar...
      if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        header.classList.add('hidden')
        // navbarHidden = true
      } else {
        // Scroll Up
        // If did not scroll past the document (possible on mac)...
        header.classList.remove('hidden')
        // navbarHidden = false
      }
      lastScrollTop = st
    
  }
}
