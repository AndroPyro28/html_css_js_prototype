const actionBtn = document.querySelectorAll('.actionBtn');
const actions = document.querySelectorAll('.actions');
const tableData = document.querySelectorAll('.table__data');
const checkboxHeader = document.querySelector('.checkbox__header');
const checkboxes = document.querySelectorAll('.checkbox');

// cols

const col__owner__name = document.querySelectorAll(' .data.col__owner__name');
const col__pet__name = document.querySelectorAll('.data.col__pet__name')
const col__pet__breed = document.querySelectorAll('.data.col__pet__breed');
const col__appointment = document.querySelectorAll('.data.col__appointment');
const col__date = document.querySelectorAll('.data.col__date');
const col__time__starts = document.querySelectorAll('.data.col__time__starts')
const col__time__ends = document.querySelectorAll('.data.col__time__ends');

let toggleCheckbox = false;

checkboxHeader.addEventListener('click', () => {
    toggleCheckbox = !toggleCheckbox;
    checkboxes.forEach((chkbx, index) => {
        chkbx.checked = toggleCheckbox
    })
})

col__owner__name.forEach((el) => {
    el.addEventListener('click', () => {
        window.location.assign("/views/petRecord.html")
    })
})

col__pet__name.forEach((el) => {
    el.addEventListener('click', () => {
        window.location.assign("/views/petRecord.html") 
    })
})

col__pet__breed.forEach((el) => {
    el.addEventListener('click', () => {
        window.location.assign("/views/petRecord.html") 
    })
})

col__appointment.forEach((el) => {
    el.addEventListener('click', () => {
        window.location.assign("/views/petRecord.html") 
    })
})

col__date.forEach((el) => {
    el.addEventListener('click', () => {
        window.location.assign("/views/petRecord.html") 
    })
})

col__time__starts.forEach((el) => {
    el.addEventListener('click', () => {
        window.location.assign("/views/petRecord.html")
    })
})

col__time__ends.forEach((el) => {
    el.addEventListener('click', () => {
        window.location.assign("/views/petRecord.html")
    })
})


// el.addEventListener('contextmenu', function(ev) {
//     ev.preventDefault();
//     alert('success!');
//     return false;
// }, false);

// console.log(actionBtn)
// tableData.forEach((data, index) => {
//     data.addEventListener('click', () => {
//         window.location.assign('/views/petRecord.html')
//     })
// })
actionBtn.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        actions[index].classList.toggle("active")
    })
})