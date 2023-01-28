const ctx = document.querySelector('#show_chart').getContext('2d')

// create a new chart instance
new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov'],
        datasets: [
            {
                label: 'BTC',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: '#E60501',
                borderWidth: 2
            },
            {
                label: 'ETH',
                data: [31500, 41000, 88000, 26000, 46000, 32698, 5000, 3000, 18656, 24832, 36844],
                borderColor: '#1749F0',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})