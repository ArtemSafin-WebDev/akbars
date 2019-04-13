export default function() {
  const mobileHideButtons = Array.from(document.querySelectorAll('.js-hide-button'))

  function Hide(button, newText) {
    this.button = button
    this.originalButtonText = button.textContent
    this.newButtonText = newText.toString()
    this.hiddenContent = button.parentElement.querySelector('.js-hide-container')
    this.hidden = false
    this.handleClick = function(event) {
      this.hiddenContent.classList.toggle('hidden')
      this.hidden = !this.hidden
      this.textContent = this.hidden ? this.newButtonText : this.originalButtonText
    }
    this.handleClickBound = this.handleClick.bind(this)
    this.button.addEventListener('click', this.handleClickBound)
    this.destroy = function() {
      this.hiddenContent.classList.add('hidden')
      this.hidden = true
      this.button.removeEventListener('click', this.handleClickBound)
    }
  }

  function initializeHides() {
    return mobileHideButtons.map(button => {
      return new Hide(button, 'Скрыть')
    })
  }

  window.hides = {
    initialized: [],
    init: function() {
      this.destroy()
      this.initialized = initializeHides()
    },
    destroy: function() {
      if (this.initialized.length > 0) {
        this.initialized.forEach(function(hide) {
          hide.destroy()
        })
        this.initialized = []
      }
    }
  }

  window.hides.init()

  // mobileHideButtons.forEach(button => {
  //   const originalButtonText = button.textContent;
  //   const newButtonText = 'Скрыть'
  //   let hiddenContent = button.parentElement.querySelector('.js-hide-container')
  //   let hidden = false;
  //   button.addEventListener('click', function() {
  //     hiddenContent.classList.toggle('hidden')
  //     hidden = !hidden
  //     button.textContent = hidden ? newButtonText : originalButtonText
  //   })
  // })
}
