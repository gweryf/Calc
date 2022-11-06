// selecting number buttons
const one = document.querySelector('.one');
const two = document.querySelector('.two');
const three = document.querySelector('.three');
const four = document.querySelector('.four');
const five = document.querySelector('.five');
const six = document.querySelector('.six');
const seven = document.querySelector('.seven');
const eight = document.querySelector('.eight');
const nine = document.querySelector('.nine');
const zero = document.querySelector('.zero');
const period = document.querySelector('.period')

// selecting operation buttons
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const mul = document.querySelector('.mul');
const divide = document.querySelector('.divide');

// selecting clear and delete buttons
const clear = document.querySelector('.clear'); 
const del = document.querySelector('.del')

// adding basic functionality to all buttons

one.addEventListener('click',() => {
    console.log('clicked one');
    document.querySelector('.idk').innerText += 1;
});
two.addEventListener('click',() => {
    console.log('clicked two');
    document.querySelector('.idk').innerText += 2;
});
three.addEventListener('click',() => {
    console.log('clicked three');
    document.querySelector('.idk').innerText += 3;
});
four.addEventListener('click',() => {
    console.log('clicked four');
    document.querySelector('.idk').innerText += 4;
});
five.addEventListener('click',() => {
    console.log('clicked five');
    document.querySelector('.idk').innerText += 5;
});
six.addEventListener('click',() => {
    console.log('clicked six');
    document.querySelector('.idk').innerText += 6;
});
seven.addEventListener('click',() => {
    console.log('clicked seven');
    document.querySelector('.idk').innerText += 7;
});
eight.addEventListener('click',() => {
    console.log('clicked eight');
    document.querySelector('.idk').innerText += 8;
});
nine.addEventListener('click',() => {
    console.log('clicked nine');
    document.querySelector('.idk').innerText += 9;
});
zero.addEventListener('click', ()=>{
    console.log('clicked zero');
    document.querySelector('.idk').innerText += 0;
});
period.addEventListener('click', ()=>{
    console.log('clicked period');
    document.querySelector('.idk').innerText += '.';
});



plus.addEventListener('click', ()=>{
    console.log('clicked plus');
    document.querySelector('.idk').innerText += '+';
});
minus.addEventListener('click', ()=>{
    console.log('clicked minus');
    document.querySelector('.idk').innerText += '-';
});
mul.addEventListener('click', ()=>{
    console.log('clicked mul');
    document.querySelector('.idk').innerText += '*';
});
divide.addEventListener('click', ()=>{
    console.log('clicked divide');
    document.querySelector('.idk').innerText += '/';
});


clear.addEventListener('click', function(){
    document.querySelector('.idk').innerText = '';
});

del.addEventListener('click', function(){
    document.querySelector('.idk').innerText = '';
});

function operate (a, b, operator) {
    a = Number(a);
    b = Number(b);
    let ans = 0;
    if (operator == '+') {
        ans = Integer(a) + Integer(b);
    } else if (operator == '-') {
        ans = Integer(a) - Integer(b);
    } else if (operator == '*') {
        ans = Integer(a) - Integer(b);
    } else {
        ans = Integer(a) / Integer(b);
    }
}