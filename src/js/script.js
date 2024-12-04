// *** CAROUSEL ***
// TODO

const carousel = document.querySelector(".carousel__container");
const prevButton = document.querySelector(".carousel__button--prev");
const nextButton = document.querySelector(".carousel__button--next");



if (carousel) {
    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -300, behavior: 'smooth' });
    });
    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: 300, behavior: 'smooth' });
    });
}