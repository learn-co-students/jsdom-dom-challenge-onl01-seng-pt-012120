document.addEventListener("DOMContentLoaded", () => {
    document.querySelector('#submit').addEventListener('click', function(e) {
        e.preventDefault();
        let li = document.createElement('li');
        let comment = document.createTextNode(e.target.form.firstElementChild.value);
        li.appendChild(comment);
        document.querySelector('#list').append(li);
    });

    function increaseCounter() {
        const count = document.getElementById('counter');
        let number = parseInt(count.innerText) + 1;
        count.innerText = number.toString();
    };

    function decreaseCounter() {
        const count = document.getElementById('counter');
        let number = parseInt(count.innerText) - 1;
        count.innerText = number.toString();
    };

    let count = window.setInterval(increaseCounter, 1000);
    count

    let minus = document.querySelector('#minus')
    minus.addEventListener("click", function() {
        decreaseCounter()
    });

    let plus = document.querySelector('#plus')
    plus.addEventListener('click', function() {
        increaseCounter();
    });

    let numLikes = []
    let heart = document.querySelector('#heart')
    heart.addEventListener('click', function() {
        let count = document.querySelector('#counter').innerHTML;
        //if (numLikes[count]) {
            //numLikes[count] += 1
        //}
        //else {
            //numLikes[count] = 1
        //};        
        if (document.querySelectorAll('ul','li')[0].innerText.includes(`${count} has`)) {
            string = `${count} has ${numLikes[count]} likes`;
            newString = `${count} has ${numLikes[count] += 1} likes`;
            
            let something = document.querySelector('.likes').innerHTML.replace(string, newString);
            document.querySelector('.likes').innerHTML = something
        }
        else {
            numLikes[count] = 1
            let li = document.createElement('li');
            let likes = document.createTextNode(`${count} has ${numLikes[count]} likes`);
            li.appendChild(likes);
            document.querySelector('.likes').append(li);
        };
    });

    let submit = document.querySelector('#submit');
    let pause = document.querySelector('#pause');
    pause.addEventListener('click', function() {
        if (pause.innerHTML == ' pause ') {
            pause.innerHTML = 'resume';
            clearInterval(count);
            plus.disabled = true
            minus.disabled = true
            submit.disabled = true
            heart.disabled = true
        } else {
            pause.innerHTML = ' pause ';
            count = setInterval(function() {
                counter.innerText++
            }, 1000);
            plus.disabled = false
            minus.disabled = false
            submit.disabled = false
            heart.disabled = false
        };
    });

});