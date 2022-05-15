const formContents = document.querySelectorAll('.form__content');

const nextButtons = document.querySelectorAll('.nextBtn');
const prevButtons = document.querySelectorAll('.prevBtn');
const loginBtn = document.querySelector('.loginBtn');
const signupBtn = document.querySelector('.signupBtn');

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
});

signupBtn?.addEventListener('click', () => {
    window.location.assign('/views/login.html')
})

loginBtn?.addEventListener('click', () => {
    window.location.assign('/views/home.html')
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
