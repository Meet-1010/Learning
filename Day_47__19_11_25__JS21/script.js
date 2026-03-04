let card = document.querySelector('.card');
let like = document.querySelector('#liked');
let bot = document.querySelector('#bot');
let num = document.querySelector('h4');
let count = 0

card.addEventListener('dblclick',() => {
    like.style.opacity = 1
    like.style.transform = 'translate(-50%, -50%) scale(1) rotate(0deg)'

    setTimeout(()=>{
        like.style.transform = 'translate(-50%, -300%) scale(1) rotate(60deg)'
    }, 800)

    setTimeout(() =>{
        like.style.opacity = 0
    },1000)
    setTimeout(()=>{
        like.style.transform = 'translate(-50%, -50%) scale(1) rotate(-60deg)'
    },1200)

    count++
    num.innerHTML = count;

    bot.classList.remove("ri-heart-3-line");
    bot.classList.add("ri-heart-3-fill");

// Apply gradient only during beat
    bot.classList.add("beat-gradient");

    setTimeout(() => {
        bot.classList.remove("beat-gradient"); // remove gradient
        bot.style.color = "#ff0000ff";            // solid Instagram red
    }, 300);
    

    
})

