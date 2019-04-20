export default function() {
  const accordeon = document.querySelector('.js-faq-accordeon')

  if (accordeon) {
    const button = accordeon.querySelector('.js-faq-accordeon-button')
    const content = accordeon.querySelector('.js-faq-accordeon-content')
    let open = false

    button.addEventListener('click', function() {
      if (!open) {
        this.classList.add('active')
        $(content).slideDown()
        open = true
      } else {
        this.classList.remove('active')
        $(content).slideUp()
        open = false
      }
    })
  }
}
