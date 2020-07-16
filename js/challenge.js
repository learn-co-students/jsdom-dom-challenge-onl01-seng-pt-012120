let counterIsPaused = false;
const counterH1 = document.querySelector('#counter')

setInterval(function(){
    if(counterIsPaused == false){
        counterH1.innerText++
    }
}, 1000)

let pause = document.querySelector("#pause")
pause.addEventListener('click', function(){
    if(counterIsPaused == false){
        counterIsPaused = true
    } else {
        counterIsPaused = false
    }
})

let add = document.querySelector('#plus')
add.addEventListener('click', function(){
    counterH1.innerText = parseFloat(counterH1.innerText) + 1
    // counterH1.innerText += 1
    // counterH1.innerText++
})

let minus = document.querySelector('#minus')
minus.addEventListener('click', function(){
    counterH1.innerText = parseFloat(counterH1.innerText) - 1
    // counterH1.innerText -= 1
    // counterH1.innerText--
})

let likes = {};

let likeList = document.querySelector('.likes')

let heart = document.querySelector('#heart')
heart.addEventListener('click', function(){
    let counterNumber = counterH1.innerText
    if(likes[counterNumber] == undefined){
        likes[counterNumber] = 1
    } else {
        likes[counterNumber]++
    }

    likeList.innerHTML = ""
    for (var key in likes) {
        let number = key
        let numberOfLikes = likes[key]
        let likeItem = document.createElement('li')
        likeItem.innerText = `${number} has been liked ${numberOfLikes}`
        likeList.append(likeItem)
    }
})
