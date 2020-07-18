// DECLARATIONS + ASSIGNMENTS =========================
const counter = document.getElementById('counter');
const pauseButton = document.getElementById('pause');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const heart = document.getElementById('heart');
const plusMinusHeart = [plus, minus, heart];
const submit = document.getElementById('submit');
const commentField = document.getElementById('comment-input');
const commentDiv = document.getElementById('list');
const likesList = document.getElementsByClassName('likes')[0];

// let timestamp;
// let likeCount = 0;
let counterStatus = 1;

let intervalID;

// FUNCTIONS =========================

function incrementCounter() {
  let seconds = Number(counter.innerText)
  seconds++
  counter.innerText = seconds
}

function decrementCounter() {
  let seconds = Number(counter.innerText)
  if (seconds > 0) {
    seconds--
    counter.innerText = seconds
  }
} 

function resumeCounter() {
  enableButtons()
  counterStatus = 1
  intervalID = window.setInterval(incrementCounter, 1000);
  pauseButton.innerText = 'pause'
}

function pauseCounter() {
  disableButtons()
  counterStatus = 0
  window.clearInterval(intervalID)
  pauseButton.innerText = 'resume'
}

function toggleCounter() {
  if (counterStatus === 1) {
    pauseCounter()
  } else {
    resumeCounter()
  }
}

function disableButtons() {
  for (let i = 0; i < plusMinusHeart.length; i++) {
    plusMinusHeart[i].disabled = true
  }
}

function enableButtons() {
  for (let i = 0; i < plusMinusHeart.length; i++) {
    plusMinusHeart[i].disabled = false
  }
}

function postComment() {
  if (commentField.value != "") {
    let newComment = document.createElement("p")

    newComment.innerText = commentField.value
    commentDiv.appendChild(newComment)

    commentField.value = ""
  } else {
    alert("Comment can't be blank.")
  }
}

function like(timestamp) {
  // likeCount = 1
  if (document.getElementById(timestamp)) {
    num = Number(document.getElementById(timestamp).innerText.split(" ")[4])
    num++
    newString = `${timestamp} has been liked ${num} times`
    document.getElementById(timestamp).innerText = newString
  } else {
    let newLike = document.createElement('li')
    newLike.id = timestamp
    newLike.innerText = `${timestamp} has been liked 1 time`
    likesList.appendChild(newLike)
  }
  
  

  // 1. hit the like button
  // 2. if i hit the like button more than once during interval
  //      (how to tell i'm in an interval)
  // 3. increment the likes
  // 4. once clock changes : append like to ul
}

// EVENT LISTENERS =========================

document.addEventListener("DOMContentLoaded", function() {
  intervalID = window.setInterval(incrementCounter, 1000);
});

plus.addEventListener('click', incrementCounter)
minus.addEventListener('click', decrementCounter)
pauseButton.addEventListener('click', toggleCounter)
heart.addEventListener('click', function() {
  // timestamp = counter.innerText
  like(counter.innerText)
})
submit.addEventListener('click', function(event) {
  event.preventDefault()
  postComment()
})

