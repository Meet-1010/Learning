// setTimeout
// setInterval




// console.log("Hello 1");

// setTimeout(function(){
//     console.log("Hello 2")
// }, 2000);

// console.log("Hello 3");





// let user = 'meet'

// let btn = document.querySelector('button')
// let h1 = document.querySelector('h1')
// let val = undefined



// btn.addEventListener('click', function(){
//     h1.innerHTML = 'Changing the user.'
//     val = h1.value 

//     setTimeout(function(){
//         h1.innerHTML = val + "."
//     }, 1000)

//     setTimeout(function(){
//         h1.innerHTML = val + "."
//     }, 2000)

//     setTimeout(function(){
//         h1.innerHTML = val + "."
//     }, 3000)

//     setTimeout(function(){
//         h1.innerHTML = 'Hello Shreyians'
//     }, 4000)
// })



// let a = 0;

// let int = setInterval(() => {
//     a++
//     console.log(a);
// }, 100);

// setTimeout(() => {
//     clearInterval(int);
// }, 10000);



let btn = document.querySelector('button')
let grow = 0
let inn = document.querySelector('#inner')
let h2 = document.querySelector('h2')
let h1 = document.querySelector('h1')


let tim = 0;

btn.addEventListener('click', () => {
    
    btn.style.pointerEvents = 'none'

    let t = setInterval(()=>{
        tim += 1
    }, 1000)

    let int = setInterval(()=>{
        grow++
        h2.innerHTML = grow+'%'
        inn.style.width = grow+'%'
    },30);

    setTimeout(() => {
        btn.style.opacity = '0.5'
        btn.innerHTML = "Downloaded"
        h1.innerHTML = `Your File is Downloaded in ${tim} seconds` 
        h1.style.color = 'green'
        clearInterval(int);
        clearInterval(t);

    }, 3000);
    


})