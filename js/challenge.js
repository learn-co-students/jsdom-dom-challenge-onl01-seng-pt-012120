let count = 0;
let time = document.getElementById('counter');

    function timer() {
        count++
        time.innerHTML = count;
    
    }

document.addEventListener("DOMContentLoaded", () => {

    const counter = setInterval(timer, 1000);
    document.getElementById('minus').addEventListener("click", function(e){
       count--
       time.innerHTML = count;

    })

    document.getElementById('plus').addEventListener("click", function(e){
        count++
        time.innerHTML = count;

    })

    document.getElementById('heart').addEventListener("click", function(e){
        
        let existingLikes = document.getElementsByClassName("likes");
        let hearts = existingLikes[0].querySelectorAll('li');
        let i = 0;
        for (i = 0; i < hearts.length; ++i){

            if (hearts[i].innerHTML.includes(count)){
                let numLikes = parseInt(hearts[i].getElementsByTagName("span")[0].innerText, 10) +1;
                hearts[i].innerHTML = `${count} has been liked <span>${numLikes}</span> times`;
                return;
            }  

        }
       
        let liked = document.createElement("LI");
        let content = document.createTextNode;
        liked.innerHTML = (`${count} has been liked <span>1</span> time`);
        existingLikes[0].appendChild(liked);


    })

    document.getElementById('pause').addEventListener("click", function(e){
        clearInterval(counter);
        document.getElementById('pause').innerHTML = "Reset"


    })


    


})