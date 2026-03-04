let btn = document.querySelector('button');
let main = document.querySelector('main');


const quotes = [
  "Dream big, start small.",
  "Stay hungry, stay foolish.",
  "Progress, not perfection.",
  "Do it with passion.",
  "Believe you can.",
  "One step at a time.",
  "Focus on what matters.",
  "Great things take time.",
  "Consistency beats talent.",
  "Turn ideas into action."
];




main.addEventListener('mousemove', () => {

    let x = Math.floor(Math.random()*80);
    let y = Math.floor(Math.random()*80);
    let ran = Math.floor(Math.random()*quotes.length);
    let z = Math.floor(Math.random()*150);
    let sc = Math.floor(Math.random()*4);

    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);

    let h1 = document.createElement('h1');
    h1.style.position = 'absolute'
    h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.top = y+'%'
    h1.style.left = x+'%'
    h1.style.rotate = z+'deg'
    h1.style.scale = sc
    h1.innerHTML = quotes[ran];

    main.appendChild(h1);

    setTimeout(() => {
        h1.remove();
    }, 2000);

})

btn.addEventListener('click', () => {

    let x = Math.floor(Math.random()*80);
    let y = Math.floor(Math.random()*80);
    let ran = Math.floor(Math.random()*quotes.length);
    let z = Math.floor(Math.random()*150);
    let sc = Math.floor(Math.random()*4);

    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);

    let h1 = document.createElement('h1');
    h1.style.position = 'absolute'
    h1.style.color = `rgb(${c1},${c2},${c3})`
    h1.style.top = y+'%'
    h1.style.left = x+'%'
    h1.style.rotate = z+'deg'
    h1.style.scale = sc
    h1.innerHTML = quotes[ran];

    main.appendChild(h1);

    setTimeout(() => {
        h1.remove();
    }, 2000);

})