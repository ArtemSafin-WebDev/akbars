import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default function() {
  const open = document.getElementById('open')
  const sidebar = document.querySelector('.js-sidebar')
  const overlay = document.querySelector('.js-overlay')
  let sidebarOpen = false
  const submenuToggles = Array.from(document.querySelectorAll('.js-submenu-toggle'))

  submenuToggles.forEach(link => {
    const submenu = link.parentElement.querySelector('.js-submenu')
    link.addEventListener('click', function(event) {
      event.preventDefault()
      if (submenu.classList.contains('active')) {
        link.classList.remove('active')
        submenu.classList.remove('active')
        
        $(submenu).slideUp()
      } else {
        link.classList.add('active')
        submenu.classList.add('active')
        $(submenu).slideDown()
        
      }
    })
  })

  if (sidebar && open) {
    open.addEventListener('click', function() {
      if (sidebarOpen) {
        document.body.classList.remove('shown')
        enableBodyScroll(sidebar)
        sidebarOpen = false
      } else {
        document.body.classList.add('shown')
        disableBodyScroll(sidebar)
        sidebarOpen = true
      }
    })

    if (overlay) {
      overlay.addEventListener('click', function() {
        if (sidebarOpen) {
          document.body.classList.remove('shown')
          enableBodyScroll(sidebar)
          sidebarOpen = false
        }
      })
    }


  }
}
