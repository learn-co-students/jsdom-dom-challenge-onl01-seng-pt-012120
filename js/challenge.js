


// As a user, I should see the timer increment every second once the page has loaded.
// As a user, I can manually increment and decrement the counter using the plus and minus buttons.
document.addEventListener("DOMContentLoaded", () => {

    function incrementCounter() {
       const count = document.getElementById('counter')
       let num = parseInt(count.innerText) + 1
       count.innerText = num.toString()
   }

    function decrementCounter() {
       const countdown = document.getElementById('counter')
       let newNum = parseInt(countdown.innerText) - 1
       countdown.innerText = newNum.toString()
   }

    let count = window.setInterval(incrementCounter, 2000)

    let plus = document.getElementById('plus')
   plus.addEventListener('click', () => {
       incrementCounter()
   })

    let minus = document.getElementById('minus')
   minus.addEventListener('click', () => {
       decrementCounter()
   })


// As a user, I can 'like' an individual number of the counter. I should see count of the number of 'likes' associated with that number.
let heart = document.getElementById('heart')
     let likes = document.querySelector('.likes')
     heart.addEventListener('click', (e) => {
         let obj = document.getElementById(`${counter.innerText}`)
         obj ? obj.children[0].innerText++ : 
         likes.innerHTML += `<li id=${counter.innerText} > ${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
     })



// As a user, I can pause the counter, which should
// pause the counter
// disable all buttons except the pause button
// the pause button should then show the text "resume."
// When 'resume' is clicked, it should restart the counter and re-enable the buttons. 

pause.addEventListener("click", (e) => {
    if (pause.innerText === "pause"){
        pause.innerText = "resume"
        clearInterval(count)

         plus.disabled = true
        minus.disabled = true
        heart.disabled = true
        submitButton.disabled = true
    }
    else {
        count = setInterval(() => {
            counter.innerText++
        }, 1000)
        pause.innerText = "pause"

         plus.disabled = false
        minus.disabled = false
        heart.disabled = false
        submitButton.disabled = false
    }
})
 }) 


// 5. As a user, I can leave comments on my gameplay, such as: "Wow, what a fun game this is."

let submitButton = document.querySelector('#submit')
let commentList = document.querySelector('#list')
submitButton.addEventListener('click', (e) => {
    e.preventDefault()
    let comment = document.querySelector('#comment-form > input[type=text]').value
    commentList.innerHTML += `<li>${comment}</li>`
    document.querySelector('#comment-form').reset()
})

 let heart = document.getElementById('heart')
let likes = document.querySelector('.likes')
heart.addEventListener('click', (e) => {
    let obj = document.getElementById(`${counter.innerText}`)
    obj ? obj.children[0].innerText++ : 
    likes.innerHTML += `<li id=${counter.innerText} > ${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
})
