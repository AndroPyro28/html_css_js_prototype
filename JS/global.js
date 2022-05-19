const brandLogo = document.querySelector('.brand__logo');
const logo = document.querySelector('.logo')

logo.addEventListener('click', () => {
    window.location.assign('/views/index.html')
});

const cartSectionBtn = document.querySelector('.cartSectionBtn');

cartSectionBtn.addEventListener('click', () => {
    window.location.assign('/views/cartAndPayment.html')
})

const cartNumberItem = document.querySelector('.cart__number__item');

window.addEventListener('load', (event) => {
    const cartNumberItem = document.querySelector('.cart__number__item');
    cartNumberItem.textContent = JSON.parse(localStorage.getItem('myCart')).length;
});


const userProfile = document.querySelector('.userProfile');

userProfile.addEventListener('click', () => {
    window.location.assign('/views/customerProfile-personalInfo.html')
})