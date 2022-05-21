const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'December',
  ];

  const productData = {
    labels: labels,
    datasets: [{
      label: 'Sales of the product',
      // backgroundColor: 'rgb(99,158,252)',
      // borderColor: 'rgb(99,158,252)',
      backgroundColor: 'dimgray',
      borderColor: 'dimgray',
      data: [55,100,400, 300, 500, 300 ,432,500, 600, 700, 1000],
      
    }],
  };

  const productChartOption = {
    plugins: {
        title: {
            display: true,
            text: '',
            align: "start",
            fontSize: 10,
            color: "red"
        }
      },
    animations: {
      tension: {
        from: 1,
        to: 1,
      },
      
      
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 1000
      }
    }
  }

  const productsChartConfig = {
    type: 'line',
    data:productData,
    options: productChartOption
  };

  const productChartCanva = document.getElementById('productChart')
  const productChart = new Chart(
    productChartCanva,
    productsChartConfig
  );

const productItems = document.querySelectorAll('.product__item');
const itemBtn = document.querySelectorAll('.openItemInfo');

itemBtn.forEach((btn, index) => {
  let toggleOpen = false;
  btn.addEventListener('click', () => {
    if(!toggleOpen) {
      productItems[index].classList.add("openItem");
      toggleOpen = true
    }
    else {
      productItems[index].classList.remove("openItem");
      toggleOpen = false
    }
  })
})

// productItems.forEach((item, index) => {
//   let toggleOpen = false;
//   item.addEventListener('click', () => {
//     if(!toggleOpen) {
//       productItems[index].classList.add("openItem");
//       toggleOpen = true
//     }
//     else {
//       productItems[index].classList.remove("openItem");
//       toggleOpen = false
//     }
//   })
// })