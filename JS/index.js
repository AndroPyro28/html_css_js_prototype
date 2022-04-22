const carouselWrapper = document.querySelector('.carousel__wrapper');
const carouselItems = document.querySelectorAll('.carousel__item');
const leftButton = document.querySelector('.left');
const rightButton = document.querySelector('.right');
let currentCarouselContent = 0;

    leftButton.addEventListener('click', () => {
        if( 0 < currentCarouselContent) {
        carouselWrapper.style.transform = `translateX(${--currentCarouselContent * -100}vw)`;
         clearInterval(sliderFunc);
        }
    })
    rightButton.addEventListener('click', () => {
        if(currentCarouselContent < carouselItems.length -1) {
        carouselWrapper.style.transform = `translateX(${++currentCarouselContent * -100}vw)`;
         clearInterval(sliderFunc);
        }
    })
    
    const sliderFunc = () => {
        if(currentCarouselContent == carouselItems.length -1) return currentCarouselContent = -1;
        carouselWrapper.style.transform = `translateX(${++currentCarouselContent * -100}vw)`;
    }
    
    // window.addEventListener('load', (event) => {
    //     setInterval(sliderFunc, 4000)
    //   });

