//


// let h1 = document.querySelector('h1');
// let box = document.querySelector('#box');
// let btn = document.getElementById('btn');

// let val = 0;

// btn.addEventListener('click', function(){
//     val = Math.random()*10;
//     val = Math.floor(val);

//     switch(val){
//         case 0:
//             box.style.backgroundColor = "orange";
//             h1.innerHTML = `Color is Orange`;
//             break;
//         case 1:
//             box.style.backgroundColor = "red";
//             h1.innerHTML = `Color is Red`;
//             break;
//         case 2:
//             box.style.backgroundColor = "aqua";
//             h1.innerHTML = `Color is Aqua`;
//             break;
//         case 3:
//             box.style.backgroundColor = "yellow";
//             h1.innerHTML = `Color is Yellow`;
//             break;
//         case 4:
//             box.style.backgroundColor = "gold";
//             h1.innerHTML = `Color is Gold`;
//             break;
//         case 5:
//             box.style.backgroundColor = "violet";
//             h1.innerHTML = `Color is Violet`;
//             break;
//         case 6:
//             box.style.backgroundColor = "green";
//             h1.innerHTML = `Color is Green`;
//             break;
//         case 7:
//             box.style.backgroundColor = "beige";
//             h1.innerHTML = `Color is Beige`;
//             break;
//         case 8:
//             box.style.backgroundColor = "chocolate";
//             h1.innerHTML = `Color is Choco`;
//             break;
//         case 9:
//             box.style.backgroundColor = "brown";
//             h1.innerHTML = `Color is Brown`;
//             break;
//         default:
//             box.style.backgroundColor = "lightblue";
//             break;
//     }
// });



let btn = document.getElementById('button');
let h1 = document.querySelector('h1');
let body = document.querySelector('#outer');
let input = document.getElementById('in');
let p = document.querySelector('p');

let val;

var arr = [
    {
        team : 'MI',
        primary : 'blue',
        secondary : 'gold',
        fullname : 'Mumbai Indians',
        trophies : 5,
        captain : 'Rohit Sharma'
    },
    {
        team : 'RCB',
        primary : 'red',
        secondary : 'olive',
        fullname : 'Royal Challengers Banglore',
        trophies : 1,
        captain : 'Virat Kohli'
    },
    {
        team : 'KKR',
        primary : 'purple',
        secondary : 'gold',
        fullname : 'Kolkata Night Riders',
        trophies : 3,
        captain : 'Ajinke Rahane'
    },
    {
        team : 'PBKS',
        primary : 'crimson',
        secondary : 'white',
        fullname : 'Punjab Kings',
        trophies : 0,
        captain : 'Shreyas Iyer'
    },
    {
        team : 'GT',
        primary : 'violet',
        secondary : 'pink',
        fullname : 'Gujarat Titains',
        trophies : 1,
        captain : 'Subhman Gill'
    },
    {
        team : 'CSK',
        primary : 'yellow',
        secondary : 'lightblue',
        fullname : 'Chennai Super Kings',
        trophies : 5,
        captain : 'Ruturaj Gaikwad'
    },
    {
        team : 'RR',
        primary : 'palevioletred',
        secondary : 'blue',
        fullname : 'Rajasthan Royals',
        trophies : 1,
        captain : 'Riyan Parag'
    },
    {
        team : 'DC',
        primary : 'blue',
        secondary : 'darkgoldenrod',
        fullname : 'Delhi Capitals',
        trophies : 0,
        captain : 'Axar Patel'
    },
    {
        team : 'LSG',
        primary : 'deepskyblue',
        secondary : 'darkblue',
        fullname : 'Lucknow Super Giants',
        trophies : 1,
        captain : 'Rishab Pant'
    },
    {
        team : 'SRH',
        primary : 'orange',
        secondary : 'black',
        fullname : 'Sun Risers Hyderabad',
        trophies : 1,
        captain : 'Pat Cummins'
    },
]

input.addEventListener("keydown", function(e){
    if(e.key === "Enter"){
        btn.click();
    }
});


btn.addEventListener('click', function(){
    var a = Math.floor(Math.random()*arr.length);

    
    console.log(arr[a].primary);
    val = input.value.toUpperCase();
    console.log(val);
    input.value = "";
    let res = "Wrong";

    if(val === arr[a].team){
        res = "Right";
    }
    
    p.innerHTML = `Your Guess is ${res} <br><br> Team Name : ${arr[a].fullname} <br><br> Trophies Won : ${arr[a].trophies} <br><br> Captain : ${arr[a].captain}`

    body.style.backgroundColor = arr[a].primary;
    h1.style.backgroundColor = arr[a].secondary;
    h1.innerHTML = `Winner Team is ${arr[a].team}`;
    body.style.border = "2px solid black";
})