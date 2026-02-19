let body = document.querySelector('body');
let cursor = document.getElementById('cursor');

let mouseX = 0, mouseY = 0;
let cursorX = 0, cursorY = 0;

body.addEventListener('mousemove', function(e){
    mouseX = e.clientX - 30;
    mouseY = e.clientY - 30;
});

function animate(){
    cursorX += (mouseX - cursorX) * 0.05;
    cursorY += (mouseY - cursorY) * 0.05;

    cursor.style.left = cursorX + "px";
    cursor.style.top = cursorY + "px";

    requestAnimationFrame(animate);
}

animate();