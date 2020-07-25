// const counter = document.getElementById("counter")
// const minus = document.getElementById("-")
// const plus = document.getElementById("+")
// const like = document.getElementById("<3")
// const pause = document.getElementById("pause")
// const comments = document.getElementById("list")
// const form = document.getElementById("comment-form")
// const likes = {}

let counter = 0;
let numbersLiked = {};
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
let heart = document.getElementById("heart");
let timerCounter = document.getElementById("counter");
let pause = document.getElementById("pause");
let timer;

const displayCounter = () => {
  document.getElementById("counter").innerText = counter;
};
// const plusButton=() =>{
//     document.getElementById("plus").innerText
// }

document.addEventListener("DOMContentLoaded", () => {
  timer = window.setInterval(function () {
    /// call your function here
    displayCounter();
    counter++;
  }, 1000);

  minus.addEventListener("click", function (e) {
    counter--;
    console.log("minus-clicked");
  });

  plus.addEventListener("click", function (e) {
    counter++;
    console.log("plus-clicked");
  });

  heart.addEventListener("click", function (e) {
    console.log(timerCounter.innerText, " first click");

    const key = parseInt(timerCounter.innerText);
    console.log(key, " populated key ");
    if (numbersLiked[key]) {
      numbersLiked[key] += 1;
    } else {
      numbersLiked[key] = 1;
    }
    console.log(numbersLiked, "checking if statement");
    const ul = document.querySelector("ul");

    if (document.getElementById(`like-${key}`)) {
      document.getElementById(
        `like-${key}`
      ).innerText = `${key} has ${numbersLiked[key]} liked`;
    } else {
      let li = document.createElement("li");
      li.setAttribute("id", `like-${key}`);
      li.innerText = `${key} has ${numbersLiked[key]} likes`;

      ul.appendChild(li);
    }

    console.log("heart-clicked");
  });

  pause.addEventListener("click", function (e) {
    //stop the dispaly counter from adding a second
    // if the
    if (pause.innerText === "pause") {
      console.log(timer, "timer reached")
      clearInterval(timer);
      pause.innerText = "resume";
    } else {
      timer = window.setInterval(function () {
        /// call your function here
        displayCounter();
        counter++;
      }, 1000);
      pause.innerText = "pause";
    }

    console.log("pause-clicked");
  });
});
