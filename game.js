'use strict';

alert('Угадайте число от 1 до 100');

/*
let isNumber = function(n) {
  return !isNuN(parceFloat(n)) && isFinite(n);
}
*/

let gameFunction = function() {
  let num = 63;
  let userNumber = prompt('Введите число');

  return function() {
    if (isNaN(userNumber)) {
    userNumber = prompt('Введите число!!!');
  
  } else if (+userNumber > num) {
    alert('Загаданное число меньше');
    userNumber = prompt('Попробуйте ввести другое число');

  } else if (+userNumber < num) {
    alert('Загаданное число больше');
    userNumber = prompt('Попробуйте ввести другое число');

  } else if (+userNumber === num) {
    userNumber = alert('Поздравляю, Вы угадали!!!');
    
  } else if (userNumber === null) {
    alert('Игра окончена');  
  }
};
};
let play = gameFunction();
play();
