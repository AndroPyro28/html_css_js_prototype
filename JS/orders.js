const data = document.querySelectorAll('.data');

data.forEach(el => {
    el.addEventListener('click', function() {
        const transactionStatus = this.dataset.status;

        if(transactionStatus === "continue" || transactionStatus === "pending") {
            window.location.assign("/views/orderDetails.html")
        }
        
    })
})