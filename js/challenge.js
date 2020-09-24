document.addEventListener("DOMContentLoaded", () => {
    
    function incrementCounter() {
        const count = document.getElementById('counter')
        const num = parseInt(count.innerText) + 1
        count.innerText = num.toString()
    }

    function decrementCounter() {
        const countdown = document.getElementById('counter')
        const newNum = parseInt(countdown.innerText) - 1
        countdown.innerText = newNum.toString()
    }

    let count = window.setInterval(incrementCounter, 2000)
    // declared count with let as it worked when calling it in the pause event listener 

    const plus = document.getElementById('plus')
    plus.addEventListener('click', () => {
        incrementCounter()
    })

    const minus = document.getElementById('minus')
    minus.addEventListener('click', () => {
        decrementCounter()
    })

    const submitButton = document.querySelector('#submit')
    const commentList = document.querySelector('#list')
    submitButton.addEventListener('click', (e) => {
        e.preventDefault()
        const comment = document.querySelector('#comment-form > input[type=text]').value
        commentList.innerHTML += `<li>${comment}</li>`
        document.querySelector('#comment-form').reset()
    })

    const heart = document.getElementById('heart')
    const likes = document.querySelector('.likes')
    heart.addEventListener('click', (e) => {
        const obj = document.getElementById(`${counter.innerText}`)
        obj ? obj.children[0].innerText++ : 
        likes.innerHTML += `<li id=${counter.innerText} > ${counter.innerText} is liked <span id=${counter.innerText}>1</span> times.</li>`
    })

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
            }, 2000)
            pause.innerText = "pause"

            plus.disabled = false
            minus.disabled = false
            heart.disabled = false
            submitButton.disabled = false
        }
    })
})