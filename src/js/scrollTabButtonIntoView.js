export default function() {
  const buttonsToScroll = Array.from(document.querySelectorAll('.js-scrollable-button'));

  buttonsToScroll.forEach(button => {
    button.addEventListener('click', function() {
      this.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    })
  })
}