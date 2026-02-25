// Prac - 1 ⬇️ Eligible for voting or not

// let age = prompt("Enter Your Age ?");

// if(age == null){
//     console.error("You cancelled it");
// }
// else{
//     if(age.trim() === ""){
//         console.error("Please write something...");
//     }
//     else{
//         age = Number(age)
//         if(isNaN(age)){
//             console.error("Please Enter a Number");
//         }
//         else{
//             if(age >= 18){
//                 console.log("Eligible");
//             }
//             else{
//                 console.log("Not Eligible");
//             }
//         }
//     }
// }



// Prac - 2 ⬇️  Print Table of 5

// let table = 5;

// for(let i = 1; i <= 10; i++){
//     let result = table * i
//     console.log(`${table} x ${i} = ${result}`);
// }



// Prac - 3 ⬇️ counting

// let count = 0;

// for(let i = 1;i <= 15; i++){
//     if(i > 8){
//         count++;
//     }
// }

// console.log(count);



// Prac - 4 ⬇️ password matching

// let password = "hello";

// let entered = prompt("Enter a Password for Access");

// if(entered == null){
//     console.error("You Cancelled it");
// }else{
//     if(entered.trim() === ""){
//         console.error("Write Something");
//     }
//     else{
//         if(entered.trim() === password){
//             console.log("Access Granted");
//         }else {console.log("Access Denied");}
//     }
// }


// Prac - 5 ⬇️ 3 life lines

// let realpass = "meet";

// let pass = "";
// let chance = 3;

// for(let i = 3; i >= 0; i--){
//     if(chance > 0){
//         pass = prompt(`Enter Password for Access       Chances left : ${chance}`);
    
//         if(pass == null){
//             console.error("You Cancelled it");
//             break;
//         }else{
//             if(pass.trim() === ""){
//             console.error("Write Something");
//             break;
//             }
//             else{
//                 if(pass.trim() === realpass){
//                     console.log("Access Granted");
//                     break;
//                 }else {
//                     chance--;
//                     continue;
//                 }
//             }   
//         }

//     }
//     console.error("All Chances are over  Account Locked 🔒");
// }



// Prac - 6 ⬇️

// let choice = 0;
// count = 0;
// let typed = "yes";

// while(choice !== 1){
//     let entered = prompt(`Enter any words   Count : ${count}  eg. to stop loop enter 'stop'`);

//     if(entered == null){
//         console.error("You Cancelled it");
//         console.log(`Count = ${count}`);
//         break;
//     }
//     else{
//         if(entered.trim() === ""){
//             console.error("Wrtie Something...");
//             console.log(`Count = ${count}`);
//             break;
//         }
//         else{
//             if(entered.trim() === "stop"){
//                 choice = 1;
//                 console.log(`Count = ${count}`);
//                 break;
//             }
//             else if(entered.trim() === "yes"){
//                 count++;
//                 continue;
//             }
//         }
//     }
// }




// ⬆️⬆️⬆️⬆️ Day 35 is over here 

// ⚒️⚒️⚒️ Day 36 is still a backlog

// ⬇️⬇️⬇️⬇️ Day 37 is starting from here


//Prac - 17 print first 3 odd numbers from 1 to 20

// let count = 0;

// for(let i = 1; i <= 20; i++){
//     if(count == 3){
//         break;
//     }else{
//         if(i %2 == 1){
//             console.log(i);
//             count++;
//         }
//     }
// }


// Prac - 18 

// let count = 0;
// for(let i = 1; i <= 5; i++){
//     let num = prompt(`Enter the value ${i}`);
//     if(num > 0){
//         count++;
//     }
// }

// console.log(`Total number of positive entries are : ${count}`);


// Prac - 19

let balance = 1000;

let count = 3;

while(count != 0){
    let withamount = prompt(`Enter the Withdrawal amount     ||   Withdrawal Chances : ${count}`);
    if( withamount > balance){
        console.error(`Insufficient Balance   ||   Current Balance : ${balance} `);
    }else{
        balance = balance - withamount;
        console.log(`Withdrawal Successful  ||  Current Balance : ${balance}`);
        count--;
    }
}