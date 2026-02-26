// recognize how objects are stored traverse keys of an object, array as object





// timing events - setTimeout(), setInterval, clearTimeout, cleaInterval


// operation in objects - freeze, seal, desctructing, object methods, this keyword


// prac - 1 Print hello with function ⬇️⬇️

// function abcd(){
//     console.log("Hello Javascript");
// }
// abcd();

// Prac - 2 create a function add ⬇️⬇️

// function abcd(a, b){
//     return a+b;
// }
// ans = abcd(2,5);
// console.log(ans);

// Prac - 3 write a function with a defualt parameter name = guest that prints "Hi <name>".⬇️⬇️

// function abcd(name = "Guest"){
//     console.log(`Hi ${name}`);
// }
// abcd("Meet");

// Prac - 4 use rest parameters to make a function that adds unlimted numbers.⬇️⬇️

// let result = 0;
// function abcd(...nums){
//     nums.forEach(function (val){
//         result += val;
//     });
//     console.log(`Result = ${result}`);
// }
// abcd(1,2,3,4,5,6,7,345,235);


// Prac - 5 Create an IIFE that prints "I run instantly!".⬇️⬇️

// (function (){
//     console.log("This Runs immediately!.");
// })();


//  Prac - 6 make a nested function where the inner one prints one variable from the outer one.⬇️⬇️

// function abcd(){
//     let a = 12;
//     function b(){
//         console.log(`This is from inner function the value of a : ${a}`);
//     };
//     b();
// }
// abcd();


// Prac - 7 create an arr of 5 fruits. add one at the end and remove one from the beginning.⬇️⬇️

// let arr = ["apple", "pineapple", "mango", "kiwi", "dragonfruit"];
// console.log(arr);
// arr.push("Avacado");
// console.log(arr);
// arr.shift(0);
// console.log(arr);


// Prac - 8 use a for loop to print all elemts of an array.⬇️⬇️

// let arr = [23,345,546,12,45456,3];
// for(let i = 0; i < arr.length ; i++){
//     console.log(arr[i]);
// }


// Prac - 9 create an object person with keys name, age, and city, and print each key's value.⬇️⬇️

// let obj = {
//     name : "meet",
//     age : 22,
//     city : "vadodara"
// }

// console.log(`Name is ${obj.name}`);
// console.log(`Age is ${obj.age}`);
// console.log(`City is ${obj.city}`);

// second way
// for(let a in obj){
//     console.log(obj[a]);
// }


// Prac - 10 use setTimeout() to log "Time's up!" after 2 seconds. ⬇️⬇️

// setTimeout(function (){
//     console.log("Time's Up!");
// }, 2000);





