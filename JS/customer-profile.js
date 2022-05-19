const appointmentHistory = document.querySelector('.appointment-history');
const completedOrders = document.querySelector('.completed-orders');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');



let page = 1;

next?.addEventListener('click', () => {
    page += 1;
    display()

})

prev?.addEventListener('click', () => {
    page -= 1;
    display()
});

window.onload = () => {
    display();
}

const display = () => {
    if(page === 1) {
        appointmentHistory.classList.add('active')
        completedOrders.classList.remove('active')
    }
    
    if(page === 2) {
        appointmentHistory.classList.remove('active')
        completedOrders.classList.add('active')
    }
}
