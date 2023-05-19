let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
if (isNaN(minValue) || isNaN(maxValue)){
    minValue = 0;
    maxValue = 100;
}else if (minValue === 'string' || maxValue === 'string'){
    minValue = 0;
    maxValue = 100;
}
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;
(maxValue > 999) ? maxValue = 999 : maxValue;
(minValue < -999) ? minValue = -999 : minValue;
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);

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

// Последний вариант
// const numb900 = [100, 200, 300, 400, 500, 600, 700, 800, 900];
// const numb90 = [10, 20, 30, 40, 50, 60, 70, 80, 90];
// const numb9 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const numb19 = [11, 12, 13, 14, 15, 16, 17, 18, 19];

// const string900 = ['сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];
// const string90 = ['десять', 'двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
// const string9 = ['один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
// const string19 = ['одиннацать', 'двенадцать', 'тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];

// function transformation(number){
//     for(i = 0; i < 9; i++){
//         if(numb900[i] == number){
//             return string900[i];
//         } else if(numb90[i] == number){
//             return string90[i];
//         } else if(numb9[i] == number){
//             return string9[i];
//         } else if(numb19[i] == number){
//             return string19[i];
//         }
//         console.log(numb900[i]+numb90[i]+numb9[i]+numb19[i].join(""));
//     }
// }
// console.log(transformation(200));

// Вариант с помощью switch ===========================================================================
// function transformation(number){
//     switch(number){
//         case 1: 'один';
//         breack;
//         case 2: 'два';
//         breack;
//         default: 'три';
//     }
// }
// console.log(transformation(200));

// Вариант с помощью if ==============================================================================
// if (numb900[0] == number){
    //     return string900[0]
    // } else if (numb900[1] == number){
    //     return string900[1]
    // } else if (numb900[2] == number){
    //     return string900[2]
    // } else if (numb900[3] == number){
    //     return string900[3]
    // } else if (numb900[4] == number){
    //     return string900[4]
    // } else if (numb900[5] == number){
    //     return string900[5]
    // } else if (numb900[6] == number){
    //     return string900[6]
    // } else if (numb900[7] == number){
    //     return string900[7]
    // } else if (numb900[8] == number){
    //     return string900[8]
    // }