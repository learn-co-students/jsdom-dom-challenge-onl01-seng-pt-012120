document.addEventListener("DOMContentLoaded", () => {
    // sets seconds to zero;
    let seconds = 0;
    // implements function to increment counter by seconds:
    let counter = setInterval(incrementSeconds, 1000);
    

// function that will retrieve counter element
// add 1 second to variable
// sets the intertext in counter element to variable
    function incrementSeconds() {
        
        const domcounter =  document.getElementById("counter")
        seconds += 1;
        domcounter.innerText = seconds;
    }

// ______________________________________________________________________________
// function that will retrieve counter element
// subtracts 1 second to variable
// sets the intertext in counter element to variable
    function decrementSeconds() {
        const countdown =  document.getElementById("counter")
        seconds -= 1;
        countdown.innerText = seconds;
    }

// sets and retrieves a new element called minus
// turns minus element to a click event and implements decrementSeconds function
// this will allow user to click on minus event "-" and it will subract a second
    let minus = document.getElementById("minus");
    minus.addEventListener('click', () => {
        decrementSeconds()
    })
// _______________________________________________________________________________

// _______________________________________________________________________________
// function that will retrieve counter element
// add 1 second to variable
// sets the intertext in counter element to variable
    function addSeconds() {
        const countup =  document.getElementById("counter")
        seconds += 1;
        countup.innerText = seconds;
    }

// sets and retrieves a new element called plus
// turns plus element to a click event and implements addSeconds function
// this will allow user to click on minus event "-" and it will add a second
    let plus = document.getElementById("plus");
    plus.addEventListener('click', () => {
       addSeconds()
    })
// ________________________________________________________________________________________

    let heart = document.getElementById("heart")
    const likes = document.getElementsByClassName('likes')[0]

    heart.addEventListener("click", function() {
        const likesList = document.createElement("li");
        let likeTracker = document.createTextNode(`${counter.innerHTML} has been liked 1 times.`)
        likesList.appendChild(likeTracker);
        heart.appendChild(likesList);
      });

      const commentForm = document.getElementsByTagName('input')[0]
      const comments = document.getElementById('list')
      const submit = document.getElementById('submit')
   
      submit.addEventListener("click", function() {
        event.preventDefault();
        const newComment = document.createElement("p");
        let commentInfo = document.createTextNode(`${commentForm.value}`);
        newComment.appendChild(commentInfo);
        comments.appendChild(newComment);
        commentForm.value ='';
      });
   

// pauses timer when button is clicked and can resume count
    pause.addEventListener("click", (e) => {
        if (pause.innerText === "pause"){
            pause.innerText = "resume"
            // stops time
            clearInterval(counter)
            // prevents user from clicking buttons
            plus.disabled = true;
            minus.disabled = true;
            heart.disabled = true;
            submit.disabled = true;
            commentForm.disabled = true;
            // submitButton.disabled = true
        }
        else {
            counter = setInterval(incrementSeconds, 1000);
            pause.innerText = "pause"

            plus.disabled = false;
            minus.disabled = false;
            heart.disabled = false;
            submit.disabled = false;
            commentForm.disabled = false;
            // submitButton.disabled = false
        }
    })

})

