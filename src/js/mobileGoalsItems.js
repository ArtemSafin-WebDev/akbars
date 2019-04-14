import Swiper from 'swiper/dist/js/swiper.js'

export default function() {
  const goalItem = Array.from(document.querySelectorAll('.js-goal-item'))
  
  const initializedSliders = goalItem.map(item => {
    return new Swiper(item.querySelector('.js-goal-slider'), {
      loop: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      spaceBetween: 15,
      pagination: {
        el: item.querySelector('.js-goals-pagination'),
        type: 'fraction'
      }
    })
  })

  return initializedSliders;
}
