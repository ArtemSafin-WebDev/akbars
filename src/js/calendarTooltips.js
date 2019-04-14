import tippy from 'tippy.js'
import axios from 'axios'
import Popper from 'popper.js'

export default function() {
  const demoTips = Array.from(document.querySelectorAll('.js-calendar-tip-demo'))

  const sampleContent = `
  <span class="calendar__date-match-info-content">
    <span class="calendar__date-match-heading">
      2 марта 13:00
    </span>
    <span class="calendar__date-match-info-teams">
      <span class="calendar__date-match-info-team">
        <span class="team-logo">
          <img src="img/logo/akbars-logo.svg" alt="Логотип команды">
        </span>
        <span class="team-name">Ак Барс</span>
      </span>
      <span class="calendar__date-match-info-score">
        4:1
      </span>
      <span class="calendar__date-match-info-team">
        <span class="team-logo">
          <img src="img/logo/torpedo-logo.svg" alt="Логотип команды">
        </span>
        <span class="team-name">Торпедо</span>
      </span>
    </span>
    <ul class="calendar__date-match-links-list">
      <li class="calendar__date-match-links-list-item">
        <a href="#" class="calendar__date-match-link">
          <svg width="22" height="22" aria-hidden="true" class="icon-search-publications">
            <use xlink:href="#publications"></use>
          </svg>
        </a>
      </li>
      <li class="calendar__date-match-links-list-item">
        <a href="#" class="calendar__date-match-link">
          <svg width="22" height="22" aria-hidden="true" class="icon-search-protocol">
            <use xlink:href="#protocol"></use>
          </svg>
        </a>
      </li>
      <li class="calendar__date-match-links-list-item">
        <a href="#" class="calendar__date-match-link">
          <svg width="22" height="22" aria-hidden="true" class="icon-search-photo">
            <use xlink:href="#photo"></use>
          </svg>
        </a>
      </li>
    </ul>
  </span>
  `

  demoTips.forEach(tip => {
    tip.addEventListener('click', function(event) {
      event.preventDefault()
    })

    tippy(tip, {
      content: sampleContent,
      trigger: 'click',
      interactive: true,
      theme: 'tomato',
      arrow: true,
      arrowType: 'sharp',
      distance: 15,
      placement: 'bottom',
      flipOnUpdate: true
    })
  })

  tippy('.js-tips-container', {
    content: 'Загрузка...',
    target: '.js-calendar-tip',
    trigger: 'click',
    interactive: true,
    theme: 'tomato',
    arrow: true,
    arrowType: 'sharp',
    distance: 15,
    flipOnUpdate: true,
    placement: 'bottom',
    animation: 'fade',
    onShow(instance) {
      if (instance.state.ajax === undefined) {
        instance.state.ajax = {
          isFetching: false,
          canFetch: true
        }
      }

      if (instance.state.ajax.isFetching || !instance.state.ajax.canFetch) {
        return
      }

      let id = instance.reference.getAttribute('data-game-id')

      axios
        .get(`/calendar/gameinfo.php?id_game=${id}`)
        .then(res => {
          instance.setContent(res.data)
          instance.popperInstance.update()
        })
        .catch(err => {
          console.log(err)
          instance.setContent('Произошла ошибка')
        })
        .finally(() => {
          instance.state.ajax.isFetching = false
        })
    },
    onHidden(instance) {
      instance.setContent('Загрузка...')
      instance.state.ajax.canFetch = true
    }
  })
}
