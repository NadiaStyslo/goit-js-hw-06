function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const btnColor = document.querySelector(".change-color");
const spanBtn = document.querySelector(".color");
const bodyColor = document.querySelector("body");

btnColor.addEventListener('click', onBtnClick)
function onBtnClick()  {
  bodyColor.style.backgroundColor = `${getRandomHexColor()}`;
  spanBtn.textContent = `-${getRandomHexColor()}`;
  
}
