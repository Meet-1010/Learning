// DOM - Document Object Model 
// Frontend ki javascript

// There are 4 pillars of DOM : 
// - Selection of an Element
        //  - queryselector
        //  - getElementById
        //  - getElementByClassName


// - Changing HTML
        // - innerHTML
        // - textContent


// - Changing CSS
        // - .style

// - Event Listeners
        // - addEventListener

let val = document.querySelector('h1');
let val2 = document.querySelector('h2');

val.innerHTML = "Guyzzz";
val.style.color = "pink";

val2.style.color = "pink";
val2.style.fontSize = "45px";

let a = 0;
val.addEventListener('click', function(){
    console.log('clicked');
    a++;
    if(a == 2){
        val.style.color = 'gold';
    }
});




let btn = document.getElementById("btn");
btn.addEventListener('click', function(){
    val.innerHTML = "Hello !!!!!!!!!";
    box.style.backgroundColor = 'red';
});


var box = document.querySelector('#box');
box.style.backgroundColor = "Blue";


// 