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

let timeStamp;
let likeCount = 0;
let counterStatus = 1;

let intervalID;

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

function like() {
  currentCounter = counter.innerText
  let newLike = document.createElement('li')

  if (likeCount > 0 && currentCounter == counter.innerText) {
    likeCount++
  } else {
    newLike.innerText = `${currentCounter} has been like ${likeCount} times`
    likesList.appendChild(newLike)
    likeCount = 0
  }

  // 1. hit the like button
  // 2. if i hit the like button more than once during interval
  //      (how to tell i'm in an interval)
  // 3. increment the likes
  // 4. once clock changes : append like to ul
}

document.addEventListener("DOMContentLoaded", function() {
  intervalID = window.setInterval(incrementCounter, 1000);
});

plus.addEventListener('click', incrementCounter)
minus.addEventListener('click', decrementCounter)
pauseButton.addEventListener('click', toggleCounter)
heart.addEventListener('click', function() {
  like()
})
submit.addEventListener('click', function(event) {
  event.preventDefault()
  postComment()
})

// <li> 12 has been liked 3 times </li>