"use strict";

// база рекурсії - це буде масив, там просто можно буде пройтись по ньому і перерахувати кількість елементів

function deepCount(a) {
  if (Array.isArray(a)) {
    let count = 0;
    a.forEach((item) => {
      count += 1 + deepCount(item);
    });
    return count;
  } else {
    return 0;
  }
}

// нижче ще варіанти вирішення, в самому кінці

console.log(deepCount([1, 5, 3])); // 3
console.log(deepCount(["1", 5, "3", ["10"]])); // 5
console.log(deepCount([1, 2, [3, 4, [5]]])); // 7
console.log(deepCount([])); // 0
console.log(deepCount([[[[[[[[[]]]]]]]]])); // 8

// function deepCountLoop(a) {
//   let sum = 0;

//   a.forEach((elem) => {
//     if (typeof elem !== "object") {
//       sum += 1;
//     } else {
//       sum += 1;
//       elem.forEach((elem2) => {
//         if (typeof elem2 !== "object") {
//           sum += 1;
//         } else {
//           sum += 1;
//           elem2.forEach((elem3) => {
//             if (typeof elem3 !== "object") {
//               sum += 1;
//             } else {
//               elem3.forEach((elem4) => {
//                 if (typeof elem4 !== "object") {
//                   sum += 1;
//                 } else {
//                   elem4.forEach((elem5) => {
//                     // ...
//                   });
//                 }
//               });
//             }
//           });
//         }
//       });
//     }
//   });
//   return sum;
// }

// console.log(deepCountLoop([1, 5, 3])); // 3
// console.log(deepCountLoop(["1", 5, "3", ["10"]])); // 5
// console.log(deepCountLoop([1, 2, [3, 4, [5]]])); // 7
// console.log(deepCountLoop([])); // 0
// console.log(deepCountLoop([[[[[[[[[]]]]]]]]])); // 8

// =====================================================
// function recursion(x, n) {
//   return n === 1 ? x : x * recursion(x, n - 1);
// }

// // console.log(recursion(2, 1));
// // console.log(recursion(2, 2));
// // console.log(recursion(2, 3));
// // console.log(recursion(2, 4));
// console.log(recursion(2, 5));

// function recursionLoop(x, n) {
//   let pow = 1;

//   for (let i = 1; i < n; i++) {
//     pow *= x;
//   }

//   return pow;
// }

// console.log(recursionLoop(2, 1));
// console.log(recursionLoop(2, 2));
// console.log(recursionLoop(2, 3));
// console.log(recursionLoop(2, 4));
// console.log(recursionLoop(2, 5));

// ще варіанти вирішення:

// Вариант с циклом
function deepCount(a) {
  let count = a.length;
  for (let i = 0; i < a.length; i++)
    if (Array.isArray(a[i])) count += deepCount(a[i]);
  return count;
}

// Вариант с методом reduce
function deepCount(a) {
  return a.reduce(
    (s, e) => s + (Array.isArray(e) ? deepCount(e) : 0),
    a.length
  );
}
