export default function() {
  const mobileHideButtons = Array.from(document.querySelectorAll('.js-hide-button'))

  mobileHideButtons.forEach(button => {
    const originalButtonText = button.textContent;
    const newButtonText = 'Скрыть'
    let hiddenContent = button.parentElement.querySelector('.js-hide-container')
    let hidden = false;
    button.addEventListener('click', function() {
      hiddenContent.classList.toggle('hidden')
      hidden = !hidden
      button.textContent = hidden ? newButtonText : originalButtonText
    })
  })
}