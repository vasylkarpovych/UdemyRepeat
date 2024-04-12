"use strict";

// 1) Звичайна функція: this = window, але якщо стоїть "use strict" то буде undefined

// function showThis() {
//   console.log(this);
// }

// showThis();

// практична задачка:

// function showThis(a, b) {
//   console.log(this);
//   function sum() {
//     console.log(this);
//     return a + b;
//   }
//   console.log(sum());
// }

// showThis(10, 5);

// 2) Якщо ми використовуємо метоб всередині о'єкту, то контект виклику завжди буде посилатись на сам об'єкт

// const obj = {
//   a: 20,
//   b: 15,
//   sun: function () {
//     console.log(this);
//     function shout() {
//       console.log(this);
//     }
//     shout();
//   },
// };

// obj.sun();

// 3) this в конструкторах та класах - це новий екземпляр об'єкта

// function User(name, id) {
//   this.name = name;
//   this.id - id;
//   this.human = true;
// }

// let ivan = new User("Ivan", 23);

// 4) Коли ми самостійно назначаємо this де нам треба. Існує три методи: CALL та APPLY (ці два методи ми просто контекст встановили) та BIND (створює вже нову функцію та під неї підвязує контекст)

// CALL та APPLY

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + " " + surname);
// }

// const user = {
//   name: "John",
// };

// // BIND

// sayName.call(user, "Smith");
// sayName.apply(user, ["Ivanych"]);

// function count(num) {
//   return this * num;
// }

// const double = count.bind(2);
// console.log(double(5));
// console.log(double(15));
// console.log(double(75));

const btn = document.querySelector("button");

// тут this буде сама кнопка, на яку нажали
// btn.addEventListener("click", function () {
//   this.style.background = "grey";
//   console.log(this);
// });

// тут this буде помилка, так як у => немає свого this (буде або window або undefine)
// btn.addEventListener("click", () => {
//   this.style.background = "grey";
//   console.log(this);
// });

// але щоб працювало, треба прокинути event та прописати event.target
btn.addEventListener("click", (event) => {
  event.target.style.background = "grey";
  console.log(this);
});

const obj = {
  num: 5,
  sayNumber: function () {
    const say = () => {
      console.log(this.num);
    };
    // function say() {
    //   console.log(this);
    // }
    say();
  },
};

obj.sayNumber();

const double = (a) => a * 2;
