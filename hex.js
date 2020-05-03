/** @format */
//const hex = ["red", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
//
//const btn = document.getElementById("btn");
//const color = document.querySelector(".color");
//
//btn.addEventListener("click", () => {
//  let hexColor = "#";
//
//  for (let i = 0; i < 6; i++) {
//    console.log(hex[getRandomNumber()]);
//    hexColor += hex[getRandomNumber()];
//  }
//
//  color.textContent = hexColor;
//  document.body.style.backgroundColor = hexColor;
//});
//
//function getRandomNumber() {
//  return Math.floor(Math.random() * hex.length);
//}
//

const hex = ["red", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  let hash = "#";

  for (let i = 0; i < 6; i++) {
    hash += hex[getColor()];
  }
  document.body.style.backgroundColor = hash;
  color.textContent = hash;
});

function getColor() {
  return Math.floor(Math.random() * hex.length);
}
