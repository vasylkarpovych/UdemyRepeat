"use strict";

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

// функція підраховує тільки позитивні amount з нашого масиву

// моє рашення

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((positive) => positive.amount > 0)
    .reduce((sum, item) => sum + item.amount, 0);
};

// // варіант відповіді

// const getPositiveIncomeAmount = (data) => {
//   return data
//     .filter((item) => item.amount > 0)
//     .reduce((acc, curr) => acc + curr.amount, 0);
// };

// якщо є хоч одне число з мінусом, то підраховуємо загальну сумму, якщо все позитивні, то запускаємо функцію, що вище я написав

// моє рашення

const getTotalIncomeAmount = (data) => {
  if (data.some((elem) => elem.amount < 0)) {
    return data.reduce((sum, cur) => sum + cur.amount, 0);
  } else {
    return getPositiveIncomeAmount(data);
  }
};

// // варіант відповіді

// const getTotalIncomeAmount = (data) => {
//   return data.some((item) => item.amount < 0)
//     ? data.reduce((acc, curr) => acc + curr.amount, 0)
//     : getPositiveIncomeAmount(data);
// };

// console.log(getPositiveIncomeAmount(funds));
console.log(getTotalIncomeAmount(funds));
