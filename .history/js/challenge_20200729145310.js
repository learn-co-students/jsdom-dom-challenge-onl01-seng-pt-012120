document.addEventListener('DOMContentLoaded', () =>{
    // items on the page that I will be interacting with
    const c = document.getElementById("counter");
    const plus = document.getElementById("plus");
    const minus = document.getElementById("minus");
    const heart = document.getElementById("heart");
    const pause = document.getElementById("pause");
    const cf = document.getElementById("comment-form")
    const comment = document.getElementById("comment-input")
    const likesList = document.getElementsByClassName('likes')

    // Must increase and decrease counter with plus and minus presses should use an event listener for each of these items
    minus.addEventListener('click', (e)=>{
        let num = parseInt(c.innerHTML);
        if (num>0) {
            num--
        }
        c.innerHTML = num
    });

    plus.addEventListener('click', (e) => {
        let num = parseInt(c.innerHTML);
        num++
        c.innerHTML = num
    });

    // next need to add a comment for the heart click on the number 
    // every time it clicks on that number it changes the number of clicks in that sentence
    heart.addEventListener('click', (e)=>{
        
        

    })

});