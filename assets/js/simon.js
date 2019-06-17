// Variables

let sequence = [];
let playerSequence = [];
let light, turn, correct, compTurn, intervalId, win;
let strictMode = true;
let sound = true;

// Buttons, number displays, pads & modals targetted as variables using JQuery.

const numDisplay = document.getElementById("number-counter");
const pad = document.getElementsByClassName('pad');
const greenPad = document.getElementById("0");
const redPad = document.getElementById("1");
const yellowPad = document.getElementById("2");
const bluePad = document.getElementById("3");
const startButton = document.getElementById("start");
const strictButton = document.getElementById("strict");
const startModal = document.getElementById("start-modal-button");
const startWinModal = document.getElementById("start-modal-win-button");
const loseModalDisplay = document.getElementById("lose-modal-display");
const winModalDisplay = document.getElementById("win-modal-display");

// Whatever code is written inside the JQuery ready method will run once the page Document Object Modal (DOM) is ready to execute JavaScript code.

$(document).ready(function() {
    $(startButton).click(function() {
        startPlay()
    });

    $('.pad').click(function() {
        let padId = $(this).attr('id');
        if (padId == 0) {
            greenLightAndSound();
        }
        if (padId == 1) {
            redLightAndSound();
        }
        if (padId == 2) {
            yellowLightAndSound();
        }
        if (padId == 3) {
            blueLightAndSound();
        }
    });
});

function startPlay() {
    randomNumber();
}

function randomNumber() {
    randomNum = Math.floor(Math.random() * 4)
    setTimeout(function() {
        if (randomNum == 0) {
            greenLightAndSound();
        }
        if (randomNum == 1) {
            redLightAndSound();
        }
        if (randomNum == 2) {
            yellowLightAndSound();
        }
        if (randomNum == 3) {
            blueLightAndSound();
        }
    console.log(randomNum)
    }, 500);
}

function greenLightAndSound() {
    $(greenPad).addClass('green-light')
    setTimeout(function() {
        $(greenPad).removeClass('green-light')
    }, 300);
    let soundGreen = $('#sound-green')[0];
    soundGreen.currentTime = 0;
    soundGreen.play();
}

function redLightAndSound() {
    $(redPad).addClass('red-light')
    setTimeout(function() {
        $(redPad).removeClass('red-light')
    }, 300);
    let soundRed = $('#sound-red')[0];
    soundRed.currentTime = 0;
    soundRed.play();
}

function yellowLightAndSound() {
    $(yellowPad).addClass('yellow-light')
    setTimeout(function() {
        $(yellowPad).removeClass('yellow-light')
    }, 300);
    let soundYellow = $('#sound-yellow')[0];
    soundYellow.currentTime = 0;
    soundYellow.play();
}

function blueLightAndSound() {
    $(bluePad).addClass('blue-light')
    setTimeout(function() {
        $(bluePad).removeClass('blue-light')
    }, 300);
    let soundBlue = $('#sound-blue')[0];
    soundBlue.currentTime = 0;
    soundBlue.play();
}
