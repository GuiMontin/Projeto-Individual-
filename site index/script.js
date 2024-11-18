let contador = 0;
setInterval(() => {
    const sliderContainer = document.querySelector('.slider-containner');
    contador = (contador + 1) % 3; // alterna entre 0, 1 , 2 e 3 (total de 4 ou a sua escolha rs rsw imagens)
    sliderContainer.style.transform = `translateX(-${contador * 100}vw)`;
}, 3000); // Alterne as imagens a cada 5 segundos