"use script";

const now = new Date("2024-04-11T12:08:40.904Z");
// new Date.parse("2024-04-11T12:08:40.904Z"); // те ж саме, що і без parse

// гетери

// console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// яка різниця між моїм часовим поясом та UTC
// console.log(now.getTimezoneOffset());

// кількість мілесекунд прошедших з січня 1970 року
// console.log(now.getTime());

// сетери

// console.log(now.setHours(40));
// console.log(now);

let start = new Date();

for (let i = 0; i < 1000000000; i++) {
  let some = i ** 3;
}

let end = new Date();

alert(`Цикл відпрацював за ${end - start} мілісекунд`);
