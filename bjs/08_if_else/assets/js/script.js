let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

document.getElementById('btnRetry').addEventListener('click', function() {
    minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
    maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
    alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
    answerNumber  = Math.floor((minValue + maxValue) / 2);
    orderNumber = 1;
    gameRun = true;
    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber}?`;
})

document.getElementById('btnLess').addEventListener('click', function() {
    if (gameRun){
        if (maxValue === minValue){
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` : 
                (phraseRandom === 2) ?
                `Я сдаюсь..\n\u{1F92F}` : `Вы точно загадали число ?\n\u{1F644}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber - 1;
            answerNumber = Math.floor(((minValue +1)  + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const questionRandom = Math.round(Math.random() * 2); 
            const question = (questionRandom === 1) ? `Вы загадали ${answerNumber }?` :
                            (questionRandom === 2) ? `Наверно это ${answerNumber }?` : 
                            `Может это ${answerNumber }?` ;
            answerField.innerText = question;
        }
    }
})

document.getElementById('btnOver').addEventListener('click', function() {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random() * 2);
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` : 
                (phraseRandom === 2) ?
                `Я сдаюсь..\n\u{1F92F}` : `Вы точно загадали число ?\n\u{1F644}`;
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            const questionRandom = Math.round(Math.random() * 2); 
            const question = (questionRandom === 1) ? `Вы загадали ${answerNumber }?` :
                            (questionRandom === 2) ? `Наверно это ${answerNumber }?` : 
                            `Может это ${answerNumber }?`;
            answerField.innerText = question;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function() {
    if (gameRun){
        const answerRandom = Math.round(Math.random() * 2);
        const answer = (answerRandom ===1) ? `Я всегда угадываю\n\u{1F60E}` :
        (answerRandom === 2) ? `Ванга отдыхает\n\u{1F638}` : 
        `Я есть Оракул\n\u{1F608}`;
        answerField.innerText = answer;
        gameRun = false;
    }
});















// Alert swal
// Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: 'Your work has been saved',
//     showConfirmButton: false,
//     timer: 1500
// });

// Prompt swal
// const { value: url } = await Swal.fire({
//     input: 'url',
//     inputLabel: 'URL address',
//     inputPlaceholder: 'Enter the URL'
// })
// if (url) {
//  Swal.fire(`Entered URL: ${url}`)
// }