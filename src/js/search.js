export default function() {
  const searchButton = document.querySelector('.js-search-modal-open')
  const searchModal = document.querySelector('.js-search-modal')
  const searchModalClose = document.querySelector('.js-search-modal-close')

  if (searchModal) {
    searchButton.addEventListener('click', event => {
      event.preventDefault()
      document.body.classList.toggle('search-modal-open')
    })

    searchModal.addEventListener('click', event => {
      event.preventDefault()
      if (event.target === searchModal) {
        document.body.classList.remove('search-modal-open')
      }
    })

    searchModalClose.addEventListener('click', event => {
      event.preventDefault()
      document.body.classList.remove('search-modal-open')
    })
  }
}