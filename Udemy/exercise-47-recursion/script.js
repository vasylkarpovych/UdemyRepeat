"use strict";

// // решение циклом функции возведения в степень:

// // function pow(x, n) {
// //   let result = 1;

// //   if (n == 1) {
// //     result = x;
// //   } else {
// //     for (let i = 0; i < n; i++) {
// //       result *= x;
// //     }
// //   }

// //   return result;
// // }

// // решение рекурсией функции возведения в степень:

// function pow(x, n) {
//   // база рекурсии - это случай, когда у нас возвращается сразу значание, в итоге рекурсия прийдет к своей базе.
//   if (n === 1) {
//     return x;
//   } else {
//     // шаг рекурсии, каждый раз у нас n уменьшается на 1 - это и есть шаг рекурсии
//     return x * pow(x, n - 1);
//   }
// }
// console.log(pow(2, 1), pow(2, 2), pow(2, 3), pow(2, 4));

// // третий термин - это глубина рекурсии, количество вложенностей (вложенных функций). Это чамо чисто n. Максимальная глубина варируется около 10000

// ===================================================================================

// console.log(pow(2, 1)); // 2
// console.log(pow(2, 2)); // 4
// console.log(pow(2, 3)); // 8
// console.log(pow(2, 4)); // 16

// function pow(x, n) {
//   let result = 1;

//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// function pow(x, n) {
//   if (n === 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// ===================================================================================
// HomeWork

function factorial(number) {
  if (typeof number !== "number" || !Number.isInteger(number)) {
    return "Введіть вірне n";
  }

  if (number <= 1) {
    return 1;
  } else {
    return (number *= factorial(number - 1));
  }
}

console.log(factorial(-2));

// ===============================================================
// function factorial(n) {
//   if (typeof n !== "number" || !Number.isInteger(n)) {
//     return "Введите коректно n";
//   }

//   if (n >= 1) {
//     return n * factorial(n - 1);
//   } else {
//     return (n = 1);
//   }
// }

// console.log(factorial(4));
