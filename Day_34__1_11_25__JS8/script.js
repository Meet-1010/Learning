// for(let i = 0; i < 6;i++){
//     console.log("Hello");
// }



// for(let i = 0; i < 11;i++){
//     if(i%2 == 0){
//         console.log("EVEN");
//     }
//     else{
//         console.log("ODD");
//     }
// }


// let ans = Number(prompt("Give a number to check if its positive or negative"));
// console.log(ans);
// if(ans === 0){
//     console.log("Zero is nor NEGATIVE nor POSITIVE");
// }
// else if(ans < 0){
//     console.log("IT's NEGATIVE");
// }
// else if(ans > 0){
//     console.log("IT's POSITIVE");
// }
// else{
//     console.log(`The Given Data is not a number`);
// }


let age = prompt("age batao");
if(age === null){
    console.error("you cancelled it");
}else{
    if(age.trim() === ""){
        console.error("bhai dhnag se likh le");
    }
    else{
        age = Number(age.trim());
        if (isNaN(age)){
            console.error("bhai please number dede..");
        }else{
            console.log("confirm ye number hai");
        }
    }

}