let topDisplay = document.getElementById('topDisplay');
let bottomDisplay = document.getElementById('bottomDisplay');
let multiply = document.getElementById('multiply');
let divide = document.getElementById('divide');
let add = document.getElementById('add');
let subtract = document.getElementById('subtract');
let exponent = document.getElementById('exponent');
let equal = document.getElementById('equal');
let zero = document.getElementById('0');
let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3');
let four = document.getElementById('4');
let five = document.getElementById('5');
let six = document.getElementById('6');
let seven = document.getElementById('7');
let eight = document.getElementById('8');
let nine = document.getElementById('9');
let reset = document.getElementById('reset');
let clear = document.getElementById('clear');
let decimal = document.getElementById('decimal');

let operands = [];

function displayUpdate() {
    bottomDisplay.innerHTML = '';
    bottomDisplay.innerHTML = operands.join('');
};

multiply.addEventListener('click', () => {operands.push('*'); displayUpdate()});
divide.addEventListener('click', () => {operands.push('/'); displayUpdate()});
add.addEventListener('click', () => {operands.push('+'); displayUpdate()});
subtract.addEventListener('click', () => {operands.push('-'); displayUpdate()});
exponent.addEventListener('click', () => {operands.push('^'); displayUpdate()});
equal.addEventListener('click', () => console.log(works));
zero.addEventListener('click', () => {operands.push('0'); displayUpdate()});
one.addEventListener('click', () => {operands.push('1'); displayUpdate()});
two.addEventListener('click', () => {operands.push('2'); displayUpdate()});
three.addEventListener('click', () => {operands.push('3'); displayUpdate()});
four.addEventListener('click', () => {operands.push('4'); displayUpdate()});
five.addEventListener('click', () => {operands.push('5'); displayUpdate()});
six.addEventListener('click', () => {operands.push('6'); displayUpdate()});
seven.addEventListener('click', () => {operands.push('7'); displayUpdate()});
eight.addEventListener('click', () => {operands.push('8'); displayUpdate()});
nine.addEventListener('click', () => {operands.push('9'); displayUpdate()});
reset.addEventListener('click', () => {bottomDisplay.innerHTML = ''; topDisplay.innerHTML = ''; operands=[]});
clear.addEventListener('click', () => {bottomDisplay.innerHTML = ''; operands.splice(-1,1); displayUpdate()});
decimal.addEventListener('click', () => {operands.push('9'); displayUpdate()});
