import jump from 'jump.js'

export default function() {
  const anchorLinks = Array.from(document.querySelectorAll('.js-anchor-link'))


  function smoothScrollTo(evt) {
    evt.preventDefault()
    jump(document.querySelector(this.hash))
  }

  anchorLinks.forEach(link => {
    link.addEventListener('click', smoothScrollTo)
  })
}
