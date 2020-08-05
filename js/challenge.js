document.addEventListener("DOMContentLoaded", () => {

  // gets counter element
  let counter = document.getElementById("counter")

  // increments the counter once per second
  let count = setInterval(function() {
      counter.innerText++;
  }, 1000);

  // get minus element
  let minus = document.getElementById("minus");
  // set minus button to decrement the counter upon click event
  minus.addEventListener("click", function() {
      counter.innerText--;
  });

  // get plus element
  let plus = document.getElementById("plus");
  // set plus button to increment the counter upon click event
  plus.addEventListener("click", function() {
      counter.innerText++;
  });

  // get heart button
  let heart = document.getElementById("heart");
  let arr = [];
  let clickCount = 0;
  //add listen event for clicking heart button
  heart.addEventListener("click", function() {
      let li = document.createElement("li");
      let likedNumber = counter.innerText;
      if (arr.includes(likedNumber)) {
          clickCount+=1;
          li.innerText = `${likedNumber} is liked ${clickCount} times`;
      } else {
          arr.push(likedNumber);
          clickCount = 1;
          li.innerText = `${likedNumber} is liked ${clickCount} time`;
      }
      // console.log(clickCount);
      likes[0].appendChild(li);
  });
  

  // get likes ul element
  let likes = document.getElementsByClassName("likes");

  // get pause button
  let pause = document.getElementById("pause");
  // add listen event for clicking pause button
  pause.addEventListener("click", function() {
      if (pause.innerText === "pause") {
          clearInterval(count);
          pause.innerText = "resume";

          minus.disabled = true;
          plus.disabled = true;
          heart.disabled = true;
          submit.disabled = true;
      } else {
          count = setInterval(function() {
              counter.innerText++;
              }, 1000);
          pause.innerText = "pause";
          minus.disabled = false;
          plus.disabled = false;
          heart.disabled = false;
      }
  });

  // get comment input field
  let comment = document.getElementById("comment-input");
  //get submit button
  let submit = document.getElementById("submit");
  // get comments div
  let commentsArea = document.getElementById("list");

  // add listen event for comment submit button
  submit.addEventListener("click", function(e) {
      e.preventDefault();
      let pTag = document.createElement("P");
      console.log(comment.value);
      pTag.innerText = comment.value;
      commentsArea.appendChild(pTag);
      comment.value = "";
  })



});