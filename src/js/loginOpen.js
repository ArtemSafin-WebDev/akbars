export default function() {
  const loginWindow = document.querySelector('.js-login-wrapper')
  const loginOpen = document.querySelector('.js-login-open')
  let loginWindowOpen = false

  const outsideClickListener = event => {
    if (!loginWindow.contains(event.target) && loginWindowOpen && !loginOpen.contains(event.target)) {
      console.log('closing login')
      // or use: event.target.closest(selector) === null

      document.body.classList.remove('login-shown')

      // loginOpen.classList.remove('login-shown')
      // loginWindow.classList.remove('shown')
      loginWindowOpen = false

      removeClickListener()
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  if (loginWindow && loginOpen) {
    loginOpen.addEventListener('click', function(event) {
      console.log('clicked')
      event.preventDefault()
      if (!loginWindowOpen) {
        console.log('opening login')
        loginWindowOpen = true
        document.addEventListener('click', outsideClickListener)
        // this.classList.add('login-shown')
        // loginWindow.classList.add('shown');
        document.body.classList.add('login-shown')
      } else {
        loginWindowOpen = false
        // this.classList.remove('login-shown')
        // loginWindow.classList.remove('shown')

        document.body.classList.remove('login-shown')
      }
    })
  }
}
