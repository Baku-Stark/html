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

// ===== ASIDE FUNCTION =====
document.querySelector('#menu-btn').addEventListener('click', () => {
    document.querySelector('aside').style.display = 'block'
})

document.querySelector('#close-btn').addEventListener('click', () => {
    document.querySelector('aside').style.display = 'none'
})

// ===== THEME FUNCTION =====
const themeBtn = document.querySelector('.theme-btn')


themeBtn.addEventListener('click', () => {
    if(document.querySelector('body').classList.value === ""){
        document.querySelector('body').classList.add('dark-mode')

        document.querySelector('.light-theme-btn').classList.remove('active')
        document.querySelector('.dark-theme-btn').classList.add('active')
    }

    else{
        document.querySelector('body').classList.remove('dark-mode')

        document.querySelector('.light-theme-btn').classList.add('active')
        document.querySelector('.dark-theme-btn').classList.remove('active')
    }
})