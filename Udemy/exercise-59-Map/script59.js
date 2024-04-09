"use strict";

const user = {
  name: "Alex",
  surname: "Smith",
  birthday: "21/04/2012",
  showMyPublicData: function () {
    console.log(`${this.name} ${this.surname}`);
  },
};

const userMap = new Map(Object.entries(user));
console.log(userMap);

const newUserObject = Object.fromEntries(userMap);
console.log(newUserObject);

// console.log(typeof Object.keys(user)[0]);
const shops = [{ rice: 500 }, { oil: 200 }, { bread: 50 }];

const budget = [5000, 15000, 25000];

const map = new Map([[{ paper: 400 }, 8000]]);

shops.forEach((shops, i) => {
  map.set(shops, budget[i]);
});

// можна робити построково:
// map.set(shops[0], 5000);
// map.set(shops[1], 15000);
// map.set(shops[2], 25000);

// можна робити цепочкою, результат буде такий самий:

// map.set(shops[0], 5000).set(shops[1], 15000).set(shops[2], 25000);

// console.log(map);

// console.log(map.get(shops[0]));
// console.log(map.has(shops[0]));
// map.delete(key);
// map.clear();
// map.size;

// map.keys(); // повертає ітеруємий об'єкт по ключам

// const goods = [];
// for (let shop of map.keys()) {
//   console.log(shop);

//   goods.push(Object.keys(shop)[0]);
// }

// console.log(goods);

// map.values(); // повертає ітеруємий об'єкт по значенням

// const arrPrise = [];

// for (let price of map.values()) {
//   console.log(price);

//   arrPrise.push(price);
// }

// console.log(arrPrise);

// map.entries(); // повертає ітеруємий об'єкт по ключам
// for (let [shop, price] of map.entries()) {
//   console.log(price, shop);
// }

// map.forEach((value, key, map) => {
//   console.log(key, value);
// });
