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
const title = document.querySelector(".js-title");

title.addEventListener("click", onclick);

function onClick(evt) {
  console.log(evt.currentTarget);
  const str = title.textContent.slice(0, 13);
  const remainder = title.textContent.slice(13);
  console.log(remainder);
}

// const str = title.textContent.slice(0, 13);
// const remainder = title.textContent.slice(13);
// console.log(remainder);
