// This file is intentionally left blank
window.onload = function () {
    document.getElementById('download').addEventListener("click", () => {
        var canvas = document.getElementById('myChart'); // replace 'your-canvas-id' with the id of your canvas
        var image = canvas.toDataURL('image/png'); // create an image from the canvas

        var link = document.createElement('a'); // create a link element
        link.href = image; // set the href of the link to the image
        link.download = 'canvas-image.png'; // set the download attribute of the link

        link.click(); // simulate a click on the link
    }); // replace 'your-canvas-id' with the id of your canvas


    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Income',
                data: [],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'Expense',
                data: [],
                backgroundColor: [
                    'rgba(0, 99, 132, 0.2)',
                    'rgba(54, 4, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(0, 99, 132, 1)',
                    'rgba(54, 4, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }
            ]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    document.getElementById('chart-tab').addEventListener('click', function () {
        // Your chart code here

        var januaryIncome = document.getElementById('january-income').value;
        var januaryExpenses = document.getElementById('january-expenses').value;

        var februaryIncome = document.getElementById('february-income').value;
        var februaryExpenses = document.getElementById('february-expenses').value;

        var marchIncome = document.getElementById('march-income').value;
        var marchExpenses = document.getElementById('march-expenses').value;

        var aprilIncome = document.getElementById('april-income').value;
        var aprilExpenses = document.getElementById('april-expenses').value;

        var mayIncome = document.getElementById('may-income').value;
        var mayExpenses = document.getElementById('may-expenses').value;

        var juneIncome = document.getElementById('june-income').value;
        var juneExpenses = document.getElementById('june-expenses').value;

        var julyIncome = document.getElementById('july-income').value;
        var julyExpenses = document.getElementById('july-expenses').value;

        var augustIncome = document.getElementById('august-income').value;
        var augustExpenses = document.getElementById('august-expenses').value;

        var septemberIncome = document.getElementById('september-income').value;
        var septemberExpenses = document.getElementById('september-expenses').value;

        var octoberIncome = document.getElementById('october-income').value;
        var octoberExpenses = document.getElementById('october-expenses').value;

        var novemberIncome = document.getElementById('november-income').value;
        var novemberExpenses = document.getElementById('november-expenses').value;

        var decemberIncome = document.getElementById('december-income').value;
        var decemberExpenses = document.getElementById('december-expenses').value;

        var incomeData = [januaryIncome, februaryIncome, marchIncome, aprilIncome, mayIncome, juneIncome, julyIncome, augustIncome, septemberIncome, octoberIncome, novemberIncome, decemberIncome];
        var expensesData = [januaryExpenses, februaryExpenses, marchExpenses, aprilExpenses, mayExpenses, juneExpenses, julyExpenses, augustExpenses, septemberExpenses, octoberExpenses, novemberExpenses, decemberExpenses];
        myChart.data.datasets[0].data = incomeData;
        myChart.data.datasets[1].data = expensesData;
        myChart.update();
    });

}

