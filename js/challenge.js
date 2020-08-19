//initialize variables
let h, hvalue, repeat, likes = {};

// element inner text manipulation
let elementContent = {
    counterContent: function() {
        h = document.getElementById('counter');
        hvalue = parseInt(h.innerText, 10);
    }
};
let view = {
    startCount: function() {
       
       function timer() {
        elementContent.counterContent();
        hvalue ++;
        h.innerText = hvalue;
        repeat = setTimeout(timer, 1000);
       };
      timer();     
    },

    eventHandler: function(params) {
        const body = document.body;
        body.addEventListener('click', function(e) {
            let elementSelected = e.target;
            if (elementSelected.id === 'minus') {
                elementContent.counterContent();
                h.innerText = hvalue - 1;
            } else if(elementSelected.id === 'plus') {
                elementContent.counterContent();
                h.innerText = hvalue + 1;
            } else if (elementSelected.id === 'heart') {
                elementContent.counterContent();
                if (likes[hvalue]) {
                    likes[hvalue] ++;
                } else {
                    likes[hvalue] = 1;
                };
                let ul = document.querySelector('ul.likes');
                ul.innerText = '';
                for (const num in likes) {
                    let li = document.createElement('li');
                    li.innerHTML = `${num}: has ${likes[num]} likes`
                    ul.appendChild(li);
                };

            } else if (elementSelected.id === 'pause') {
                let buttons = document.querySelectorAll('button');
                 if (elementSelected.innerText.trim() === 'pause') {
                     elementSelected.innerText = 'resume'
                     clearTimeout(repeat);
                     
                     Array.from(buttons).forEach((button) => {
                         if (button.id != 'pause') {
                             button.disabled = true;
                         };
                     });
                 } else {
                     elementSelected.innerText = 'pause'
                     h.innerText = 0;
                     view.startCount();
                     Array.from(buttons).forEach((button) => {
                        button.disabled = false;
                    });
                 };  
                
            } else if (elementSelected.id === 'submit') {
                e.preventDefault();
               let comment = document.getElementById('comment-input');
               if (comment.value.trim()) {
                   let p = document.createElement('p');
                   p.setAttribute('cols', '30');
                   p.setAttribute('rows', '10');
                   p.innerText = `Anonymus: ${comment.value}`
                   document.getElementById('list').appendChild(p);

               } else {
                   alert('cannot submit an empty comment');
               };
               comment.value = '';

            }
        })
    }
};
view.startCount();
view.eventHandler();