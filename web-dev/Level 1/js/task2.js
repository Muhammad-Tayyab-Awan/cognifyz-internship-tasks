const changeBtn = document.querySelector(".color-change");
const alert = document.querySelector(".alert");
const greetBtn = document.querySelector(".greet");
const sumBtn = document.querySelector(".sum");
const form = document.querySelector("form");

changeBtn.addEventListener("click", () => {
  const randomColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(
    Math.random() * 255
  )},${Math.floor(Math.random() * 255)})`;
  changeBtn.style.backgroundColor = randomColor;
});

greetBtn.addEventListener("click", () => {
  const hour = new Date().getHours();
  let alertMsg;
  if (hour < 12 && hour > 5) {
    alertMsg = "Hey sir Good morning!";
  } else if (hour >= 12 && hour <= 17) {
    alertMsg = "Hey sir Good afternoon!";
  } else if (hour > 17 && hour <= 21) {
    alertMsg = "Hey sir Good evening!";
  } else {
    alertMsg = "Hey sir Good night!";
  }
  alert.textContent = alertMsg;
  alert.style.top = "2rem";
  setTimeout(() => {
    alert.style.top = "-4rem";
  }, 3000);
});

sumBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const firstNum = parseInt(form["0"].value || 0, 10);
  const secondNum = parseInt(form["1"].value || 0, 10);
  form["2"].value = firstNum + secondNum;
});
