// =================================================================================
// Задачка к кодварс, та її різні варіанти:

// function toCamelCase(str) {
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// =================================================================================

// function toCamelCase(str) {
//   return str
//     .split(/[-_]/)
//     .map((word, index) => {
//       if (index === 0) {
//         return word.toLowerCase();
//       } else {
//         return word[0].toUpperCase() + word.slice(1).toLowerCase();
//       }
//     })
//     .join("");
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// =================================================================================

// function toCamelCase(str) {
//   var regExp = /[-_]\w/gi;
//   return str.replace(regExp, function (match) {
//     return match.charAt(1).toUpperCase();
//   });
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// ====================================================================================

// function toCamelCase(str) {
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// ====================================================================================

// function toCamelCase(str) {
//   return str
//     .split(/-|_/g)
//     .map(
//       (w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)
//     )
//     .join("");
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// ====================================================================================

// function toCamelCase(str) {

//   // рішення

// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// ====================================================================================

// function toCamelCase(str) {
//   str = str.split(/[-_]/);
//   for (var i = 1; i < str.length; i++) {
//     str[i] = str[i].charAt(0).toUpperCase().concat(str[i].slice(1));
//   }
//   return str.join("");
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// ====================================================================================

// function toCamelCase(str) {
//   return str
//     .split(/[-_]/)
//     .map(function (entry, index) {
//       return index === 0
//         ? entry
//         : entry.charAt(0).toUpperCase() + entry.slice(1);
//     })
//     .join("");
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// ====================================================================================

// function toCamelCase(str) {
//   return str.replace(/[-_](.)/g, (_, a) => a.toUpperCase());
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// ====================================================================================

// function toCamelCase(str) {
//   return (str = str
//     ? str.replace(/(-|_)\S/g, (a) => a.toUpperCase()).replace(/\s|-|_/g, "")
//     : "");
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// ====================================================================================

// function toCamelCase(str) {
//   return str
//     .split(/-|_/)
//     .map((word, i) => {
//       return i == 0 ? word : word[0].toUpperCase() + word.slice(1);
//     })
//     .join("");
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// ====================================================================================

// function toCamelCase(string) {
//   let uppercase = {
//     A: true,
//     B: true,
//     C: true,
//     D: true,
//     E: true,
//     F: true,
//     G: true,
//     H: true,
//     I: true,
//     J: true,
//     K: true,
//     L: true,
//     M: true,
//     N: true,
//     O: true,
//     P: true,
//     Q: true,
//     R: true,
//     S: true,
//     T: true,
//     U: true,
//     V: true,
//     W: true,
//     X: true,
//     Y: true,
//     Z: true,
//   };

//   let hasSpace = {
//     " ": true,
//     "-": true,
//     _: true,
//   };
//   let results = "";

//   for (let i = 0; i < string.length; i++) {
//     let letter = string[i];
//     if (!hasSpace[letter]) {
//       results += string[i];
//     } else {
//       results += string[i + 1].toUpperCase();
//       i++;
//     }
//   }
//   return results;
// }

// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));

// ========================================================

// function toCamelCase(str) {
//   return str.replace(/[-_]\w/gi, (match) => match.charAt(1).toUpperCase());
// }
// console.log(toCamelCase("the-stealth-warrior"));
// console.log(toCamelCase("The_Stealth_Warrior"));
// console.log(toCamelCase("The_Stealth-Warrior"));
