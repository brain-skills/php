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

const oneNumb = [0,1,2,3,4,5,6,7,8,9];
const elvNumb = ['', 11, 12, 13, 14, 15, 16, 17, 18, 19];
const tanNumb = ['', 10, 20, 30, 40, 50, 60, 70, 80, 90];
const hunNumb = ['', 100, 200, 300, 400, 500, 600, 700, 800, 900];
const oneText = ['ноль','один', 'два', 'три', 'четыре', 'пять', 'шесть', 'семь', 'восемь', 'девять'];
const elvText = ['', 'одиннацать', 'двенадцать','тринадцать', 'четырнадцать', 'пятнадцать', 'шестнадцать', 'семнадцать', 'восемнадцать', 'девятнадцать'];
const tanText = ['', 'десять','двадцать', 'тридцать', 'сорок', 'пятьдесят', 'шестьдесят', 'семьдесят', 'восемьдесят', 'девяносто'];
const hunText = ['', 'сто', 'двести', 'триста', 'четыреста', 'пятьсот', 'шестьсот', 'семьсот', 'восемьсот', 'девятьсот'];

function transform(number){
   const circle = Math.trunc(number/10);
   const remaind = number % 10;
   const circle100 = Math.trunc(number/100);
   const remaind100 = number % 100;
   const circleOfCircle = Math.trunc(remaind100/10);
   const remaindOfRemaild = remaind100 % 10;
   const numbAbs = Math.abs(number);
   let sign = true;
   if(number < 0){sign = false};

   for(let i=0; i <= 10; i++){
      if(number >= 0 && number <= 9 && oneNumb[i] == number){console.log(oneText[i]);}
      if(!sign && numbAbs == oneNumb[i]){console.log('Минус', oneText[i]);};

      if(number >= 11 && number <= 19 && elvNumb[i] == number){console.log(elvText[i]);}
      if(!sign && numbAbs == elvNumb[i]){console.log('Минус', elvText[i]);};

      if(number >= 10 && number <= 90 && tanNumb[i] == number){console.log(tanText[i]);}
      if(!sign && numbAbs == tanNumb[i]){console.log('Минус', tanText[i]);};

      if(number >= 100 && number <= 900 && hunNumb[i] == number){console.log(hunText[i]);}
      if(!sign && numbAbs == hunNumb[i]){console.log('Минус', hunText[i]);};

      if(numbAbs >= 21 && numbAbs <= 99){
         for(o = 0; o <= 10; o++){
            if(circle == oneNumb[i] && remaind == oneNumb[o]){console.log(tanText[i], oneText[o]);}
            if(!sign && Math.abs(circle) == oneNumb[i] && Math.abs(remaind) == oneNumb[o]){console.log('Минус', tanText[i], oneText[o]);};
         }
      }
      if(numbAbs >= 101 && numbAbs <= 999){
         for(k = 0; k <= 10; k++){
            for(j = 0; j <= 10; j++){
               if(remaind100 >= 1 && remaind100 <= 9){
                  if(circle100 == oneNumb[i] && circleOfCircle == oneNumb[k]){
                     if(remaindOfRemaild == oneNumb[j]){
                        console.log(hunText[i], oneText[j]);
                     }
                  }
               }
               if(Math.abs(remaind100) >= 1 && Math.abs(remaind100) <= 9){
                  if(!sign && Math.abs(circle100) == oneNumb[i] && Math.abs(circleOfCircle) == oneNumb[k]){
                     if(Math.abs(remaindOfRemaild) == oneNumb[j]){
                        console.log('Минус', hunText[i], oneText[j]);
                     }   
                  }  
               } 
               if(remaind100 >= 21 && remaind100 <= 99){
                  if(circle100 == oneNumb[i] && circleOfCircle == oneNumb[k]){
                     if(remaindOfRemaild == oneNumb[j]){
                        console.log(hunText[i], tanText[k], oneText[j])
                     };
                  };
               };
               if(Math.abs(remaind100) >= 21 && Math.abs(remaind100) <= 99){
                  if(!sign && Math.abs(circle100) == oneNumb[i] && Math.abs(circleOfCircle) == oneNumb[k]){
                     if(Math.abs(remaindOfRemaild) == oneNumb[j]){
                        console.log('Минус', hunText[i], tanText[k], oneText[j])
                     };
                  };
               };
            }
            if(remaind100 >= 11 && remaind100 <= 19){
               if(circle100 == oneNumb[i] && remaind100 == elvNumb[k]){
                  console.log(hunText[i], elvText[k])
               }
            };
            if(Math.abs(remaind100) >= 11 && Math.abs(remaind100) <= 19){
               if(!sign && Math.abs(circle100) == oneNumb[i] && Math.abs(remaind100) == elvNumb[k]){
                  console.log('Минус', hunText[i], elvText[k])
               }
            };
            if(remaind100 >= 10 && remaind100 <= 90 ){
               if(circle100 == oneNumb[i] && remaind100 == tanNumb[k]){
                     console.log(hunText[i], tanText[k])
               }
            };
            if(Math.abs(remaind100) >= 10 && Math.abs(remaind100) <= 90 ){
               if(Math.abs(circle100) == oneNumb[i] && Math.abs(remaind100) == tanNumb[k]){
                     console.log('Минус', hunText[i], tanText[k])
               }
            };
         }
      }
   }
};
transform(0); // Введите любое положительное или отрицательное число от -999 до 999 включительно с 0.