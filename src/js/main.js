import $ from 'jquery';
import 'slick-carousel';

document.addEventListener('DOMContentLoaded', function(event) {
  console.log('DOM Loaded');

  // Слайдер кубков

  const teamSliderDotsContainer = document.querySelector('.team__slider-pagination');

  $('.team__slider-text').slick({
    arrows: false,
    fade: true,
    dots: true,
    appendDots: teamSliderDotsContainer,
    adaptiveHeight: true,
    asNavFor: '.team__slider-images'
  });

  $('.team__slider-images').slick({
    arrows: false,
    fade: true,
    dots: false,
    asNavFor: '.team__slider-text'
  });

  $('.news-slider__image-block-slides').slick({
    arrows: false,
    fade: true,
    dots: false
  });


  // Модальное окно поиска

  const searchButton = document.getElementById('search-button');
  const searchModal = document.querySelector('.search-modal');

  searchButton.addEventListener('click', event => {
    event.preventDefault();
    document.body.classList.toggle('search-modal-open');
  })

  searchModal.addEventListener('click', event => {
    event.preventDefault();
    if (event.target === searchModal) {
      document.body.classList.remove('search-modal-open');
    }
  })
})
