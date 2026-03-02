// write a higher-order function tun_twice(fn) that takes another function and excutes it two times.⬇️⬇️

// function runTwice(fn){
//     fn();
//     fn();
// }

// runTwice(function(){
//     console.log("hello")
// });


// create one pure function that always returns the same output for given input, and one impure function using a global variable.⬇️⬇️


// Pure function⬇️⬇️
// function abcd(a,b){
//     console.log(a+b);
// }

// abcd(1,2);
// abcd(1,2);


// Impure function⬇️⬇️
// let res = 10;
// function efg(a){
//     res++;
//     console.log(a + res);
// }
// efg(2);
// efg(2);


// Write a function that uses object destructuring inside parameters to extract and print name and age.⬇️⬇️

// function abcd({name, age}){
//     console.log(name);
//     console.log(age);
// }

// abcd({ name : "meet", age : 22});


// Demonstrate the difference between normal function and arrow function when used as object methods (this issue).⬇️⬇️
// this ek aise keyword hai jo dynamic hai iski value badal jati hai.

// let obj = {
//     name : "meet",
//     fu : function(){
//         console.log(this); // normal obj mai function hota hai uske andar this ki value voh pura obj hota hai.
//     },
//     fu2 : () => {
//         console.log(this); // arrow function mai this ki value parent function hoti hai
//     }
// }
// obj.fu();
// obj.fu2();


// Given an array of numbers, use map() to create a new array where each number is squared.⬇️⬇️

// let arr = [1,2,34,5,6,7,8];

// let arr2 = arr.map(function(val){
//     return val * val;
// })

// console.log(arr);
// console.log(arr2);


// Use filter() to get only even numbers from an array.⬇️⬇️

// let arr = [1,2,3,4,5,6,7];

// console.log(arr.filter(function(val){
//     if(val % 2 == 0){
//         return val;
//     }
// }));


// Use reduce() to find the total salary from an array of numbers [1000, 2000, 3000].⬇️⬇️

// let salary = [1000, 2000, 3000];

// let ans = salary.reduce(function(acc, val){
//     return acc+val;
// });
// console.log(ans);


// Create an array of names ans use some() and every() to test a condition (eg. all names longer than 3 char).⬇️⬇️


// let names = ["avi", "harsh", "nishi", "avina", " hoiti", "pol"];

// console.log(names.some(function(val){
//     return val.length > 3;
// }));

// console.log(names.every(function(val){
//     return val.length > 1;
// }));


// Create an object user and test the behaviour of object freeze() and object.seal() by adding/changing keys.⬇️⬇️

// let user = {
//     name : "meet",
//     age : 22,
//     email : "mndjn"
// };

// Object.freeze(user); // if we freeze na hi badal sakte hai na hi add kar paogay.
// Object.seal(user) // if we seal we cannot add but yes we can change.
// user.userid = 1;
// user.age = 29;


// Create a nested object (user -> address -> city) and access the city name inside it.⬇️⬇️

// let obj = {
//     user1 : {
//         name : "meet",
//         address : {
//             city : "vadodara",
//             state : "gujarat"
//         },
//     },
// };

// let { city, state} = obj.user1.address;
// console.log(city);
// console.log(state);


