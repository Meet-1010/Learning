// Create Element
// appending a child



// let btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     var btn1 = document.createElement('button');

//     btn1.innerHTML = "Click";
//     body.appendChild(btn1);
//     // console.log(btn1);
// })

// var h1 = document.createElement('h1');

// h1.innerHTML = 'created this..'

// let body = document.querySelector('body');

// body.appendChild(h1);



const randomRgbColor = () => {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
};

let btn = document.querySelector('button')
let main = document.querySelector('main')

btn.addEventListener('click', function(){

    let x = Math.floor(Math.random()*100);
    let y = Math.floor(Math.random()*100);
    let ro = Math.floor(Math.random()*360);


    let div = document.createElement('div');
    div.style.height = '45px'
    div.style.width = '45px'
    div.style.position = 'absolute'
    div.style.top = `${y}%`
    div.style.left = `${x}%`
    div.style.rotate = `${ro}deg`
    div.style.margin = '10px'
    div.style.textAlign = 'center'
    div.style.transition = 'all ease 0.4s'
    div.style.backgroundColor = randomRgbColor();

    div.addEventListener('mouseenter', () => {
        div.style.backgroundColor = randomRgbColor();
    });

    main.appendChild(div);
})


