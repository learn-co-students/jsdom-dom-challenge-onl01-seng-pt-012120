const minusButton = document.querySelector('button#minus');
const plusButton = document.querySelector('button#plus');
const heartButton = document.querySelector('button#heart');
const pauseButton  = document.querySelector('button#pause');
let number = 0;


let myTimer = setInterval(function() {
  incrementNumber();
  document.querySelector('h1#counter').innerHTML = number;
}, 1000);




function buttonDisable (){
  minusButton.disabled = true;
  heartButton.disabled = true;
  plusButton.disabled = true;
}

function buttonEnable () {
  minusButton.disabled = false;
  heartButton.disabled = false;
  plusButton.disabled = false;
}

function incrementNumber(){
  number = number + 1;
}

function decreaseNumber(){
  if (number > 0){
    number = number - 1;
  }
}




document.querySelector("#comment-form").addEventListener("submit", function(event) {
  let inputValue = document.getElementById("comment-input").value;
         document.getElementById("list").innerHTML += ("</br>" + inputValue + "</br>");
         event.preventDefault();
}, false);

document.querySelector("#pause").addEventListener("click", function(event) {
  console.log("here");
  if (minusButton.disabled == true){
    buttonEnable();
  } else
  buttonDisable();
}, false);

document.querySelector("#plus").addEventListener("click", function(event) {

 incrementNumber();
}, false);

document.querySelector("#minus").addEventListener("click", function(event) {

 decreaseNumber();
}, false);

document.querySelector("#heart").addEventListener("click", function(event) {

  let inputValue = document.getElementById("counter").value;
  document.getElementsByClassName("likes").innerHTML += ("</br>" + inputValue + "Hello</br>");
}, false);

//will add more functionality later. 
