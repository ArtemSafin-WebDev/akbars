export default function() {
  const modalOpenLinks = Array.from(document.querySelectorAll('.js-arena-modal-link'))

  modalOpenLinks.forEach(link => {
    
    const linkModal = document.querySelector(link.href.baseVal)
   
    if (linkModal) {
      const modalClose = linkModal.querySelector('.js-arena-modal-close')
      // const modalContent = linkModal.querySelector('.js-arena-modal-content')
      link.addEventListener('click', function(evt) {
        evt.preventDefault()
        linkModal.classList.add('active')
        document.body.classList.add('abonement-popup-open')
      })

      linkModal.addEventListener('click', function(evt) {
        if (evt.target === this) {
          this.classList.remove('active')
          document.body.classList.remove('abonement-popup-open')
        }
      })

      modalClose.addEventListener('click', function(evt) {
        evt.preventDefault()
        linkModal.classList.remove('active')
        document.body.classList.remove('abonement-popup-open')
      })

      document.addEventListener('keydown', function(evt) {
        if (evt.keyCode === 27) {
          linkModal.classList.remove('active')
          document.body.classList.remove('abonement-popup-open')
        }
      })
    }
  })
}
