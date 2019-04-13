import Swiper from 'swiper/dist/js/swiper.js'

export default function() {
  const goalItem = Array.from(document.querySelectorAll('.js-goal-item'))

  // goalItem.forEach(item => {
  //   const sliderElement = item.querySelector('.js-goal-slider')
  //   const sliderPagination = item.querySelector('.js-goals-pagination')
  //   let slider;
  //   if (sliderElement) {
  //     slider = new Swiper(sliderElement, {
  //       loop: true,
  //       centeredSlides: true,
  //       slidesPerView: 'auto',
  //       spaceBetween: 15,
  //       pagination: {
  //         el: sliderPagination,
  //         type: 'fraction',
  //       },
  //     })
  //   }
  // })

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
