"use strict";

const person = {
  name: "Alex",
  tel: "+380677777777",
  parents: {
    mom: "Olga",
    dad: "Petro",
  },
};

const clone = JSON.parse(JSON.stringify(person));

clone.parents.mom = "Ann";
console.log(person);
console.log(clone);
