const $body = document.querySelector('body')
const $checkbox = document.querySelector('#check')

$checkbox.addEventListener('change', function() {
    $body.classList.toggle('dark-mode')
})