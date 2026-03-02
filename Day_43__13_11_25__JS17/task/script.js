let val = document.querySelector('h1');
let val2 = document.querySelector('h2');

let inc = document.getElementById("inc");
let dec = document.getElementById("dec");
let sub = document.getElementById("submit");

let a = 0;
inc.addEventListener('click', function(){
    a++;
    val.innerHTML = a;
});

dec.addEventListener('click', function(){
    a--;
    val.innerHTML = a;
});

sub.addEventListener('click', function(){
    val2.innerHTML = `Total : ${a}`;
});