let count = setInterval(myTimer, 1000);
const button1 = document.getElementById("minus");
const button2 = document.getElementById("plus");
const button3 = document.getElementById("heart");
const button4 = document.getElementById("submit");

function myTimer() {
    let c = document.getElementById("counter");
    c.innerHTML = parseInt(c.innerText) + 1;
};

document.getElementById('pause').addEventListener("click", function() {
    if (document.getElementById('pause').innerText == "pause") {
        document.getElementById('pause').innerText = "resume";
        clearInterval(count);
        button1.disabled = true;
        button2.disabled = true;
        button3.disabled = true;
        button4.disabled = true;
    }
    else {
        document.getElementById('pause').innerText = "pause";
        count = setInterval(myTimer, 1000);
        button1.disabled = false;
        button2.disabled = false;
        button3.disabled = false;
        button4.disabled = false;
    };
});

document.getElementById("minus").addEventListener("click", function() {
    let b = document.getElementById("counter");
    b.innerHTML = parseInt(b.innerText) - 1;
});

document.getElementById("plus").addEventListener("click", myTimer);

document.getElementById("submit").addEventListener("click", function(a) {
    a.preventDefault();
    let com = document.getElementById("list");
    let newp = document.createElement('p');
    newp.innerText = document.getElementById('comment-input').value;
    com.appendChild(newp);
    document.getElementById('comment-input').value = "";
});

document.getElementById("heart").addEventListener("click", function() {
    let likes = document.getElementsByClassName("likes")[0];
    let z = document.getElementById('counter').innerText;
    if (document.getElementById(z)) {
        let e = document.getElementById(z);
        e.dataset.x = parseInt(e.dataset.x) + 1;
        e.innerHTML = z + ` has been liked ${e.dataset.x} times`;
    }
    else {
        let newLi = document.createElement("li");
        newLi.id = z;
        newLi.dataset.x = 1;
        newLi.innerHTML = z + ` has been liked ${newLi.dataset.x} time`;
        likes.appendChild(newLi);
    };
})