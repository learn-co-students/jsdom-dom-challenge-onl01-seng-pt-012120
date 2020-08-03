document.addEventListener('DOMContentLoaded', () =>{

    //h1 element of the page that needs to change every second
    const c = document.getElementById("counter");

    //timer function
    const timer = () => {
        return setInterval(function () {
            let num = parseInt(c.innerHTML);
            num++
            c.innerHTML = num
        }, 1000)
    };
    //function for timer ** did not work had to put the function actually in the call for seInterval
    let counterIncrease = () => {
        let num = parseInt(c.innerHTML);
        num++
        c.innerHTML = num
    };
    // to interact with the timer and start the timer
    let interval = timer();
    // timer has started running this is for toggling the pause button currently the timer is 'running' 
    // allow for a true~false question to determine what to do with the timer if run pause other wise run
    let timing = !0;
    
    
    // plus button
    const plus = document.getElementById("plus");
    // plus event listener kept code from timer works here
    plus.addEventListener('click', counterIncrease);

    
    // minus button
    const minus = document.getElementById("minus");
    //event listener for the minus button
    minus.addEventListener('click', (e)=>{
        let num = parseInt(c.innerHTML);
        if (num>0) {
            num--
        }
        c.innerHTML = num
    });


    // heart button
    const heart = document.getElementById("heart");
    // list element for listing likes
    const likesList = document.querySelector('.likes')
    // need to check the list to see if there is a ??? to determine if the # has already been liked
    //if already liked then take the number of likes and increase it by one
    //else create a new element in the array of likes

    heart.addEventListener('click', (e)=>{
        let likedNum = parseInt(c.innerHTML);
        if(ll = document.getElementById(likedNum)){
            let span = ll.getElementsByTagName('span')[0];
            let currentLikeCount = parseInt(span.innerHTML) + 1;
            ll.querySelector("span").innerText = currentLikeCount;
        } else {
            let ll = document.createElement('li');
            ll.id = likedNum;
            ll.innerText = likedNum + ' has been liked ';
            ll.innerHTML += '<span> 1</span> time';
            likesList.appendChild(ll);
        }
    });


    // pause button
    const pause = document.getElementById("pause");
   // if timer is on then need to change it to off stop the timer element from running and change the web page elements to not be working
   //else if timer is not running need to mark as running restart the timer and unblock elements of the webpage 
   pause.addEventListener('click', (e) => {
       if (timing){ 
           timing=!1;
           clearInterval(interval);
           pause.innerText='resume'; 
        }else{ 
            timing=!0;
            interval = timer();
            pause.innerText='pause';
        };
        let buttons = document.getElementsByTagName('button');
        buttons.heart.disabled = !timing;
        buttons.minus.disabled = !timing;
        buttons.plus.disabled = !timing;
    });


    // comment form
    const cf = document.getElementById("comment-form")
    // comment field that contains the text of the comment
    const comment = document.getElementById("comment-input")
    // comment list element 
    const comList = document.getElementsByClassName('comments')
    // on submit need to 
    // ignore submit button default action
    // add comment to the comment list
    // clear comment form
    cf.addEventListener('submit',
    function (e){
        e.preventDefault();
        let newComment = document.createElement('li');
        newComment.innerText = comment.innerText;
        comList.appendChild(newComment);
        e.target.reset();
    })

});