'use strict';
function slider({container,slide, nextArrow, prevArrow, totalCounter, currentCounter, wrapper, field}) {
      //slider

      const prevBtn = document.querySelector(prevArrow),
      slider = document.querySelector(container),
      nextBtn = document.querySelector(nextArrow),
      counter = document.querySelector(currentCounter),
      slides = document.querySelectorAll(slide),
      quantitySlides = document.querySelector(totalCounter),
      slidesWrap = document.querySelector(wrapper),
      slidesField = document.querySelector(field),
      width = window.getComputedStyle(slidesWrap).width;
        let count = 1;
        let offset = 0;

        if (slides.length < 10) {
            quantitySlides.innerHTML = `0${slides.length}`;
        } else {
            quantitySlides.innerHTML = `${slides.length}`;
        }


        slidesField.style.width = 100 * slides.length + '%';
        slidesField.style.display = 'flex';
        slidesField.style.transition = '0.5s all';
        slidesWrap.style.overflow = 'hidden';

        slides.forEach(slide => {
            slide.style.width = width;
        });

        slider.style.position = 'relative';

        const indicators = document.createElement('ol'),
            dots = [];
        indicators.classList.add('carousel-indicators');
        slider.append(indicators);

        for (let i = 0; i < slides.length; i++) {
            const dot = document.createElement('li');
            dot.setAttribute('data-slide-to', i + 1);
            dot.classList.add('dot');
            if (i == 0) {
                dot.style.opacity = 1;
            }
            indicators.append(dot);
            dots.push(dot);
        }
        enumerator(count);

        nextBtn.addEventListener('click', () => {
            if (offset == transformatorStr(width) * (slides.length - 1)) {
                offset = 0;
            } else {
                offset += transformatorStr(width);
            }
            count++;
            enumerator(count);
            slidesField.style.transform = `translateX(-${offset}px)`;
        });
        prevBtn.addEventListener('click', () => {
            if (offset == 0) {
                offset = transformatorStr(width) * (slides.length - 1);
            } else {
                offset -= transformatorStr(width);
            }
            count--;
            enumerator(count);

            slidesField.style.transform = `translateX(-${offset}px)`;

        });

        function transformatorStr (str) {
            return +str.replace(/\D/g, '');
        }

        function enumerator (n) {
            if (n > slides.length) {
                count = 1;
            }
            
            if (n < 1) {
                count = slides.length;
            }
            
            if (slides.length < 10) {
                counter.innerHTML = `0${count}`;
            } else {
                counter.innerHTML = `${count}`;
            }
            activateDots(dots);
        }  

        function activateDots (dot) {
            dots.forEach(dot => {
                dot.style.opacity = '.5';
            });
            dots[count - 1].style.opacity = '1';
        }

        dots.forEach(dot => {
            dot.addEventListener('click', (e) => {
                const slideTo = e.target.getAttribute('data-slide-to');

                count = slideTo;
                offset = transformatorStr(width) * (slideTo - 1);
                slidesField.style.transform = `translateX(-${offset}px)`;
                enumerator(count);
            });
        });
}

export default slider;