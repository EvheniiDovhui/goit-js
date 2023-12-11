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
//   const words = inputString.split(" ");
//   const result = [];

//   for (let i = 0; i < words.length; i++) {
//     if (words[i] !== words[i + 1]) {
//
//       result.push(words[i]);
//     }
//   }

//   return result.join(" ");
// }

// const inputString = "Привіт світ світ світ Привіт Привіт світ світ";
// const result = removeConsecutiveDuplicates(inputString);
// console.log(result);
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

// const title = document.querySelector(".js-title");

// console.dir(title.textContent);
// title.textContent = "Привіт всім";
// console.dir(title.textContent);
// console.dir(title);

// ClassList
// title.classList.add(`title-color`);
// title.classList.remove(`title-color`);
// title.classList.toggle(`title-color`);

// title.style.fontSize = "50px";
// title.style.color = "green";
// title.hidden = false;

// console.dir(title.getAttribute("data-id"));
// title.removeAttribute("hidden");
// title.setAttribute('hidden', "false")
// const cars = [];

// const list = document.querySelector(".js-list");
// console.dir(list.children);
// console.log([...list.children]);

// const li = document.createElement("li");
// li.textContent = list.children.length + 1;
// li.classList.add("title-color");
// // list.append(li);
// const div = document.createElement("div");
// const h2 = document.createElement("h2");
// h2.textContent = "Hello";
// li.append(div);
// div.append(h2);
// list.append(li);
// console.log(li);

// const li = `<li class="title-color">${
//   list.children.length + 1
// }</li> <div><h2>Hello</h2></div>`;
// list.insertAdjacentHTML("beforeend", li);

// const listStatic = document.querySelectorAll("li");
// const listDynamics = document.getElementsByTagName("li");
// const list = document.querySelector(".js-list");
// // console.log(listStatic);
// // console.log(listDynamics);
// const li = document.createElement("li");
// li.textContent = list.children.length + 1;
// list.append(li);
// console.log(listStatic);
// console.log(listDynamics);
// const cars = [
//   {
//     model: "Honda",
//     type: "Civic",
//     prise: 12000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg",
//   },
//   {
//     model: "Audi",
//     type: "Q7",
//     prise: 40000,
//     img: "https://auto-dvig.com/wp-content/uploads/2022/06/img_7273.webp",
//   },
//   {
//     model: "BMW",
//     type: "5 siries",
//     prise: 9000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/5/52/BMW_G30_FL_IMG_5351.jpg",
//   },
//   {
//     model: "Honda",
//     type: "Accord",
//     prise: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2018_Honda_Accord_12.17.17.jpg/800px-2018_Honda_Accord_12.17.17.jpg",
//   },
//   {
//     model: "Volvo",
//     type: "XC60",
//     prise: 7000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/2018_Volvo_XC60_R-Design_D5_P-Pulse_2.0_Front.jpg/1200px-2018_Volvo_XC60_R-Design_D5_P-Pulse_2.0_Front.jpg",
//   },
//   {
//     id: 4,
//     model: "Honda",
//     type: "Accord",
//     prise: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2018_Honda_Accord_12.17.17.jpg/800px-2018_Honda_Accord_12.17.17.jpg",
//   },
// ];
// const container = document.querySelector(".js-container");
// const markup = cars
//   .map(
//     ({ id = "none", model, type, prise, img }) => `<li data-id="${id}">
//         <img src="${img}" alt="${model}" class="img">
//         <h2>Марка - ${model}</h2>
//         <h3>Модель - ${type}</h3>
//         <p>Ціна - ${prise}</p>
//       </li>`
//   )
//   .join("");
// container.insertAdjacentHTML("beforeend", markup);
// // console.dir(markup);
// const containerAfter = document.querySelector(".js-container");
// // console.dir(containerAfter);
// [...containerAfter.children].forEach((item) => {
//   if (item.dataset.id !== "none") {
//     item.remove();
//   }
// });
// containerAfter.innerHTML = "";
// console.log("hello");
// const button = document.querySelector(".js-click");
// const container = document.querySelector(".js-container");
// button.addEventListener("click", onclick);
// let step = 0;
// function onclick(evt) {
//   step += 5;
//   container.style.marginLeft = `${step}px`;
//   container.style.marginTop = `${step}px`;
//   console.log(evt.currentTarget);
// }
// console.dir(button);
// const title = document.querySelector(".js-title");
// const title1 = document.querySelector(".js-title1");
// const title2 = document.querySelector(".js-title2");

