    // label

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
    // data

  const Visitsdata = {
    labels: labels,
    datasets: [{
      label: 'Total Customer Groom Of The Month',
      // backgroundColor: 'rgb(99,158,252)',
      // borderColor: 'rgb(99,158,252)',
      backgroundColor: 'black',
      borderColor: 'black',
      data: [20, 35, 50, 60, 20, 33, 100],
      
    }],
  };

  const salesData = {
    labels: labels,
    datasets: [{
      label: 'Total Sales Of The Month',
      backgroundColor: 'gray',
      borderColor: 'gray',
      // backgroundColor: 'rgb(0,196,250)',
      // borderColor: 'rgb(0,196,250)',
      data: [3200, 12340, 13005, 22002, 32310, 14030, 40245],
    }],
  };
    // options
  const visitsChartOption = {
    plugins: {
        title: {
            display: true,
            text: 'Overall Grooms Chart 2022',
            align: "start",
            fontSize: 10,
            color: "black"
        }
      },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 1,
        to: 0,
        loop: true
      },
      
      
    },
    scales: {
      y: { // defining min and max so hiding the dataset does not change scale range
        min: 0,
        max: 500
      }
    }
  }

  const salesChartOption = {
    plugins: {
        title: {
            display: true,
            text: 'Overall Sales Chart 2022',
            align: "start",
            fontSize: 10,
            color: "gray"
        }
      },
    animations: {
        tension: {
          duration: 1000,
          easing: 'linear',
          from: 1,
          to: 0,
          loop: true
        }
      },
      scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 50000
        },
      }
  }
    // configs

  const visitsChartConfig = {
    type: 'bar',
    data:Visitsdata,
    options: visitsChartOption
  };

  const salesChartsConfig = {
    type: 'line',
    data: salesData,
    options: salesChartOption
  }

  const visitsChart = new Chart(
    document.getElementById('visitsChart'),
    visitsChartConfig
  );

  const salesCharts = new Chart(
    document.getElementById('salesCharts'),
    salesChartsConfig
  );



