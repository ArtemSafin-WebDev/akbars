export default function() {
  const socialWindow = document.querySelector('.js-social-wrapper')
  const socialOpen = document.querySelector('.js-social-open')
  let socialWindowOpen = false

  const outsideClickListener = event => {
    if (!socialWindow.contains(event.target) && socialWindowOpen && !socialOpen.contains(event.target)) {
      console.log('removing social window')
      // or use: event.target.closest(selector) === null

      document.body.classList.remove('social-shown')

      // loginOpen.classList.remove('login-shown')
      // loginWindow.classList.remove('shown')
      socialWindowOpen = false

      removeClickListener()
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  if (socialWindow && socialOpen) {
    socialOpen.addEventListener('click', function(event) {
      event.preventDefault()
      if (!socialWindowOpen) {
        console.log('showing social window')
        socialWindowOpen = true
        document.addEventListener('click', outsideClickListener)
        // this.classList.add('login-shown')
        // loginWindow.classList.add('shown');
        document.body.classList.add('social-shown')
      } else {
        socialWindowOpen = false
        // this.classList.remove('login-shown')
        // loginWindow.classList.remove('shown')

        document.body.classList.remove('social-shown')
      }
    })
  }
}
