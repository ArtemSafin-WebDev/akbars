export default function() {
  const loginWindow = document.querySelector('.js-login-wrapper')
  const loginOpen = document.querySelector('.js-login-open')
  const utilityLogin = document.querySelector('.utility__login')
  let loginWindowOpen = false

  const outsideClickListener = event => {
    if (!loginWindow.contains(event.target) && loginWindowOpen && !loginOpen.contains(event.target)) {
      console.log('closing login')
      // or use: event.target.closest(selector) === null
      console.log(event.target)
      document.body.classList.remove('login-shown')

      loginWindowOpen = false

      removeClickListener()
    }
  }

  const removeClickListener = () => {
    document.removeEventListener('click', outsideClickListener)
  }

  if (loginWindow && loginOpen) {
    loginOpen.addEventListener('click', function(event) {
      console.log('clicked on')
      console.log(event.target)
      event.preventDefault()
      if (!loginWindowOpen) {
        console.log('opening login')
        
        loginWindowOpen = true
        document.addEventListener('click', outsideClickListener)
       
        document.body.classList.add('login-shown')
      } else {
        loginWindowOpen = false
        

        document.body.classList.remove('login-shown')
      }

      
    })
  }
}
