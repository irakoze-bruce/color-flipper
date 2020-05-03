/** @format */

const colors = ["red", "green", "yellow", "blue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", () => {
  let randomColor = getRondom();
  document.body.style.backgroundColor = colors[randomColor];
  color.textContent = colors[randomColor];
});
function getRondom() {
  return Math.floor(Math.random() * colors.length);
}
