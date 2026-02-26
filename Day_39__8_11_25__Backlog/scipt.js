// Functions in javascript

// More functions in javascript - anonyms, higher order, callback, first calss, pure function, impure function



//  Pure function⬇️⬇️ :  ek aisa functin jo same input dene pe same output dega koi side effect nahi hoga

// let a = 12;
// function abcd(val){
//     console.log(val + 2);
// }
// abcd(a);



// Impure function⬇️⬇️ : same input to different output ho sakta hai

// let a = 14;
// function abcd(val){
//     a = Math.random() + val;
//     console.log(a);
// }
// abcd(a);
// abcd(a);
// abcd(a);


// understanding  scoping in js : global scope, function scope ✅



// understanding closures, scoping rule 


// closure⬇️⬇️ -> ek function hai jo return karta hai function but returing function jo hai wo parent ka koi variable use karega

// function abcd(){
//     let a = 12;
//     return function bd(){
//         console.log(a);
//     }
// }
// let b = abcd();
// console.log(b.a);   <---- USE CHATGPT TO UNDERSTAND THIS 


// What are Arrays in javascript and how to create an Array.⬇️

// arrays -> ek se zyada members rakhne ki jagah 
// let arr = [1,62,35,6854,545,76];
// console.log(arr);


// under stand how to access the elements in array.⬇️
// console.log(arr[4]);

// functions on arrays - push, pop, shift, unshift, indexof, array desrupting, filter, some, map, reduce, spread operator, slice, reverse, sort,
// join, tostring. ⬇️⬇️

// let arr = [342,234,567,789,231,3453,89];
// arr.push(2);
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.shift();
// console.log(arr);
// arr.unshift();
// console.log(arr);
// console.log(arr.indexOf(234));


// let [a, ,b] = arr;
// console.log(a, b);

// let arr1 = arr.filter(function(val){
//     return val < 354;
// });
// console.log(arr1);

// arr2 = [...arr1];
// console.log(arr2);


// Iterating over arrays using - For loop, foreach⬇️⬇️

// let arr = [1,2,3,4,5];
// for(let i=0; i < arr.length ;i++){
//     console.log(arr[i]);
// }

// let arr = [1,2,3,4,4,6,7];
// arr.forEach(function(val){
//     console.log(val);
// });


//  understanding what are objects in javascript - key-value pair⬇️⬇️

// let obj = {
//     name : "meet",
//     age : 22,
//     email : "meet212@gmail.com"
// };
// console.log(obj);


// creating object access properties, deleting property and nested objects⬇️⬇️

// let obj = {
//     name : "meet",
//     age : 22,
//     email : "meet212@gmail.com"
// };
// console.log(obj.name);
// console.log(obj.age);

// delete obj.email;
// console.log(obj);


// nested objects⬇️⬇️

// let obj = {
//     name: "harsh",
//     socials : {
//         instagram : "cabnsc",
//         facebook : "jbsvi"
//     }
// }
// console.log(obj);

