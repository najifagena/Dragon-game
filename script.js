score = 0;
cross = true;
audio = new Audio('music.mp3');
audiogo = new Audio('gameover.mp3');
setTimeout(() =>{
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key Code is:", e.keyCode)
    // keycode==38 - above key
    if (e.keyCode == 38) {
        dino = document.querySelector('.dino');
        dino.classList.add('animateDino');
        setTimeout(() => {
            dino.classList.remove('animateDino')

        }, 700)
    }
    
    // keycode==38 - right key
    if (e.keyCode == 39) {
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getCommputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = dinoX + 112 + "px";
    }

    // keycode==38 - left key
    if (e.keyCode == 37) {
    dino = document.querySelector('.dino');
    dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dino.style.left = (dinoX - 112) + "px";
    }
}
setInterval(() => {
    dino = document.querySelector('.dino');
    gameover = document.querySelector('gameover');
    obstacle = document.querySelector('.obstacle');
    
    dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue('top'));
    
    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    
    offSetX = Math.abs(dx - ox);
    offSetY = Math.abs(dy - oy);

    if(offSetX < 73 && offSetY < 52){
        gameover.innerHTML = "Game Over - Reload it"
        obstacle.classList.remove('obstacle')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
         },1000);
    }
    else if(offSetX < 145 && cross) {
        score +=1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation Duration', newDur)
        }, 500);
    }

}, 10);

function updateScore(score){
    scoreCont.innerHTML = "Your Score: " + score

}