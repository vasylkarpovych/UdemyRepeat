"use strict";

// // Задача 17

// // В каждой книге есть n страниц с номерами страниц от 1 до n. Написать функцию amountOfPages, аргумент которой summary составляется путем сложения количества цифр всех номеров страниц. Эта функция возвращает число - количество страниц n в книге. Чтобы было понятно что такое количество цифр, давайте рассмотрим примеры.

// // Приклад

// // Если на входе функции summary = 25, то на результат должен быть 17. Всего в числах от 1 до 17 содержится 25 цифр: 1234567891011121314151617.

// function amountOfPages(summary) {
//   let numberLength = 0;
//   let number = 0;

//   while (numberLength < summary) {
//     number++;
//     numberLength += number.toString().length;
//   }
//   return number;
// }

// console.log(amountOfPages(5));
// console.log(amountOfPages(11));
// console.log(amountOfPages(12));
// console.log(amountOfPages(25));
// console.log(amountOfPages(1095));
// console.log(amountOfPages(185));

// // Зробив, тести пройшло все

// ========================================================
// // ще варіант рішення завдання

function amountOfPages(summary) {
  let result = "";
  let n = 0;

  for (let i = 1; i <= summary; i++) {
    result += i;
    // if (result.length === summary || result.length > summary) {
    if (result.length >= summary) {
      n = i;
      break;
    }
  }

  return n;
}

console.log(amountOfPages(5));
console.log(amountOfPages(11));
console.log(amountOfPages(12));
console.log(amountOfPages(25));
console.log(amountOfPages(1095));
console.log(amountOfPages(185));
