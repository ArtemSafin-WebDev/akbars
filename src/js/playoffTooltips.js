// Аккордеоны "История встреч"


export default function() {
  const historyLinks = Array.from(document.querySelectorAll('.conference__playoff-history'))
  const tooltips = Array.from(document.querySelectorAll('.conference__playoff-table-tooltip'))

  const closeAllTooltips = () => {
    tooltips.forEach(tooltip => {
      tooltip.classList.remove('shown');
      const toolTipContent = tooltip.querySelector('.conference__playoff-table-tooltip-content')
      $(toolTipContent).slideUp()
    })
  }
  

  function toggleTooltip(event) {
    event.preventDefault();
    const currentTooltip = this.parentElement.parentElement.parentElement.querySelector('.conference__playoff-table-tooltip')
    const currentTooltipContent = currentTooltip.querySelector('.conference__playoff-table-tooltip-content')

    if (!currentTooltip.classList.contains('shown')) {
      closeAllTooltips();
      currentTooltip.classList.add('shown');
      $(currentTooltipContent).slideDown()
    } else {
      currentTooltip.classList.remove('shown');
      $(currentTooltipContent).slideUp()
    }
  }

  historyLinks.forEach(link => {
    link.addEventListener('click', toggleTooltip)
  })
}