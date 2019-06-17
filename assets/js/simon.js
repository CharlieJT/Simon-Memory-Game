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

$('.pad').click(function() {
    
    if ($(this).attr('id') == 0) {
        green();
    }
    if ($(this).attr('id') == 1) {
        red();
    }
    if ($(this).attr('id') == 2) {
        yellow();
    }
    if ($(this).attr('id') == 3) {
        blue();
    }
});

function green() {
    $(greenPad).addClass('green-light')
    setTimeout(function() {
        $(greenPad).removeClass('green-light')
    }, 300);
}
function red() {
    $(redPad).addClass('red-light')
    setTimeout(function() {
        $(redPad).removeClass('red-light')
    }, 300);
}
function yellow() {
    $(yellowPad).addClass('yellow-light')
    setTimeout(function() {
        $(yellowPad).removeClass('yellow-light')
    }, 300);
}

function blue() {
    $(bluePad).addClass('blue-light')
    setTimeout(function() {
        $(bluePad).removeClass('blue-light')
    }, 300);
}