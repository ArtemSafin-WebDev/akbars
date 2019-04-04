import detectIt from 'detect-it'

export default function() {
  if (detectIt.hasTouch === false) {
    document.body.classList.add('no-touch')
  }
}