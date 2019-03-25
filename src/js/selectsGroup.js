export default function() {
  const selectsGroups = Array.from(document.querySelectorAll('.js-selects-group'))
  const selectsGroupButtons = Array.from(document.querySelectorAll('.js-select-group-button'))

  selectsGroups.forEach(selectsGroup => selectsGroup.classList.remove('active'))

  selectsGroupButtons.forEach((selectsGroupButton, index) => {
    
    if (selectsGroupButton.classList.contains('active')) {
      selectsGroups[index].classList.add('active')
      // console.log(`Initial select group ${index} has been set`)
    }

    selectsGroupButton.addEventListener('click', function() {
      selectsGroups.forEach(selectsGroup => {
        selectsGroup.classList.remove('active')
      })
      selectsGroups[index].classList.add('active')
      // console.log(`Select group ${index} has been activated`)
    })
  })
}