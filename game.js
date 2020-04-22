const ballElement = document.querySelector('#gameball');
const boardleftElement = document.querySelector('#board1')
const boardrightElement = document.querySelector('#board2')

const ball ={
    element: ballElement,
    xSpeed: 0,
    ySpeed: 0,
    left: 0,
    top: 0
}
const gameAreaWidth = 1200;
const gameAreaHeight = 700;
let scoreleft = 0;
let scoreright = 0;

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
        if (ball.xSpeed < 6) {
            ball.xSpeed += 1.5
        }
    }
    function accelerateLeft() {
        if (ball.xSpeed > -6) {
            ball.xSpeed -= 1.5
        }
    }
    function accelerateTop() {
        if (ball.ySpeed > -6) {
            ball.ySpeed -= 1.5
        }
    }
    function accelerateBottom() {
        if (ball.ySpeed < 6) {
            ball.ySpeed += 1.5
        }
    }

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
        ball.xSpeed = 0
    }
    function decelerateLeft() {
        ball.xSpeed = 0
    }
    function decelerateTop() {
        ball.ySpeed = 0
    }
    function decelerateBottom() {
        ball.ySpeed = 0
    }

setInterval(function() {
    ball.left += ball.xSpeed;

    if (ball.left < 0) {
        ball.left = 0;
        ball.xSpeed
    }
    if (ball.left > gameAreaWidth - 20) {
        ball.left = gameAreaWidth - 20;
        ball.xSpeed = 0;
    }
    
    ball.top += ball.ySpeed;
    
    if (ball.top < 0) {
        ball.top = 0;
        ball.ySpeed
    }
    if (ball.top > gameAreaHeight - 20) {
        ball.top = gameAreaHeight - 20;
        ball.ySpeed = 0;
    }
    if (ball.left == gameAreaWidth - 20 && ball.top < 378 && ball.top > 322 ) {
        console.log("goal")
        ball.top = 340;
        ball.left = 600;
        scoreleft += 1;
        boardleftElement.innerHTML = scoreleft;
    }
    if (ball.left == ball.left < 0 && ball.top < 378 && ball.top > 322 ) {
        console.log("goal")
        ball.top = 340;
        ball.left = 600;
        scoreright += 1;
        boardrightElement.innerHTML = scoreright;
        
    }
    ball.element.style.top = ball.top + "px"; 
    ball.element.style.left = ball.left + "px";
}, 15);

    
    








