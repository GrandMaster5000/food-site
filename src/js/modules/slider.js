'use strict';
import Swiper, { Navigation, Pagination } from 'swiper';

function slider({totalCounter, currentCounter, paginationSelector, sliderSelector, nextArrowSelector, prevArrowSelector}) {
  const quantitySlides = document.querySelector(totalCounter),
  counter = document.querySelector(currentCounter);


  Swiper.use([Navigation, Pagination]);
  const mySwiper = new Swiper(sliderSelector, {
    navigation: {
      direction: 'vertical',
      loop: true,
      nextEl: nextArrowSelector,
      prevEl: prevArrowSelector,
    },
    pagination: {
      el: paginationSelector,

      clickable: true,
    },
  });
  mySwiper.on('transitionStart', () => {
    enumerator();
  });

  
  if (mySwiper.slides.length < 10) {
      quantitySlides.innerHTML = `0${mySwiper.slides.length}`;
  } else {
      quantitySlides.innerHTML = `${mySwiper.slides.length}`;
  }
     
  function enumerator () {
            if (mySwiper.slides.length < 10) {
                counter.innerHTML = `0${mySwiper.realIndex + 1}`;
            } else {
                counter.innerHTML = `${mySwiper.realIndex + 1}`;
            }
            
        }  
    enumerator();
}


export default slider;