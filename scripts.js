const display = document.querySelector('.textCont');
let currentValue = '';
let storedValue = '';
let calcValue = '';
let firstAfterReset = false
let canChangeStored = true

document.querySelectorAll('.numBut').forEach(button => {
    button.addEventListener('click', (event) => {
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
        } else {
            currentValue += event.target.getAttribute('data-value')
            display.textContent = currentValue
        }
    })
})

document.querySelectorAll('.calcBut').forEach(button => {
    button.addEventListener('click', event => {
        if ((currentValue !== '' || '0') && storedValue && calcValue) {
            storedValue = equate(storedValue, currentValue, calcValue)
            display.textContent = storedValue
            currentValue = '0'
            firstAfterReset = true
            canChangeStored = true
        }
        else if (canChangeStored == true) {
            calcValue = event.target.getAttribute('data-value')
            storedValue = currentValue
            canChangeStored = false
            currentValue = '0'
            display.textContent = currentValue
            firstAfterReset = true
        } else {
            calcValue = event.target.getAttribute('data-value')
        }
    })
})

function equate(num1, num2, calc) {
    switch (calc) {
        case '+':
            return parseInt(num1) + parseInt(num2);
        case '-':
            return parseInt(num1) - parseInt(num2);
        case '/':
            return parseInt(num1) / parseInt(num2);
        case '*':
            return parseInt(num1) * parseInt(num2);
        default:
            return 'Err'
    }
}

document.querySelector('.clearBut').addEventListener('click', () => {
    currentValue = '0'
    display.textContent = currentValue
    firstAfterReset = true
    canChangeStored = true
    storedValue = ''
    calcValue = ''
})

document.querySelector('.equals').addEventListener('click', () => {
    if ((currentValue !== '' || '0') && storedValue && calcValue) {
        storedValue = equate(storedValue, currentValue, calcValue)
        display.textContent = storedValue
        currentValue = '0'
        firstAfterReset = true
        canChangeStored = true
    } else {
        display.textContent = 'Err'
    }
})