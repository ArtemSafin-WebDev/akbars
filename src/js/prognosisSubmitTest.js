export default function() {
  const prognosisSubmit = document.querySelector('.js-test-submit')
  if (prognosisSubmit) {
    const loading = prognosisSubmit.querySelector('.loading')
    const save = prognosisSubmit.querySelector('.save-prognosis')
    const saved = prognosisSubmit.querySelector('.prognosis-saved')
    let active = false
    prognosisSubmit.addEventListener('click', function(event) {
      if (active) {
        return false
      } else {
        event.preventDefault()
        active = true
        prognosisSubmit.classList.add('active')
        save.classList.remove('visible')
        loading.classList.add('visible')
        setTimeout(() => {
          loading.classList.remove('visible')
          saved.classList.add('visible')
          setTimeout(() => {
            saved.classList.remove('visible')
            save.classList.add('visible')
            prognosisSubmit.classList.remove('active')
            active = false;
          }, 1000)
        }, 3000)
      }
    })
  }
}