/////// INITIALISIERUNG ////////

const player1Element = document.querySelector('#gameplayer1');
const player2Element = document.querySelector('#gameplayer2')
const boardleftElement = document.querySelector('#board1')
const boardrightElement = document.querySelector('#board2')
const winElement = document.querySelector('#win')

const player1 ={
    element: player1Element,
    xSpeed: 0,
    ySpeed: 0,
    left: 490,
    top: 340
}
const player2 ={
    element: player2Element,
    xSpeed: 0,
    ySpeed: 0,
    left: 690,
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
        accelerateRight(player1);
    };
    if (event.keyCode == 37) {
        accelerateLeft(player1);
    };
    if (event.keyCode == 38) {
        accelerateTop(player1);
    }
    if (event.keyCode == 40) {
        accelerateBottom(player1);
    }
    if (event.keyCode == 68) {
        accelerateRight(player2)
    }
    if (event.keyCode == 65) {
        accelerateLeft(player2)
    }
    if (event.keyCode == 87) {
        accelerateTop(player2)
    } 
    if (event.keyCode == 83) {
        accelerateBottom(player2)
    }

}

function accelerateRight(activeplayer) {
    if (activeplayer.xSpeed < 6) {
        activeplayer.xSpeed += 1.5
    }
}
function accelerateLeft(activeplayer) {
    if (activeplayer.xSpeed > -6) {
        activeplayer.xSpeed -= 1.5
    }
}
function accelerateTop(activeplayer) {
    if (activeplayer.ySpeed > -6) {
        activeplayer.ySpeed -= 1.5
    }
}
function accelerateBottom(activeplayer) {
    if (activeplayer.ySpeed < 6) {
        activeplayer.ySpeed += 1.5
    }
}


/////// KEY UP / DECELERATION ////////

document.addEventListener("keyup", keyletgo);

function keyletgo(event) {
    if (event.keyCode == 39) {
        decelerateRight(player1);
    };
    if (event.keyCode == 37) {
        decelerateLeft(player1);
    };
    if (event.keyCode == 38) {
        decelerateTop(player1);
    }
    if (event.keyCode == 40) {
        decelerateBottom(player1);
    }
    if (event.keycode == 68) {
        decelerateRight(player2)
    }
    if (event.keyCode == 65) {
        decelerateLeft(player2)
    }
    if (event.keyCode == 87) {
        decelerateTop(player2)
    } 
    if (event.keyCode == 83) {
        decelerateBottom(player2)
    }

}
function decelerateRight(activeplayer) {
    activeplayer.xSpeed = 0
}
function decelerateLeft(activeplayer) {
    activeplayer.xSpeed = 0
}
function decelerateTop(activeplayer) {
    activeplayer.ySpeed = 0
}
function decelerateBottom(activeplayer) {
    activeplayer.ySpeed = 0
}
function decelerateRight(activeplayer) {
    activeplayer.xSpeed = 0
}
function decelerateLeft(activeplayer) {
    activeplayer.xSpeed = 0
}
function decelerateTop(activeplayer) {
    activeplayer.ySpeed = 0
}
function decelerateBottom(activeplayer) {
    activeplayer.ySpeed = 0
}


/////// GAME LOOP ////////

setInterval(function() {
    player1.left += player1.xSpeed;
    player2.left += player2.xSpeed;

    if (player1.left < 0) {
        player1.left = 0;
        player1.xSpeed
    }
    if (player1.left > gameAreaWidth - 20) {
        player1.left = gameAreaWidth - 20;
        player1.xSpeed = 0;
    }
    if (player2.left < 0) {
        player2.left = 0;
        player2.xSpeed
    }
    if (player2.left > gameAreaWidth - 20) {
        player2.left = gameAreaWidth - 20;
        player2.xSpeed = 0;
    }
    
    player1.top += player1.ySpeed;
    player2.top += player2.ySpeed;
    
    if (player1.top < 0) {
        player1.top = 0;
        player1.ySpeed
    }
    if (player1.top > gameAreaHeight - 20) {
        player1.top = gameAreaHeight - 20;
        player1.ySpeed = 0;
    }
    if (player2.top < 0) {
        player2.top = 0;
        player2.ySpeed
    }
    if (player2.top > gameAreaHeight - 20) {
        player2.top = gameAreaHeight - 20;
        player2.ySpeed = 0;
    }


    /// TOR?
    if (player2.left == gameAreaWidth - 20 && player2.top < 378 && player2.top > 322 ) {
        console.log("goalright")
        player2.top = 340;
        player2.left = 600;
        scoreleft += 1;
        
    }
    if (player1.left == player1.left < 0 && player1.top < 378 && player1.top > 322 ) {
        console.log("goalleft")
        player1.top = 340;
        player1.left = 600;
        scoreright += 1;

    }
    if (scoreleft == 6) {
        player2.top = 340;
        player2.left = 600;
        scoreleft = 0;
        winElement.innerHTML = 'Player 2 Wins!'
    }

    if (scoreright == 6) {
        player1.top = 340;
        player1.left = 600;
        scoreright = 0;
        winElement.innerHTML = 'Player 1 Wins!'
    }


    player1.element.style.top = player1.top + "px"; 
    player1.element.style.left = player1.left + "px";
    player2.element.style.top = player2.top + "px"; 
    player2.element.style.left = player2.left + "px";
    boardrightElement.innerHTML = scoreright;
    boardleftElement.innerHTML = scoreleft;



    
}, 15);

    
    








