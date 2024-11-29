let currentSlideReviews = 0;
    const slidesReviews = document.querySelectorAll(".slide-review");
    const dotsReviews = document.querySelectorAll('.dot-reviews');

    const initReviews = (n) => {
        slidesReviews.forEach((slide, index) => {
            slide.style.display = "none";
            dotsReviews.forEach((dot, index) => {
                dot.classList.remove("active");
            });
        });
        slidesReviews[n].style.display = "block";
        dotsReviews[n].classList.add("active");
    };

    document.addEventListener("DOMContentLoaded", () => initReviews(currentSlideReviews));

    const nextReviews = () => {
        currentSlideReviews >= slidesReviews.length - 1 ? currentSlideReviews = 0 : currentSlideReviews++;
        initReviews(currentSlideReviews);
    };

    const prevReviews = () => {
        currentSlideReviews <= 0 ? currentSlideReviews = slidesReviews.length - 1 : currentSlideReviews--;
        initReviews(currentSlideReviews);
    };

    document.querySelector(".next-reviews").addEventListener('click', nextReviews);
    document.querySelector(".prev-reviews").addEventListener('click', prevReviews);

    dotsReviews.forEach((dot, i) => {
        dot.addEventListener("click", () => {
            initReviews(i);
            currentSlideReviews = i;
        });
    });