let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none";
    dots.forEach((dot) => dot.classList.remove("active"));
  });
  slides[n].style.display = "block";
  dots[n].classList.add("active");
};

document.addEventListener("DOMContentLoaded", () => init(currentSlide));

const next = () => {
  currentSlide = (currentSlide >= slides.length - 1) ? 0 : currentSlide + 1;
  init(currentSlide);
};

const prev = () => {
  currentSlide = (currentSlide <= 0) ? slides.length - 1 : currentSlide - 1;
  init(currentSlide);
};

document.querySelector(".next").addEventListener("click", next);
document.querySelector(".prev").addEventListener("click", prev);

setInterval(() => {
  next();
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    init(i);
    currentSlide = i;
  });
});


const sliderContainer = document.querySelector('.slide-container');
const hammer = new Hammer(sliderContainer);

hammer.on('swipeleft', next);
hammer.on('swiperight', prev);

