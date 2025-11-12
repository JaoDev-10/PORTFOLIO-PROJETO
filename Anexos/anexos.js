document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-box');
    const prevBtn = document.querySelector('#prevBtn');
    const nextBtn = document.querySelector('#nextBtn');
    const navBox = document.querySelector('.btn-nav-box');

    let currentSlide = 0;
    let navButtons = [];

    if (slides.length > 0) {
        slides.forEach((slide, index) => {
            const navBtn = document.createElement('button');
            navBtn.classList.add('btn-nav');
            navBtn.addEventListener('click', () => goToSlide(index));
            navBox.appendChild(navBtn);
            navButtons.push(navBtn);
        });
    }

    function goToSlide(slideIndex) {
        slides[currentSlide].classList.remove('ativo');
        if (navButtons.length > 0) {
            navButtons[currentSlide].classList.remove('ativo');
        }

        currentSlide = (slideIndex + slides.length) % slides.length;

        slides[currentSlide].classList.add('ativo');
        if (navButtons.length > 0) {
            navButtons[currentSlide].classList.add('ativo');
        }
    }

    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));

    goToSlide(0);
});