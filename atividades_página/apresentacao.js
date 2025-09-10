    const slides = document.querySelectorAll('.slider-box');
    const btnProxima = document.getElementById('proxima');
    const btnAnterior = document.getElementById('anterior');
    const btnNavs = document.querySelectorAll('.btn-nav');
    let currentIndex = 0;

    function mostrarSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('ativo');
            btnNavs[i].classList.remove('ativo');
            if (i === index) {
                slide.classList.add('ativo');
                btnNavs[i].classList.add('ativo');
            }
        });
    }

    btnProxima.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }
        mostrarSlide(currentIndex);
    });

    btnAnterior.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }
        mostrarSlide(currentIndex);
    });

    btnNavs.forEach((btn, i) => {
        btn.addEventListener('click', () => {
            currentIndex = i;
            mostrarSlide(currentIndex);
        });
    });

    mostrarSlide(currentIndex);