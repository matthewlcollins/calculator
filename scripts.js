const display = document.querySelector('.textCont');
let currentValue = '';
let storedValue = '';
let firstAfterReset = false

document.querySelector('.butCont').addEventListener('click', (event) => {
    if (currentValue.length >= 9) {
        currentValue = 'NaN'
        display.textContent = currentValue
    } else if (currentValue == 'NaN') {
        currentValue = '0'
        display.textContent = currentValue
        firstAfterReset = true
    } else if (currentValue == '0' && firstAfterReset === true) {
        firstAfterReset = false
        currentValue = event.target.getAttribute('data-value')
        display.textContent = currentValue
    } else if (event.target.classList.contains('numBut')) {
        currentValue += event.target.getAttribute('data-value')
        display.textContent = currentValue
    }
})