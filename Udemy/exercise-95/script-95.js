"use strict";

// new RegExp('pattern', 'flags');
// /pattern/flags

// const ans = prompt("Введіть Ваше і'мя");
// const ans = prompt("Введіть число");
// const reg = /\d/g;

// console.log(ans.match(reg));

const str = "My mane is R2D2";

console.log(str.match(/\D/gi));

// i - флаг, якщо ми хочемо знайти щось незалежно від регистру
// g - флаг, якщо ми хочемо знайти одразу декілька входжень
// m - флаг, вмикає багатостроковий режим

// класи регулярних виразів
// \d (дігітс) це означає, що ми з Вами шукаємо цифри
// \w це означає, що ми з Вами шукаємо всі букви
// \s це означає, що ми з Вами шукаємо всі пробіли
// можна знайти ща навпаки:
// \D - не числа
// \W - не букви

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt("Password");

// console.log(pass.replace(/./g, "*"));

// console.log("12-34-56".replace(/-/g, ":"));
