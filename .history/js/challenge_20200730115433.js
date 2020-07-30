document.addEventListener('DOMContentLoaded', () =>{

    //h1 element of the page that needs to change every second
    const c = document.getElementById("counter");

    //timer function
    const timer = () => {
        return setInterval(function () {
            let num = parseInt(c.innerHTML);
            num++
            c.innerHTML = num
        }, 1e3)
    };
    //function for timer ** did not work had to put the function actually in the call for seInterval
    let counterIncrease = () => {
        let num = parseInt(c.innerHTML);
        num++
        c.innerHTML = num
    };
    // to interact with the timer and start the timer
    const interval = timer();
    // timer has started running this is for toggling the pause button currently the timer is 'running' 
    // allow for a true~false question to determine what to do with the timer if run pause other wise run
    const timing = true;
    
    
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
    const likesList = document.getElementsByClassName('likes')
    // need to check the list to see if there is a ??? to determine if the # has already been liked
    //if already liked then take the number of likes and increase it by one
    //else create a new element in the array of likes

    heart.addEventListener('click', (e)=>{
        let likedNum = parseInt(c.innerHTML);
        let ll = document.getElementById(likedNum);
        if(ll){
            debugger;
        } else {
            let ll = document.createElement('li');
            ll.id = likedNum;
            ll.innerText = "${likedNum} has<span> 1 </span> likes.";
            likesList.appendChild(ll);
        }
    })
    document

    // pause button
    const pause = document.getElementById("pause");
   // if timer is on then need to change it to off stop the timer element from running and change the web page elements to not be working
   //else if timer is not running need to mark as running restart the timer and unblock elements of the webpage 
    
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


});