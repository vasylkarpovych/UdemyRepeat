"use strict";

// // Задача 18

// // Панграмма — это предложение, в котором каждая буква алфавита встречается хотя бы по одному разу по возможности без повторений. Например, предложение «The quick brown fox jumps over the lazy dog» является панграммой, поскольку в нем хотя бы один раз используются буквы от A до Z (регистр значения не имеет).

// // Напишите функцию isPangram, которая принимает в себя строку и возвращает логическое значение. Если строка является панграммой - вернется true, если нет - false.

// // Приклад

// // isPangram(«The quick brown fox jumps over the lazy dog») => true
// // isPangram(«Hello world») => false

// function isPangram(string) {
//   const englishAlphabet = "abcdefghijklmnopqrstuvwxyz".length;

//   let arrString = string.toLowerCase().split(" ").join("");
//   let numbersOfLetters = Array.from(new Set(arrString)).join("").length;

//   if (englishAlphabet === numbersOfLetters) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(
//   isPangram("trhdytfg trhdfhgjdf  hfsyhjnfhxjn fsyhjfyrjh") // false
// );

// console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true

// console.log(isPangram("Hello world")); // false

// Зробив, тести пройшло все

// ===============================================================================
// ще варіанти рішення

// // Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// // Это должно экономить ресурсы компьютера
// function isPangram(string) {
//   string = string.toLowerCase();
//   return "abcdefghijklmnopqrstuvwxyz".split("").every(function (x) {
//     return string.indexOf(x) !== -1;
//   });
// }

// console.log(
//   isPangram("trhdytfg trhdfhgjdf  hfsyhjnfhxjn fsyhjfyrjh") // false
// );

// console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true

// console.log(isPangram("Hello world")); // false

// // С другим методом и строка каждый раз преобразовывается в коллбэке
// function isPangram(string) {
//   return "abcdefghijklmnopqrstuvwxyz"
//     .split("")
//     .every((x) => string.toLowerCase().includes(x));
// }

// console.log(
//   isPangram("trhdytfg trhdfhgjdf  hfsyhjnfhxjn fsyhjfyrjh") // false
// );

// console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true

// console.log(isPangram("Hello world")); // false

// // При помощи цикла
// function isPangram(str) {
//   letters: for (var c = 0; c < 26; c++) {
//     for (let i = 0; i < str.length; i++) {
//       let s = str.charCodeAt(i);
//       if (s < 65 || (s > 90 && s < 97) || s > 122) continue;
//       if (s === 65 + c || s === 97 + c) continue letters;
//     }

//     return false;
//   }

//   return true;
// }

// console.log(
//   isPangram("trhdytfg trhdfhgjdf  hfsyhjnfhxjn fsyhjfyrjh") // false
// );

// console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true

// console.log(isPangram("Hello world")); // false

// // При помощи Set
// function isPangram(string) {
//   return (
//     new Set(
//       string
//         .toLocaleLowerCase()
//         .replace(/[^a-z]/gi, "")
//         .split("")
//     ).size === 26
//   );
// }

// // С использованием регулярных выражений
// function isPangram(string) {
//   return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
// }

// console.log(
//   isPangram("trhdytfg trhdfhgjdf  hfsyhjnfhxjn fsyhjfyrjh") // false
// );

// console.log(isPangram("The quick brown fox jumps over the lazy dog")); // true

// console.log(isPangram("Hello world")); // false
