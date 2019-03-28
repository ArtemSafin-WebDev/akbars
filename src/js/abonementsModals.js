export default function() {
  const modalOpenLinks = Array.from(document.querySelectorAll('.js-arena-modal-link'))

  modalOpenLinks.forEach(link => {
    console.log(link.href.baseVal)
    const linkModal = document.querySelector(link.href.baseVal)
    console.log(linkModal)
    if (linkModal) {
      const modalClose = linkModal.querySelector('.js-arena-modal-close')
      link.addEventListener('click', function(evt) {
        evt.preventDefault()
        linkModal.classList.add('active')
      })

      linkModal.addEventListener('click', function(evt) {
        if (evt.target === this) {
          this.classList.remove('active')
        }
      })

      modalClose.addEventListener('click', function(evt) {
        evt.preventDefault()
        linkModal.classList.remove('active')
      })
    }  
  })
}