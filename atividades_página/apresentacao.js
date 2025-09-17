document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider-box');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const navBox = document.querySelector('.btn-nav-box');
    const materiaDisplay = document.querySelector('.nome-materia');

    let currentSlide = 0;

    // Gera os botões de navegação inferiores dinamicamente
    slides.forEach((slide, index) => {
        const navBtn = document.createElement('button');
        navBtn.classList.add('btn-nav');
        if (index === 0) {
            navBtn.classList.add('ativo');
        }
        navBtn.addEventListener('click', () => {
            goToSlide(index);
        });
        navBox.appendChild(navBtn);
    });

    const navButtons = document.querySelectorAll('.btn-nav');

    function goToSlide(slideIndex) {
        slides[currentSlide].classList.remove('ativo');
        navButtons[currentSlide].classList.remove('ativo');
        
        currentSlide = (slideIndex + slides.length) % slides.length;
        
        slides[currentSlide].classList.add('ativo');
        navButtons[currentSlide].classList.add('ativo');
        materiaDisplay.textContent = slides[currentSlide].dataset.materia;
    }

    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));
    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));

    // Inicia com a matéria correta no cabeçalho
    materiaDisplay.textContent = slides[currentSlide].dataset.materia;
});