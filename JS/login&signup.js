const formContents = document.querySelectorAll('.form__content');

const nextButtons = document.querySelectorAll('.nextBtn');
const prevButtons = document.querySelectorAll('.prevBtn');

// console.log({nextButtons, prevButtons})

let iteratorIndex = 0;

nextButtons.forEach((nextBtn) => {
    nextBtn.addEventListener('click', () => {
    iteratorIndex++;
    if(iteratorIndex <= nextButtons.length) {
        formContents.forEach((form) => {
            form.style.transform = `translateX(${iteratorIndex * -25}vw)`;
        })
    }  
    })
})

prevButtons.forEach((prevBtn) => {
    prevBtn.addEventListener('click', () => {
    iteratorIndex--;
    if(iteratorIndex >= 0) {
        formContents.forEach((form) => {
            form.style.transform = `translateX(${iteratorIndex * -25}vw)`;
        })
    }
    })
})