// const maxLength = 13;
// const totalLength = maxLength + 3;
// let remainder = "";
// title.addEventListener("click", onClick);
// title1.addEventListener("click", onClick);
// title2.addEventListener("click", onClick);

// function onClick(evt) {
//   const title = evt.currentTarget;
//   const str = title.textContent.slice(0, maxLength);

//   if (title.textContent.length > totalLength) {
//     let remainder = title.textContent.slice(maxLength);
//     title.setAttribute("data-title", remainder);
//     title.textContent = str + "...";
//   } else {
//     let remainder = title.dataset.title;
//     title.textContent = str + remainder;
//   }

//   console.log(remainder);
// }
// const str = title.textContent.slice(0, 13);
// const remainder = title.textContent.slice(13);
// console.log(remainder);

// const userName = document.querySelector(".js-input");
// userName.addEventListener("change", onInput);
// // userName.addEventListener("input", onInput);

// function onInput(evt) {
//   console.dir(evt.currentTarget.value);
// }

// const formEl = document.querySelector(".js-form");
// formEl.addEventListener("submit", onSubmit);
// function onSubmit(evt) {
//   evt.preventDefault();
//   const { userName, userEmail, userAge } = evt.currentTarget.elements;
//   // console.log(userName.value);
//   // console.log(userEmail.value);
//   // console.log(userAge.value);
//   const data = {
//     name: userName.value,
//     email: userEmail.value,
//     age: userAge.value,
//   };
//   console.log(data);
// }

// const container = document.querySelector(".js-container");
// document.addEventListener("keydown", onKey);
// // document.addEventListener("keyup", onKey);
// // document.addEventListener("keypress", onKey);

// function onKey(evt) {
//   console.log(evt);
//   // if (evt.code === "Escape" || evt.code === "Enter") {
//   //   container.classList.toggle("tog");
//   // }
//   // console.log(evt);

//   if (evt.ctrlKey && evt.code === "KeyC") {
//     // evt.preventDefault(); // блок копіювання
//     alert("Copy?");
//     return;
//   }
// }

// const cars = [
//   {
//     id: 1,
//     car: "Honda",
//     type: "Civic",
//     prise: 12000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/2/23/2022_Honda_Civic_LX_Sedan%2C_front_right%2C_11-02-2022.jpg",
//   },
//   {
//     id: 2,
//     car: "Audi",
//     type: "Q7",
//     prise: 40000,
//     img: "https://auto-dvig.com/wp-content/uploads/2022/06/img_7273.webp",
//   },
//   {
//     id: 3,
//     car: "BMW",
//     type: "5 siries",
//     prise: 9000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/5/52/BMW_G30_FL_IMG_5351.jpg",
//   },
//   {
//     id: 4,
//     car: "Honda",
//     type: "Accord",
//     prise: 20000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/2018_Honda_Accord_12.17.17.jpg/800px-2018_Honda_Accord_12.17.17.jpg",
//   },
//   {
//     id: 5,
//     car: "Volvo",
//     type: "XC60",
//     prise: 7000,
//     img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/2018_Volvo_XC60_R-Design_D5_P-Pulse_2.0_Front.jpg/1200px-2018_Volvo_XC60_R-Design_D5_P-Pulse_2.0_Front.jpg",
//   },
// ];

// const list = document.querySelector(".js-list");
// const favoriteList = document.querySelector(".js-favorite-list");
// const form = document.querySelector(".js-search-form");
// form.addEventListener("submit", onSearch);
// list.addEventListener("click", onClick);
// function createMarkup(arr) {
//   return arr
//     .map(
//       ({ id, car, type, prise, img }) => `
//       <li data-id="${id}">
//         <img src="${img}" alt="${car}" width="300px"/>
//         <div class="js-favorite favorite">♥</div>
//         <h2>${car}</h2>
//         <h3>${type}</h3>
//         <p>${prise}</p>
//       </li>`
//     )
//     .join("");
// }

// list.insertAdjacentHTML("beforeend", createMarkup(cars));
// // console.log(markup);

