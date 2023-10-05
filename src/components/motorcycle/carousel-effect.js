const carousel = document.querySelector('.carousel');
const carouselItems = carousel.querySelectorAll('.carousel-item');
const carouselControls = carousel.querySelectorAll('.carousel-control');

let currentSlide = 0;

function slideTo(slideNumber) {
  carouselItems[currentSlide].classList.remove('active');
  carouselItems[slideNumber].classList.add('active');

  currentSlide = slideNumber;
}

carouselControls.forEach((control) => {
  control.addEventListener('click', () => {
    if (control.classList.contains('carousel-control-prev')) {
      slideTo(currentSlide - 1);
    } else {
      slideTo(currentSlide + 1);
    }
  });
});
