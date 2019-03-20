import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

export default function() {
  const open = document.getElementById('open')
  const sidebar = document.getElementById('sidebar')
  let scrollBlocked = false
  open.addEventListener('click', function() {
    sidebar.classList.toggle('shown')
    if (scrollBlocked) {
      enableBodyScroll(sidebar)
      scrollBlocked = false
    } else {
      disableBodyScroll(sidebar)
      scrollBlocked = true
    }
  })
}
