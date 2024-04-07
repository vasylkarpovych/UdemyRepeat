"use strict";

const birthday = Symbol("birthday");

const user = {
  name: "Alex",
  surname: "Smith",
  [birthday]: "21/04/2012",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

Object.defineProperty(user, "showMyPublicData", { enumerable: false });

for (let key in user) {
  console.log(key);
}

// Object.defineProperty(user, "birthday", {
//   value: prompt("Date?"),
//   enumerable: true,
//   configurable: true,
// });

console.log(Object.getOwnPropertyDescriptor(user, birthday));

Object.defineProperties(user, {
  name: { writable: false },
  surname: { writable: false },
});

// =======================================================================

// флаги свойств в об'єкті

// writable - якщо це парамерт (флаг) стоїть як true то свойство можна змінити, а якщо false то воно тільки для читання

// enumerable - якщо цей флаг стоіть в true то властивість буде перечислятись у циклах, якщо ні - то цикли його будуть ігнорувати

// configurable - якщо цей флаг стоіть в true то властивість можна видалити, а атрибути можна змінити, інакше робити цього не можна

// =======================================================================

// Object.preventExtensions() - запобігає любе розширення об'єкту
// Object.isExtensible() - визначає чи дозволено розширення об'єкту

// Object.seal() - запобігає додавання нових властовостей об'єкту
// Object.isSealed() -

// Object.freeze() - заморажує об'єкт.
// Object.isFrozen() -
