export default function() {
  const cookiePolicyPanel = document.querySelector('.js-cookie-policy')
  const cookiePolicyAccept = document.querySelector('.js-cookie-policy-accept')

  if (cookiePolicyPanel) {
    const cookiePolicyAccepted = localStorage.getItem('cookieAccepted') === 'Y'

    if (!cookiePolicyAccepted) {
      cookiePolicyPanel.classList.add('shown')
    }
    cookiePolicyAccept.addEventListener('click', function() {
      localStorage.setItem('cookieAccepted', 'Y')
      cookiePolicyPanel.classList.remove('shown')
    })
  }
}