// function onSearch(evt) {
//   evt.preventDefault();
//   const form = evt.currentTarget;
//   const { query, select } = form.elements;
//   const searchCars = cars.filter(
//     (item) =>
//       item[select.value].toLowerCase() === query.value.trim().toLowerCase()
//   );
//   list.innerHTML = createMarkup(searchCars);
//   console.log(searchCars);
//   // console.dir(query.value);
//   // console.dir(select.value);
// }

// function onClick(evt) {
//   // console.log(evt.currentTarget);
//   // console.log(evt.target);
//   if (evt.target.classList.contains("js-favorite")) {
//     evt.target.classList.add("favorite-active");
//     // console.log(evt.target);
//     const { id } = evt.target.closest("li").dataset;
//     // console.log(id);

//     const { car, type } = cars.find(({ id: carId }) => carId === Number(id));
//     addFavorite(`${car} ${type}`);
//     // console.log(currentCar);
//   }
// }
// function addFavorite(currentCar) {
//   favoriteList.insertAdjacentHTML("beforeend", `<li>${currentCar}</li >`);
// }

// const list = document.querySelector("#categories");
// [...list.children].forEach((item) => {
//   console.log(item.firstElementChild);
//   console.log(item.lastElementChild);
// });

// const allCategories = document.getElementById("categories").children.length;
// console.log(`Number of categories: ${allCategories}`);

// const titlesCategories = document.querySelectorAll("h2");
// titlesCategories.forEach((title) => {
//   console.log("Category:", title.textContent);
//   console.log("Elements:", title.nextElementSibling.children.length);
// });

// const button = document.querySelector(".change-color");
// const colorSpan = document.querySelector(".color");

// button.addEventListener("click", () => {
//   const randomColor = getRandomHexColor();
//   document.body.style.backgroundColor = randomColor;
//   colorSpan.textContent = randomColor;
// });

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, "0")}`;
// }
// // Функція, яка клікає на кнопку
// function clickButton() {
//   button.click();
// }

// Встановлення інтервалу для виклику функції
// setInterval(clickButton, 5000);

// const container = document.querySelector(".js-container");
// [...container.children].forEach((item) =>
//   item.addEventListener("click", onClick)
// );
// function onClick(evt) {
//   console.log(evt.currentTarget.dataset.color);
//   console.log(evt);
// }

// const container = document.querySelector(".js-container");
// container.addEventListener("click", onClick);
// function onClick(evt) {
//   //   console.log(evt.currentTarget.dataset.color);
//   if (!evt.target.classList.contains("js-box")) {
//     return;
//   }
//   //   console.log(evt.currentTarget);
//   console.log(evt.target.dataset.color);
// }

/*
Завдання 2
Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.
*/
// function swapValues() {
//   // Отримати значення лівого та правого інпутів
//   const leftValue = document.getElementById("leftSwapInput").value;
//   const rightValue = document.getElementById("rightSwapInput").value;

//   // Обміняти значення
//   document.getElementById("leftSwapInput").value = rightValue;
//   document.getElementById("rightSwapInput").value = leftValue;
// }

const container = document.querySelector(".js-content");
const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
let player = "X";
let historyX = [];
let historyO = [];
function createMarkup() {
  let markup = "";

  for (let i = 1; i < 10; i += 1) {
    markup += `<div class="item js-item" data-id="${i}"></div>`;
  }
  container.innerHTML = markup;
}
createMarkup();
container.addEventListener("click", onClick);

function onClick(evt) {
  const { target } = evt;
  if (!target.classList.contains("js-item") || target.textContent) {
    return;
  }

  const id = Number(target.dataset.id);
  let result = false;
  if (player === "X") {
    historyX.push(id);
    result = checkWin(historyX);
  } else {
    historyO.push(id);
    result = checkWin(historyO);
  }
  target.textContent = player;
  if (result) {
    console.log(`Winner ${player} 😎`);
    resetGame();
    return;
  } else if (historyX.length + historyO.length === 9) {
    console.log(`Draw 😕`);
    resetGame();
    return;
  }

  player = player === "X" ? "O" : "X";
}

function checkWin(arr) {
  return wins.some((item) => item.every((id) => arr.includes(id)));
}
function resetGame() {
  createMarkup();
  historyX = [];
  historyY = [];
  player = "X";
}