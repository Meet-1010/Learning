//keywords are words in language which has its meaning in javascript language
// var is part of ES5    &    let, const are part of ES6

// var re = 12;

//var function scoped hota hai 
// var mai ek problem hai ki ek hi name se do variable create kar sakte hai but javascript phir bhi error nhi dega

// Temporial Deadzone

// console.log(a); //here javascript knows that the let a is declared afterwards but it will show error that it can't access before initialized
                   //but in var it doesn't throw error because of hoisting

// let a = "hii"; 


//Hoisting
//hoisting means when you decalred and intialize a variable the declaration parts moves to the top of the code and 
// intialized part stays at the bottom 
// eg: 1) var a = undefined;
// eg: 
// eg:
// eg: console.log(a);  1
// eg: var a = 12;      2
// eg: ^ This converts to 1) var a = undefined  &  2) a = 12;
// eg: the first part moves to the top of the code ^


// Hoisting happens in all var let const but gives error in let and const 


// 25/10/2025
//Datatypes

//primitive datatypes -> copy karne par real value mil jayegi







// control flow Task ⬇️

// function getGrade(score){
//     if(score >= 0 && score <= 32) return "Fail";
//     else if(score >= 33 && score <= 59) return "D Grade";
//     else if(score >= 60 && score <= 69) return "C Grade";
//     else if(score >= 70 && score <= 79) return "B Grade";
//     else if(score >= 80 && score <= 89) return "A Grade";
//     else if(score >= 90 && score <= 100) return "A+ Grade";
//     else return "Invalid Marks ❌";
// }

// console.log(getGrade(77));


