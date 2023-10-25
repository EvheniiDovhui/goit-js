// написати функцію яка приймає параметр з рядком і перетворює цей рядок в наступний вид
// "Привіт світ"   => "прИвІт cвІт"

// function stringChenger(str) {
//   let result = "";
//   let letters = ["а", "е", "є", "и", "і", "ї", "о", "у", "ю", "я"];
//   for (let i = 0; i < str.length; i += 1) {
//     if (letters.includes(str[i].toLowerCase())) {
//       result = result + str[i].toUpperCase();
//     } else {
//       result = result + str[i].toLowerCase();
//     }
//   }
//   return result;
// }

// console.log(stringChenger("Привіт світ"));
// console.log(stringChenger("Абетка смаку"));

// написати функцію яка приймає параметр з рядком і видаляє всі повторюючи слова поспіль
// "Привіт світ світ світ Привіт Привіт світ світ" => "Привіт світ Привіт світ"

// function removeWord(str) {
//   let result = [];
//   let arr = str.split(" ");
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== arr[i + 1]) {
//       result.push(arr[i]);
//     }
//   }
//   return result.join(" ");
// }
// console.log(removeWord("Привіт світ світ світ Привіт Привіт світ світ"));

// function removeConsecutiveDuplicates(inputString) {
//   const words = inputString.split(" "); // Розбиваємо рядок на масив слів
//   const result = [];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i] !== words[i + 1]) {
//       // Якщо поточне слово не дорівнює наступному слову
//       result.push(words[i]); // Додаємо поточне слово до результату
//     }
//   }

//   return result.join(" "); // З'єднуємо слова назад у рядок і повертаємо результат
// }

// const inputString = "Привіт світ світ світ Привіт Привіт світ світ";
// const result = removeConsecutiveDuplicates(inputString);
// console.log(result); // Виведе "Привіт світ Привіт світ"
// знайти суму элементів
// function sumObject(obj) {
//   let total = 0;

//   for (let key in obj) {
//     if (typeof obj[key] === "object") {
//       total += sumObject(obj[key]);
//     } else {
//       total += obj[key];
//     }
//   }

//   return total;
// }

// let obj = {
//   1: {
//     1: {
//       1: 111,
//       2: 112,
//       3: 113,
//     },
//     2: {
//       1: 121,
//       2: 122,
//       3: 123,
//     },
//   },
//   2: {
//     1: {
//       1: 211,
//       2: 212,
//       3: 213,
//     },
//     2: {
//       1: 221,
//       2: 222,
//       3: 223,
//     },
//   },
//   3: {
//     1: {
//       1: 311,
//       2: 312,
//       3: 313,
//     },
//     2: {
//       1: 321,
//       2: 322,
//       3: 323,
//     },
//   },
// };
// let result = sumObject(obj);
// console.log(result);
