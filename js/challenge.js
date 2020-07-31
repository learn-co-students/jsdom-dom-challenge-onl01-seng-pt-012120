"use strict";

function _toConsumableArray(a) {
    if (Array.isArray(a)) { //if argument "a" is an array, make a copy by creating a new array "c" with the same length then setting the values of each index to the same as the original array
        for(let b=0, c=Array(a.length); b<a.length; b++) //Array() constructor takes argument of length, giving us slots in the array to assign rather than having to push elements into the array
        c[b]=a[b]; //Sets the values of the new (copy) array
        return c //Why, if "a" IS an array, are we making a copy? When is the array not consumable, but an exact copy of it would be consumable?
        }
    return Array.from(a) //Construct an array from an array-like thing (some sort of list)
}


var playing=!0,

timer=function(){
    return setInterval(function(){
        let a=document.getElementById("counter"), b=parseInt(a.innerText); //Get the counter and make it an integer
        a.innerText=b+1 //update the innerText of the counter to be the integer-ized value plus 1
    },
    1e3) //Do above at interval of 1 second
},

interval=timer() //Declaring a bumch of global variables...
minus=document.getElementById("minus"),
plus=document.getElementById("plus"),
heart=document.getElementById("heart"),
pause=document.getElementById("pause"),
commentForm=document.getElementsByTagName("form")[0];

minus.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b-1}), //On click, parse the counter element to integer and minus one
plus.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText);a.innerText=b+1}), //On click, parse the counter element to integer and plus one
heart.addEventListener("click",function(){var a=document.getElementById("counter"),b=parseInt(a.innerText), //Get the counter number and parse to integer
    c=document.querySelector(".likes"), //Get the likes
    d=void 0;
    if([].concat(_toConsumableArray(c.children)).map(function(a){return parseInt(a.dataset.num)}).includes(b)) { //If the likes-children includes the integer captured from the counter
        d=document.querySelector('[data-num="'+b+'"]'); //Get the likes-child with the data-num attribute equal to the counter integer
        var e=parseInt(d.children[0].innerText); //Parse the number of likes to integer
        d.innerHTML=b+" has been liked <span>"+(e+1)+"</span> times"} //Update the innerHTML to the counter number(b) has been liked (previous number of likes plus 1, e+1)
    else(d=document.createElement("li")).setAttribute("data-num",b), //Or if there is no likes-child with the data-num attribute equal to the counter integer
        d.innerHTML=b+" has been liked <span>1</span> time", //Create a new li element and add text that the counter integer has been liked one time
        c.appendChild(d)}), //Append child to the list of likes
pause.addEventListener("click",function(){playing?(playing=!1,clearInterval(interval),this.innerText="resume"):(playing=!0,interval=timer(),this.innerText="pause"),[].concat(_toConsumableArray(document.getElementsByTagName("button"))).forEach(function(a){"pause"!==a.id&&(a.disabled=!playing)})}),
commentForm.addEventListener("submit",function(a){a.preventDefault();var b=this.children[0],c=b.value;b.value="";var d=document.querySelector(".comments"),e=document.createElement("p");e.innerText=c,d.appendChild(e)});
