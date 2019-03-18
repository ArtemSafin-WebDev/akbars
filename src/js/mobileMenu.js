import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export default function() {
  const menuOpen = document.querySelector('.js-burger-open')
  const menuClose = document.querySelector('.js-burger-close')
  const submenuToggles = Array.from(document.querySelectorAll('.js-submenu-toggle'))
  const sidebarPanel = document.querySelector('.js-sidebar-panel')
  const overlay = document.querySelector('.js-overlay')
  const pageContent = document.querySelector('.page-content');
  const scrollableWrapper = document.querySelector('.sidebar-panel__wrapper');
  console.log(scrollableWrapper)

  let scrollBlocked = false;

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


  menuOpen.addEventListener('click', function(event) {
    event.preventDefault();
    sidebarPanel.classList.add('shown');
    overlay.classList.add('shown')
    pageContent.classList.add('blurred')
    if (!scrollBlocked) {
      disableBodyScroll(scrollableWrapper);
      scrollBlocked = true
    }
  })

  menuClose.addEventListener('click', function(event) {
    event.preventDefault();
    sidebarPanel.classList.remove('shown');
    overlay.classList.remove('shown')
    pageContent.classList.remove('blurred')
    if (scrollBlocked) {
      enableBodyScroll(scrollableWrapper);
      scrollBlocked = false
    }
  })

  overlay.addEventListener('click', function() {
    sidebarPanel.classList.remove('shown');
    overlay.classList.remove('shown')
    pageContent.classList.remove('blurred')
    if (scrollBlocked) {
      enableBodyScroll(scrollableWrapper);
      scrollBlocked = false
    }
  })
}
