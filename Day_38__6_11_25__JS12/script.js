// Function : Used For Code Reuse
// function apke code ko tab chalata hai jab ap chaaho 

// - understand fuction in javascript and why its widely used 
// [ paramteres, arguments, rest parameters, hoisting, variable hoisting, function hoisting]



// function alooparatha(){
//     console.log("🥔")
// }



// Parameters ⬇️ Normal
// function abcd(age, name){
//     console.log("Function abcd called " + "age : " + age + "   name : " + name);
// }

// abcd(12, "harsh");


// REST Parameters ⬇️
// function abcd(a, b, ...c){
//     console.log(a,b,c);
// }

// abcd(1,2,3,"nfv", true);


// Hoisting ⬇️
// console.log(var1);
// var var1 = "hoisted this variable";



//  Parameters in javascript - [required, destructed, rest, default]


// required ⬇️
// function abcd(a, b,c,d){
     //agar apne [ paramteres banaye and apne unme arguments nahi bheje to fir wo value parameter ki undefined kar dogay ] 
// }

// abcd();


// destructed ⬇️
// function abcd({name, age}){
//     console.log(name, age);
// }

// abcd({name : "meet", age : 22});


// REST ⬇️
// function abcd(...val){
//     console.log(val)
// }

// abcd(1,2,3,4,5,5);

// Default ⬇️
// function abcd(a = 0, b = 0, c = 0){
//     console.log(a,b,c);
// }

// abcd(1,2);


// Arguments in javascript - [positional, default, spread]


// spread ⬇️
// function abcd(a,b,c,d){
//     console.log(a,b,c,d);
// }

// let arr = [1,2,3,4]
// abcd(...arr);



// - classic function, nested function(function within function), scope chain in javascript.

// Nested function ⬇️
// function abcd(){
//     function defg(){
//         console.log("Its defg");
//     }
//     defg();
// }
// abcd();


// Scope Chain ⬇️
// function abcd(){
//     let a = 12;
//     function defg(){
//         console.log(a);
//     }
//     defg();
// }
// abcd();


//  - Understanding Immediately Inovked function expression (IIFE) ⬇️
// (function (){
//     let balance = 1000;
// })();




// - More functions in javascript - [arrow function, fat arrow, anonymous, higher order, callback, first class, pure function, impure function]

// Arrow function ⬇️
// let func = () => {
//     console.log("arrow function");
// }



// Anonymous ⬇️
// function (){

// }



// higher order function ⬇️ -> 1st : ek aisa fucntion jo ki return karde ek aur function OR || 2nd ya toh wo function accept karle ek aur parameter mai
// function abcd(){
//     return function(){

//     }
// }
// function abcd(a){

// }
// abcd(function(){

// });




// first class ⬇️ -> first class function ek concept -> function uus language mai variable ki tarah use ho sakte hai



