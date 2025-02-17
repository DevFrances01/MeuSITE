document.addEventListener("DOMContentLoaded", function() {
    // Troca de cor do fundo
    let colors = ["#e8e8e8", "#d0e1f9"];
    let i = 0;
    setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 4000);

    // Dados dos gráficos
    const data1 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'C++ Usage',
            data: [12, 15, 7, 5, 6, 20, 10, 8, 9, 11],
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1
        }]
    };

    const data2 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'Python Usage',
            data: [5, 7, 6, 8, 10, 9, 4, 5, 6, 15],
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    };

    const data3 = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
        datasets: [{
            label: 'JavaScript Usage',
            data: [12, 15, 7, 5, 6, 20, 10, 8, 9, 11], // Usando os mesmos dados do C++
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    // Configurações dos gráficos
    const config1 = {
        type: 'line',
        data: data1,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const config2 = {
        type: 'bar',
        data: data2,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    const config3 = {
        type: 'line', // Mudado para linha ou você pode manter como barra
        data: data3,
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    };

    // Renderizando os gráficos
    const chart1 = new Chart(document.getElementById('chart1'), config1);
    const chart2 = new Chart(document.getElementById('chart2'), config2);
    const chart3 = new Chart(document.getElementById('chart3'), config3);
});
