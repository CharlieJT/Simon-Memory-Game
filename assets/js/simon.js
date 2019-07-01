// Variables

let sequence = [];
let playerSequence = [];
let computerCount, playerCount, turn, correct, compGo, win;
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
    gamePlay();
}

function initialGameSettings() {
    sequence = [];
    turn = 0;
}

function randomNumber() {
    randomNum = Math.ceil(Math.random() * 4);
    sequence.push(randomNum);
    console.log(sequence);
}

function gamePlay() {
    turn++;
    playerCount = 0;
    computerCount = 0;
    playerSequence = [];
    var playInterval = setInterval(function() {
        if (sequence.length === computerCount) {
            clearInterval(playInterval)
        }
        if (sequence[computerCount] === 1) {
            greenLightAndSound();
        }
        if (sequence[computerCount] === 2) {
            redLightAndSound();
        }
        if (sequence[computerCount] === 3) {
            yellowLightAndSound();
        }
        if (sequence[computerCount] === 4) {
            blueLightAndSound();
        }
        computerCount++;
    }, 800);
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
    playerCount++;
    if (playerSequence[playerCount - 1] == sequence[playerCount - 1]) {
        if (playerSequence.length == turn) {
            randomNumber();
            $(numDisplay).text(playerCount - 1);
            setTimeout(gamePlay, 1000);
        };
    }
}
