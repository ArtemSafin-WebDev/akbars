export default function() {
  

  function Hide(button, newText) {
    this.button = button
    this.originalButtonText = button.textContent
    this.newButtonText = newText.toString()
    this.hiddenContent = button.parentElement.querySelector('.js-hide-container')
    this.hidden = true
    this.handleClick = function(event) {
      this.hiddenContent.classList.toggle('hidden')
      this.button.classList.toggle('active')
      this.hidden = !this.hidden
      if (this.hidden) {
        this.button.textContent = this.originalButtonText
      } else {
        this.button.textContent = this.newButtonText
      }
      
    }
    this.handleClickBound = this.handleClick.bind(this)
    this.button.addEventListener('click', this.handleClickBound)
    this.destroy = function() {
      this.hiddenContent.classList.add('hidden')
      this.textContent = this.originalButtonText
      this.hidden = true
      this.button.removeEventListener('click', this.handleClickBound)
    }
  }

  function initializeHides() {
    const mobileHideButtons = Array.from(document.querySelectorAll('.js-hide-button'))
    
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

  
}
