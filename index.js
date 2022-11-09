// selecting various buttons for the calculator
const numberButton = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const delButton = document.querySelector('[data-delete]')
const alcButton = document.querySelector('[data-all-clear]')
const previousoperand = document.querySelector('[data-previous-operand]')
const currentoperand = document.querySelector('[data-current-operand]')


let operator = '+'
// creating function to evaluate the numbers
function evaluate (previousoperand, currentoperand) {
    console.log(previousoperand);
    console.log(currentoperand);
    let result = 0
    let previous = parseFloat(previousoperand)
    let  current = parseFloat(currentoperand)
    switch(operator) {
        case '+':
            result = previous+current
            break
        case '-':
            result = previous-current
            break
        case '*':
            result = previous*current
            break
        case '÷':
            result = previous/current
            break
        default:
            return
    }
    return result
}

numberButton.forEach(button=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target);
        currentoperand.innerText += e.target.innerText 
    })
})

operationButtons.forEach(button=>{
    button.addEventListener('click', (e)=>{
        if (currentoperand.innerText === '') return
        if (previousoperand.innerText !== '') {
            console.log(evaluate(currentoperand.innerText, previousoperand.innerText));
            previousoperand.innerText = evaluate(currentoperand.innerText, previousoperand.innerText)
            currentoperand.innerText = ''
        } else {
            previousoperand.innerText = currentoperand.innerText 
        }
        console.log(e.target);
        operator = e.target.innerText
        currentoperand.innerText += e.target.innerText 
        // previousoperand.innerText = currentoperand.innerText
        currentoperand.innerText = ''
    })
})

alcButton.addEventListener('click',()=>{
    currentoperand.innerText = ''
    previousoperand.innerText = ''
})

equalsButton.addEventListener('click',()=>{
    if(previousoperand.innerText === '' || currentoperand.innerText === '') return
    currentoperand.innerText = evaluate(currentoperand.innerText, previousoperand.innerText)
    previousoperand.innerText = ''
})

delButton.addEventListener('click',()=>{
    currentoperand.innerText = currentoperand.innerText.slice(0,-1)
})