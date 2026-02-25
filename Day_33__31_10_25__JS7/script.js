// Today's topic Loops
// Straightforward loops -> naa hi value badalti hai naa hi printing badalti hai
// Dynamic loops -> value badal sakti hai and printing bhi badal sakti hai



for(let i = 12; i > 0; i--){
    if(i == 7 || i == 5){
        continue;
    }
    else{
        console.log(i);
    }
}

//Practice Example : 0 3 6 9 12 15....
function prac1(){
    
    let num = 0;

    for(let i = 0; i < 12; i++){
        console.log(num);
        num = num+3;
    }

}

//Fibonacci Series : 0 1 1 2 3 5 8 13 21....
function Fibonacci(){
let num = 0;
let num2 = 1;
let result = 0;

console.log(num);
console.log(num2);

for(let i = 0; i < 20; i++){
    result = num + num2;
    console.log(result);
    num = num2;
    num2 = result;
}
}

