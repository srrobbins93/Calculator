let display = document.getElementById('display');
let operands = [];
let answerGiven = false;

// This ensures that users cannot input more than one operator at a time.
function operatorCheck() {
    if (operands.includes('*' || '/' || '+' || '-' || '**')) {operands.slice(0,-1); return;};
}

// Updates calculator display.
function displayUpdate() {
    display.innerHTML = '';
    display.innerHTML = operands.join(' ');
};

/* Relevant operator will be applied and the result of the expression is returned. The answerGiven variable is used to ensure that once a result is returned, the user
will not be able to edit the result that is stored operands[0] which is used as part of the next expression if the user so chooses. */
function operate(operator) {
    let answer;
    if (operator === '*') {answer = operands[0] * operands[2];
    } else if (operator === '/') {answer = operands[0] / operands[2];
    } else if (operator === '+') {answer = operands[0] + operands[2];
    } else if (operator === '-') {answer = operands[0] - operands[2];
    } else if (operator === '**') {answer = operands[0] ** operands[2];
    };
    operands = [answer];
    answerGiven = true;
}

/* When the equal button is clicked, the main function will check to see what stage the user is at in entering the expression. If the user has not entered all required
fields (initial operand, operator, and second operand), then the function returns. However, if the all required fields are present, the appropriate operator will be applied
and the result of the expression is returned the operate(). */
function mainFunc (operator) {
    if (operands[1] && !operands[2]) {
        return;
    } else if (operands.length >= 3) {
        operands[2] = Number(operands[2]);
        operate(operator);
        displayUpdate();
        return
    }
}

// Ensures that operator can only be added to operands array at the appropriate time.
function operatorAdd(operator) {
    if (!operands[0]){
        return
    } else if (operands[1] && !operands[2]) {
        return;
    } else if (operands.length >= 3) {
        return
    }
    operands.push(operator);
    displayUpdate();
}

// Ensures that operands are formated appropriately on the operands array so that when the expression is evaluated, it evaluates numbers, not strings.
function inputFormat(num) {
    if (answerGiven === true) {
        return;
    } else if (operands[0] === undefined) {
        operands.push(num);
        return;
    } else if (operands[0] && !operands[1] && !operands[2]) {
        if (operands[0].includes('.') && num === '.') {
            return;
        }
        operands[0] += num;
    //The operand at operands[0] is converted to a number here whereas operands[2] is converted to a number in mainFunc().
    } else if (operands[0] && operands[1] && !operands[2]) {
        operands[0] = Number(operands[0]);
        operands.push(num);
        return;
    } else if (operands[2] && !operands[3]) {
        if (operands[2].includes('.') && num === '.') {
            return;
        }
        operands[2] += num;
    };
}

// Permits user to delete a previous entry. If user tries to delete the result of an expression, the calculator will reset.
function backspace() {
    if (answerGiven === true) {
        display.innerHTML = '';
        operands=[]
        answerGiven === false;
    } else if (operands[0] === undefined) {
        return;
    } else if (operands[0] && !operands[1] && !operands[2]) {
        operands[0] = operands[0].slice(0, (operands[0].length - 1));
        if (operands[0] == false) {
            operands = [];
            answerGiven = false;
        }
    } else if (operands[0] && operands[1] && !operands[2]) {
        operands = operands.slice(0, (operands.length - 1));
    } else if (operands[2] && !operands[3]) {
        operands[2] = operands[2].slice(0, (operands[2].length - 1));
        }
}

document.getElementById('multiply').addEventListener('click', () => {answerGiven = false; operatorAdd('*');});
document.getElementById('divide').addEventListener('click', () => {answerGiven = false; operatorAdd('/');});
document.getElementById('add').addEventListener('click', () => {answerGiven = false; operatorAdd('+');});
document.getElementById('subtract').addEventListener('click', () => {answerGiven = false; operatorAdd('-');});
document.getElementById('exponent').addEventListener('click', () => {answerGiven = false; operatorAdd('**');});
document.getElementById('0').addEventListener('click', () => {inputFormat('0'); displayUpdate();});
document.getElementById('1').addEventListener('click', () => {inputFormat('1'); displayUpdate();});
document.getElementById('2').addEventListener('click', () => {inputFormat('2'); displayUpdate();});
document.getElementById('3').addEventListener('click', () => {inputFormat('3'); displayUpdate();});
document.getElementById('4').addEventListener('click', () => {inputFormat('4'); displayUpdate();});
document.getElementById('5').addEventListener('click', () => {inputFormat('5'); displayUpdate();});
document.getElementById('6').addEventListener('click', () => {inputFormat('6'); displayUpdate();});
document.getElementById('7').addEventListener('click', () => {inputFormat('7'); displayUpdate();});
document.getElementById('8').addEventListener('click', () => {inputFormat('8'); displayUpdate();});
document.getElementById('9').addEventListener('click', () => {inputFormat('9'); displayUpdate();});
document.getElementById('reset').addEventListener('click', () => {display.innerHTML = '';  operands=[]; answerGiven = false;})
document.getElementById('backspace').addEventListener('click', () => {backspace(); displayUpdate(); if (answerGiven === true) {answerGiven = false}});
document.getElementById('decimal').addEventListener('click', () => {inputFormat('.'); displayUpdate();});
document.getElementById('equal').addEventListener('click', () => {
    if (operands.includes('*')) {answerGiven = false; mainFunc('*')};
    if (operands.includes('/')) {answerGiven = false; mainFunc('/')};
    if (operands.includes('+')) {answerGiven = false; mainFunc('+')};
    if (operands.includes('-')) {answerGiven = false; mainFunc('-')};
    if (operands.includes('**')) {answerGiven = false; mainFunc('**')};
});
