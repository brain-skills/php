let lastOperand = 0;
let operation = null;
const input = document.querySelector('input');

document.querySelector('#btn_one').addEventListener('click', function(){
    input.value += '1';
});
document.querySelector('#btn_two').addEventListener('click', function(){
    input.value += '2';
});
document.querySelector('#btn_three').addEventListener('click', function(){
    input.value += '3';
});
document.querySelector('#btn_four').addEventListener('click', function(){
    input.value += '4';
});
document.querySelector('#btn_five').addEventListener('click', function(){
    input.value += '5';
});
document.querySelector('#btn_six').addEventListener('click', function(){
    input.value += '6';
});
document.querySelector('#btn_seven').addEventListener('click', function(){
    input.value += '7';
});
document.querySelector('#btn_eight').addEventListener('click', function(){
    input.value += '8';
});
document.querySelector('#btn_nine').addEventListener('click', function(){
    input.value += '9';
});
document.querySelector('#btn_zero').addEventListener('click', function(){
    input.value += '0';
});
document.querySelector('#btn_dot').addEventListener('click', function(){
    input.value += '.';
});
document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    input.value = '';
});

// =================================================================
// Сложение
document.querySelector('#btn_plus').addEventListener('click', function(){
    lastOperand = parseFloat(input.value);
    operation = '+';
    input.value = '';
});
// Вычитание
document.querySelector('#btn_minus').addEventListener('click', function(){
    lastOperand = parseFloat(input.value);
    operation = '-';
    input.value = '';
});
// Умножение
document.querySelector('#btn_multiply').addEventListener('click', function(){
    lastOperand = parseFloat(input.value);
    operation = '*';
    input.value = '';
});
// Деление
document.querySelector('#btn_divide').addEventListener('click', function(){
    lastOperand = parseFloat(input.value);
    operation = '/';
    input.value = '';
});
// Корень из
document.querySelector('#btn_root').addEventListener('click', function(){
    lastOperand = parseFloat(input.value);
    operation = 'root';
});
// Возведение в степень
document.querySelector('#btn_exponentiation').addEventListener('click', function(){
    lastOperand = parseFloat(input.value);
    operation = 'exponentiation';
    input.value = '';
});
// Получение результата
document.querySelector('#btn_equals').addEventListener('click', function(){
    if(operation === '+'){
        const result = lastOperand + parseFloat(input.value);
        operation = null;
        lastOperand = 0;
        input.value = result;
    }
    if(operation === '-'){
        const result = lastOperand - parseFloat(input.value);
        operation = null;
        lastOperand = 0;
        input.value = result;
    }
    if(operation === '*'){
        const result = lastOperand * parseFloat(input.value);
        operation = null;
        lastOperand = 0;
        input.value = result;
    }
    if(operation === '/'){
        const result = lastOperand / parseFloat(input.value);
        operation = null;
        lastOperand = 0;
        input.value = result;
    }
    if(operation === 'root'){
        const result = parseFloat(Math.sqrt(input.value));
        operation = null;
        lastOperand = 0;
        input.value = result;
    }
    if(operation === 'exponentiation'){
        const result = lastOperand ** parseFloat(input.value);
        operation = null;
        lastOperand = 0;
        input.value = result;
    }
});