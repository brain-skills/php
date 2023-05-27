// Указываем диапазон От и До
let minValue;
let maxValue;
const rangeFrom = document.querySelector('#range-from');
const rangeTo = document.querySelector('#range-to');
minValue = parseInt(rangeFrom.value);
maxValue = parseInt(rangeTo.value);

// Если указыны буквы или символы или пустота, присваиваем диапазон от 0 до 100
if (isNaN(minValue) || isNaN(maxValue)){
   minValue = 0;
   maxValue = 100;
} else if (minValue === 'string' || maxValue === 'string'){
   minValue = 0;
   maxValue = 100;
} else if (minValue === '' || maxValue === ''){
   minValue = 0;
   maxValue = 100;
} else if (minValue === 0 || maxValue === 0){
   minValue = 0;
   maxValue = 100;
};

let answerNumber = Math.floor((minValue + maxValue) / 2);
console.log('Среднее число диапазона от', minValue, 'до', maxValue, '=', answerNumber);
let orderNumber = 1;
let gameRun = true;
(maxValue > 999) ? maxValue = 999 : maxValue; // ограничение максимального числа до 999
(minValue < -999) ? minValue = -999 : minValue; // ограничение минимального числа до -999
let showAlert = document.querySelector('#showAlert');
showAlert.innerHTML = `Вы загадали число от ${minValue} до ${maxValue}! И я угадаю его!`;
const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');
orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber}?`;

// запускаем игру заного
document.querySelector('#btnRetry').addEventListener('click', function() {
   minValue = rangeFrom.value;
   maxValue = rangeTo.value;
   // Если указыны буквы или символы или пустота, присваиваем диапазон от 0 до 100
   if (isNaN(minValue) || isNaN(maxValue)){
      minValue = 0;
      maxValue = 100;
   } else if (minValue === 'string' || maxValue === 'string'){
      minValue = 0;
      maxValue = 100;
   } else if (minValue === '' || maxValue === ''){
      minValue = 0;
      maxValue = 100;
   } else if (minValue === 0 || maxValue === 0){
      minValue = 0;
      maxValue = 100;
   };
   showAlert.innerHTML = `Вы загадали число от ${minValue} до ${maxValue}! И я угадаю его!`;
   answerNumber = Math.floor((minValue + maxValue) / 2);
   console.log('Среднее число диапазона от', minValue, 'до', maxValue, '=', answerNumber);
   orderNumber = 1;
   gameRun = true;
   orderNumberField.innerText = orderNumber;
   answerField.innerText = `Вы загадали число ${answerNumber}?`;
   transform(answerNumber);
});

// указываем что число меньше
document.getElementById('btnMinus').addEventListener('click', function() {
   if (gameRun){
      if (maxValue === minValue){
         const phraseRandom = Math.round( Math.random() * 2);
         const answerPhrase = (phraseRandom === 1) ? `Вы загадали неправильное число!\n\u{1F914}` : (phraseRandom === 2) ? `Я сдаюсь..\n\u{1F92F}` : `Вы точно загадали число ?\n\u{1F644}`;
         answerField.innerText = answerPhrase;
         gameRun = false;
      } else {
         maxValue = answerNumber - 1;
         answerNumber = Math.floor(((minValue+1) + maxValue) / 2);
         console.log('Среднее число диапазона от', minValue, 'до', maxValue, '=', answerNumber);
         orderNumber++;
         orderNumberField.innerText = orderNumber;
         const questionRandom = Math.round(Math.random() * 2); 
         const question = (questionRandom === 1) ? `Вы загадали ${answerNumber}?` : (questionRandom === 2) ? `Наверно это ${answerNumber}?` : `Может это ${answerNumber}?` ;
         answerField.innerText = question;
         transform(answerNumber);
      }
   }
});

// указываем что число больше
document.getElementById('btnPlus').addEventListener('click', function() {
   if (gameRun){
      if (minValue === maxValue){
         const phraseRandom = Math.round( Math.random() * 2);
         const answerPhrase = (phraseRandom === 1) ? `Вы загадали неправильное число!\n\u{1F914}` : (phraseRandom === 2) ? `Я сдаюсь..\n\u{1F92F}` : `Вы точно загадали число ?\n\u{1F644}`;
         answerField.innerText = answerPhrase;
         gameRun = false;
      } else {
         minValue = answerNumber  + 1;
         answerNumber = Math.floor((minValue + maxValue) / 2);
         console.log('Среднее число диапазона от', minValue, 'до', maxValue, '=', answerNumber);
         orderNumber++;
         orderNumberField.innerText = orderNumber;
         const questionRandom = Math.round(Math.random() * 2); 
         const question = (questionRandom === 1) ? `Вы загадали ${answerNumber}?` : (questionRandom === 2) ? `Наверно это ${answerNumber}?` : `Может это ${answerNumber}?`;
         answerField.innerText = question;
         transform(answerNumber);
      }
   }
});

// подтверждение правильности
document.getElementById('btnEqual').addEventListener('click', function() {
   if (gameRun){
      const answerRandom = Math.round(Math.random() * 2);
      const answer = (answerRandom ===1) ? `Я всегда угадываю\n\u{1F60E}` : (answerRandom === 2) ? `Ванга отдыхает\n\u{1F638}` : `Я есть Оракул\n\u{1F608}`;
      answerField.innerText = answer;
      gameRun = false;
      console.log('Загаданное число: ', answerNumber);
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
   const circle = Math.trunc(number/10); // полученаем целую часть числа при делении на 10
   const remaind = number % 10; // полученаем остаток от деления на 10
   const circle100 = Math.trunc(number/100); // полученаем целую часть числа при делении на 100
   const remaind100 = number % 100; // полученаем остаток от деления на 100
   const circleOfCircle = Math.trunc(remaind100/10); // полученаем целую часть остатка при делении на 10
   const remaindOfRemaild = remaind100 % 10; // полученаем остаток от остатка деления на 10
   const numbAbs = Math.abs(number); // получение положительных чисел из отрицательных
   let sign = true; // переменная для хранения знака (+) или (-). По умолчанию = (+) !
   if(number < 0){sign = false}; // если число меньше нуля, то знак (-) !
   for(let i=0; i <= 10; i++){
      // от 1, 2, 3 и тд, до 9 (полож-е числа !!!)
      if(number >= 0 && number <= 9 && oneNumb[i] == number){
         answerField.innerText = `Вы загадали число ${oneText[i]} ?`
      }
      // от -1, -2, -3 и тд, до -9 (отриц-е числа !!!)
      if(!sign && numbAbs == oneNumb[i]){
         answerField.innerText = `Вы загадали число минус ${oneText[i]} ?`
      }
      // от 11, 12, 13 и тд, до 19 (полож-е числа !!!)
      if(number >= 11 && number <= 19 && elvNumb[i] == number){
         answerField.innerText = `Вы загадали число ${elvText[i]} ?`
      }
      // от -11, -12, -13 и тд, до -19 (отриц-е числа !!!)
      if(!sign && numbAbs == elvNumb[i]){
         answerField.innerText = `Вы загадали число минус ${elvText[i]} ?`
      }
      // от 10, 20, 30 и тд, до 90 (полож-е числа !!!)
      if(number >= 10 && number <= 90 && tanNumb[i] == number){
         answerField.innerText = `Вы загадали число ${tanText[i]} ?`
      }
      // от -10, -20, -30 и тд, до -90 (отриц-е числа !!!)
      if(!sign && numbAbs == tanNumb[i]){
         answerField.innerText = `Вы загадали число минус ${tanText[i]} ?`
      }
      // от 100, 200, 300 и тд, до 900 (полож-е числа !!!)
      if(number >= 100 && number <= 900 && hunNumb[i] == number){
         answerField.innerText = `Вы загадали число ${hunText[i]} ?`
      }
      // от -100, -200, -300 и тд, до -900 (отриц-е числа !!!)
      if(!sign && numbAbs == hunNumb[i]){
         answerField.innerText = `Вы загадали число минус ${hunText[i]} ?`
      }
      if(numbAbs >= 21 && numbAbs <= 99 && remaind !== 0){
         for(o = 0; o <= 10; o++){
            // от 21, 32, 67 и тд, до 99 (получение полож-х чисел с остатком от 21 до 99)
            if(circle == oneNumb[i] && remaind == oneNumb[o]){
               answerField.innerText = `Вы загадали число ${tanText[i]} ${oneText[o]} ?`
            }
            // от -21, -32, -67 и тд, до -99 (получение отриц-х чисел с остатком от 21 до 99)
            if(!sign && Math.abs(circle) == oneNumb[i] && Math.abs(remaind) == oneNumb[o]){
               answerField.innerText = `Вы загадали число минус ${tanText[i]} ${oneText[o]} ?`
            }
         }
      }
      // Преобразование трёх значного числа в текст. Например 374 (как: триста, семьдесят, четыре)
      if(numbAbs >= 101 && numbAbs <= 999){
         for(k = 0; k <= 10; k++){
            for(j = 0; j <= 10; j++){
               // от 101-109, 201-209, 301-309 и тд, до 901-909 (полож-е числа !!!)
               if(remaind100 >= 1 && remaind100 <= 9){
                  if(circle100 == oneNumb[i] && circleOfCircle == oneNumb[k]){
                     if(remaindOfRemaild == oneNumb[j]){
                        answerField.innerText = `Вы загадали число ${hunText[i]} ${oneText[j]} ?`
                     }
                  }
               }
               // от 101-109, 201-209, 301-309 и тд, до 901-909 (отриц-е числа !!!)
               if(Math.abs(remaind100) >= 1 && Math.abs(remaind100) <= 9){
                  if(!sign && Math.abs(circle100) == oneNumb[i] && Math.abs(circleOfCircle) == oneNumb[k]){
                     if(Math.abs(remaindOfRemaild) == oneNumb[j]){
                        answerField.innerText = `Вы загадали число минус ${hunText[i]} ${oneText[j]} ?`
                     }   
                  }  
               }
               // от 121, 122, 123 и тд, до 999 (полож-е числа !!!)
               if(remaind100 >= 21 && remaind100 <= 99){
                  if(circle100 == oneNumb[i] && circleOfCircle == oneNumb[k]){
                     if(remaindOfRemaild == oneNumb[j]){
                        if(oneText[j].length != 0){
                           if((hunText[i].length + tanText[k].length + oneText[j].length) + 2 < 20){
                              answerField.innerText = `Вы загадали число ${hunText[i]} ${tanText[k]} ${oneText[j]} ?`;
                              // console.log('Кол-во символов текста: ', hunText[i].length + tanText[k].length + oneText[j].length);
                           }
                        } else {
                           if((hunText[i].length + tanText[k].length) + 1 < 20){
                              answerField.innerText = `Вы загадали число ${hunText[i]} ${tanText[k]} ${oneText[j]} ?`;
                              // console.log('Кол-во символов текста: ', hunText[i].length + tanText[k].length + oneText[j].length);
                           }
                        }
                     }
                  }
               }
               // от -121, -122, -123 и тд, до -999 (отриц-е числа !!!)
               if(Math.abs(remaind100) >= 21 && Math.abs(remaind100) <= 99){
                  if(!sign && Math.abs(circle100) == oneNumb[i] && Math.abs(circleOfCircle) == oneNumb[k]){
                     if(Math.abs(remaindOfRemaild) == oneNumb[j]){
                        answerField.innerText = `Вы загадали число минус ${hunText[i]} ${tanText[k]} ${oneText[j]} ?`
                     }
                  }
               }
            }
            // от 111-119, 211-219, 311-319 и тд, до 911-919 (полож-е числа !!!)
            if(remaind100 >= 11 && remaind100 <= 19){
               if(circle100 == oneNumb[i] && remaind100 == elvNumb[k]){
                  answerField.innerText = `Вы загадали число ${hunText[i]} ${elvText[k]} ?`
               }
            }
            // от 111-119, 211-219, 311-319 и тд, до 911-919 (отриц-е числа !!!)
            if(Math.abs(remaind100) >= 11 && Math.abs(remaind100) <= 19){
               if(!sign && Math.abs(circle100) == oneNumb[i] && Math.abs(remaind100) == elvNumb[k]){
                  answerField.innerText = `Вы загадали число минус ${hunText[i]} ${elvText[k]} ?`
               }
            }
            // от 110-190, 210-290, 310-390 и тд, до 910-990 (полож-е числа !!!)
            if(remaind100 >= 10 && remaind100 <= 90){
               if(circle100 == oneNumb[i] && remaind100 == tanNumb[k]){
                  if((hunText[i].length + tanText[k].length) + 1 < 20){
                     answerField.innerText = `Вы загадали число ${hunText[i]} ${tanText[k]} ?`;
                     // console.log((hunText[i].length) + (tanText[k].length) + 1);
                  }
               }
            }
            // от 110-190, 210-290, 310-390 и тд, до 910-990 (отриц-е числа !!!)
            if(Math.abs(remaind100) >= 10 && Math.abs(remaind100) <= 90){
               if(!sign && Math.abs(circle100) == oneNumb[i] && Math.abs(remaind100) == tanNumb[k]){
                  answerField.innerText = `Вы загадали число минус ${hunText[i]} ${tanText[k]} ?`
               }
            }
         }
      }
   }
};
transform(answerNumber);