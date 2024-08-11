// Gross Volume Chart
const grossVolumeChart = document.getElementById('gross-volume-chart').getContext('2d');
const grossVolumeData = {
    labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
    datasets: [{
        label: 'Gross Volume',
        data: [40, 60, 80, 100, 120, 150, 100],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};
const grossVolumeChartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};
const grossVolumeChartInstance = new Chart(grossVolumeChart, {
    type: 'bar',
    data: grossVolumeData,
    options: grossVolumeChartOptions
});

// Net Volumes Chart
const netVolumesChart = document.getElementById('net-volumes-chart').getContext('2d');
const netVolumesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
        label: 'Net Volumes',
        data: [100, 110, 120, 130, 120, 110, 100, 110, 120, 130, 120, 110],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
    }]
};
const netVolumesChartOptions = {
    scales: {
        y: {
            beginAtZero: true
        }
    }
};
const netVolumesChartInstance = new Chart(netVolumesChart, {
    type: 'line',
    data: netVolumesData,
    options: netVolumesChartOptions
});