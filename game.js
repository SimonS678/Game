/////// INITIALISIERUNG ////////

const ballElement = document.querySelector('#gameplayer');
const boardleftElement = document.querySelector('#board1')
const boardrightElement = document.querySelector('#board2')

const player1 ={
    element: ballElement,
    xSpeed: 0,
    ySpeed: 0,
    left: 590,
    top: 340
}
const gameAreaWidth = 1200;
const gameAreaHeight = 700;
let scoreleft = 0;
let scoreright = 0;


/////// KEY DOWN / ACCELERATION ////////

document.addEventListener("keydown", keyPressed);

function keyPressed(event) {
    if (event.keyCode == 39) {
        accelerateRight();
    };
    if (event.keyCode == 37) {
        accelerateLeft();
    };
    if (event.keyCode == 38) {
        accelerateTop();
    }
    if (event.keyCode == 40) {
        accelerateBottom();
    }
}

function accelerateRight() {
    if (player1.xSpeed < 6) {
        player1.xSpeed += 1.5
    }
}
function accelerateLeft() {
    if (player1.xSpeed > -6) {
        player1.xSpeed -= 1.5
    }
}
function accelerateTop() {
    if (player1.ySpeed > -6) {
        player1.ySpeed -= 1.5
    }
}
function accelerateBottom() {
    if (player1.ySpeed < 6) {
        player1.ySpeed += 1.5
    }
}


/////// KEY UP / DECELERATION ////////

document.addEventListener("keyup", keyletgo);

function keyletgo(event) {
    if (event.keyCode == 39) {
        decelerateRight();
    };
    if (event.keyCode == 37) {
        decelerateLeft();
    };
    if (event.keyCode == 38) {
        decelerateTop();
    }
    if (event.keyCode == 40) {
        decelerateBottom();
    }
}
function decelerateRight() {
    player1.xSpeed = 0
}
function decelerateLeft() {
    player1.xSpeed = 0
}
function decelerateTop() {
    player1.ySpeed = 0
}
function decelerateBottom() {
    player1.ySpeed = 0
}


/////// GAME LOOP ////////

setInterval(function() {
    player1.left += player1.xSpeed;

    if (player1.left < 0) {
        player1.left = 0;
        player1.xSpeed
    }
    if (player1.left > gameAreaWidth - 20) {
        player1.left = gameAreaWidth - 20;
        player1.xSpeed = 0;
    }
    
    player1.top += player1.ySpeed;
    
    if (player1.top < 0) {
        player1.top = 0;
        player1.ySpeed
    }
    if (player1.top > gameAreaHeight - 20) {
        player1.top = gameAreaHeight - 20;
        player1.ySpeed = 0;
    }
    if (player1.left == gameAreaWidth - 20 && player1.top < 378 && player1.top > 322 ) {
        console.log("goal")
        player1.top = 340;
        player1.left = 600;
        scoreleft += 1;
        boardleftElement.innerHTML = scoreleft;
    }
    if (player1.left == player1.left < 0 && player1.top < 378 && player1.top > 322 ) {
        console.log("goal")
        player1.top = 340;
        player1.left = 600;
        scoreright += 1;
        boardrightElement.innerHTML = scoreright;
        
    }


    player1.element.style.top = player1.top + "px"; 
    player1.element.style.left = player1.left + "px";
}, 15);

    
    








