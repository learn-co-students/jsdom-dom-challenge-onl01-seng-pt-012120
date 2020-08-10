document.addEventListener("DOMContentLoaded", () => {  
  let count = document.getElementById('counter');
  let plus = document.getElementById('plus');
  let minus = document.getElementById('minus');
  let heart = document.getElementById('heart');
  let pause = document.getElementById('pause');
  let submit = document.getElementById('submit');
  let comments = document.getElementById('list');
  let form = document.getElementsByTagName('input')[0]
  startCount();

  function disableButtons(){
    minus.disabled = true;
    plus.disabled = true;
    heart.disabled = true;
  }

  function enableButtons(){
    minus.disabled = false;
    plus.disabled = false;
    heart.disabled = false;
  }

  
  let seconds = 0;
  function startCount() {
    let counting = true;
    let intervalID = setInterval(myTimer, 1000)
   
  function myTimer() {
      seconds +=1;
      count.innerText = seconds;
  }
  pause.addEventListener('click', function (){
    counting = !counting;
    if (counting == false){
      clearInterval(intervalID);
      pause.innerText = 'resume', disableButtons();
    }else{
      pause.innerText = 'pause';
      startCount();
      enableButtons();
    }
  })
  }

  plus.addEventListener('click', function () {
    seconds +=1;
    count.innerText = seconds;
  })

  minus.addEventListener('click', function () {
    seconds -=1;
    count.innerText = seconds;
  })

  function getOccurrence(array, value){
    let countLikes = 0;
    array.forEach((v) => (v === value && countLikes++));
    return countLikes;
  }
  
    let arr = [];

  heart.addEventListener('click', function(){
    arr.push(seconds)
    let likes = getOccurrence(arr, seconds)
    let like = document.getElementsByClassName('likes')
    let li = document.createElement('li')
    li.innerText = `${seconds} has been liked ${likes} times`;
    like[0].appendChild(li);
  })

  submit.addEventListener('click', function(){
    event.preventDefault();
    const comment = document.createElement('p');
    let inputInfo = document.createTextNode(`${form.value}`)
    comment.appendChild(inputInfo);
    comments.appendChild(comment);
    form.value = ''; 
})
})