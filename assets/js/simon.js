// Variables

let sequence = [];
let playerSequence = [];
let computerCount, playerCount, correct, compGo, win;
let strictMode = true;
let sound = true;

// Buttons, number displays, pads & modals targetted as variables using JQuery.

const numDisplay = document.getElementById("number-counter");
const pad = document.getElementsByClassName('pad');
const greenPad = document.getElementById("1");
const redPad = document.getElementById("2");
const yellowPad = document.getElementById("3");
const bluePad = document.getElementById("4");
const startButton = document.getElementById("start");
const strictButton = document.getElementById("strict");
const startModal = document.getElementById("start-modal-button");
const startWinModal = document.getElementById("start-modal-win-button");
const loseModalDisplay = document.getElementById("lose-modal-display");
const winModalDisplay = document.getElementById("win-modal-display");

// Whatever code is written inside the JQuery ready method will run once the page Document Object Modal (DOM) is ready to execute JavaScript code.

$(document).ready(function() {
    
    // jQuery function to allow modal scroll icon to scroll down upon click.

    $('.modal-scroll').on('click', function(e) {
        var linkHref = $(this).attr('href');
        e.preventDefault();
        $('.modal-body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);
    });
    
    $(startButton).click(function() {
        startPlay();
    });

    $('.pad').click(function() {
        let padId = $(this).attr('id');
        if (padId == 1) {
            greenLightAndSound();
            playerSequence.push(parseInt(padId));
        }
        if (padId == 2) {
            redLightAndSound();
            playerSequence.push(parseInt(padId));
        }
        if (padId == 3) {
            yellowLightAndSound();
            playerSequence.push(parseInt(padId));
        }
        if (padId == 4) {
            blueLightAndSound();
            playerSequence.push(parseInt(padId));
        }
        checking();
    });
});

function startPlay() {
    initialGameSettings();
    randomNumber();
    $(numDisplay).text('0');
    playInterval = setInterval(gamePlay, 800);
}

function initialGameSettings() {
    playerSequence = [];
    sequence = [];
    playerCount = 1;
    computerCount = 0;
    compGo = true;
}

function randomNumber() {
    randomNum = Math.ceil(Math.random() * 4);
    sequence.push(randomNum)
    console.log(sequence);
}

function gamePlay() {
    if (playerCount == computerCount) {
        clearInterval(playInterval)
        compGo = false;
        console.log('This is when it\'s players turn')
    } else if (compGo) {
        setTimeout(function() {
            if (randomNum == 1) {
                greenLightAndSound();
            }
            if (randomNum == 2) {
                redLightAndSound();
            }
            if (randomNum == 3) {
                yellowLightAndSound();
            }
            if (randomNum == 4) {
                blueLightAndSound();
            }
            computerCount++;
        }, 500);
    }
}

function greenLightAndSound() {
    $(greenPad).addClass('green-light')
    setTimeout(function() {
        $(greenPad).removeClass('green-light')
    }, 400);
    let soundGreen = $('#sound-green')[0];
    soundGreen.currentTime = 0;
    soundGreen.play();
}

function redLightAndSound() {
    $(redPad).addClass('red-light')
    setTimeout(function() {
        $(redPad).removeClass('red-light')
    }, 400);
    let soundRed = $('#sound-red')[0];
    soundRed.currentTime = 0;
    soundRed.play();
}

function yellowLightAndSound() {
    $(yellowPad).addClass('yellow-light')
    setTimeout(function() {
        $(yellowPad).removeClass('yellow-light')
    }, 400);
    let soundYellow = $('#sound-yellow')[0];
    soundYellow.currentTime = 0;
    soundYellow.play();
}

function blueLightAndSound() {
    $(bluePad).addClass('blue-light')
    setTimeout(function() {
        $(bluePad).removeClass('blue-light')
    }, 400);
    let soundBlue = $('#sound-blue')[0];
    soundBlue.currentTime = 0;
    soundBlue.play();
}

function checking() {
    if (playerSequence[playerSequence.length] !== sequence[playerSequence.length]) {
        console.log('yes')
    }
    else {
        console.log('no')
    }
}

