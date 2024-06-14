document.addEventListener('DOMContentLoaded', function () {
    // Get the canvas element
    var ctx = document.getElementById('myChart').getContext('2d');
    

    // Initialize the line chart with some initial data
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Random Value',
                data: [],
                borderColor: 'rgb(138, 43, 226)',
                fill: true
            }]
        },
        options: {
            scales: {
                x: {
                    type: 'linear',
                    position: 'bottom',
                },
                y: {
                    min: 0,
                    max: 100,
                }
            }
        }
    });

    // Function to generate a random value and update the chart
    function updateRandomValue() {
        var randomValue = Math.floor(Math.random() * 101);
        document.getElementById('randomValue').value = randomValue;

        // Add the random value to the chart
        myChart.data.labels.push(myChart.data.labels.length + 1);
        myChart.data.datasets[0].data.push(randomValue);

        // Limit the number of data points to keep it manageable
        if (myChart.data.labels.length > 10) {
            myChart.data.labels.shift();
            myChart.data.datasets[0].data.shift();
        }
        

        console.log(randomValue);

        // Update the chart
        myChart.update();
    }

    // Set an interval to update the random value every second
    setInterval(updateRandomValue, 1000);
});
