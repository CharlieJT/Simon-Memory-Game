// Variables

let sequence = [];
let playerSequence = [];
let light;
let turn;
let correct;
let compTurn;
let intervalId;
let strictMode = false;
let sound = true;
let on = false;

// buttons, number display & pads targetted as variables using jQuery

const numDisplay = document.getElementById("number-counter");
const greenPad = document.getElementById("0");
const redPad = document.getElementById("1");
const yellowPad = document.getElementById("2");
const bluePad = document.getElementById("3");
const startButton = document.getElementById("start");
const strictButton = document.getElementById("strict");

// Event Listener checks to see if strict slider is true or false when clicked
strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
        strictMode = true;
    }
    else {
        strictMode = false;
    }
});

// Event Listener initialisation when start button is clicked
startButton.addEventListener('click', (event) => {
    play();
});

// Default play setting
function play() {
    sequence = [];
    playerSequence = [];
    light = 0;
    intervalId = 0;
    turn = 1;
    numDisplay.innerHTML = "1";
    correct = true;
    for (var i = 0; i < 20; i++) {
        sequence.push(Math.floor(Math.random() * 4) + 1);
    }
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}

// An action taking place whether it's the player's turn or the computer's turn
function gameTurn() {
    on = false;
    if (light == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        on = true;
    }
    if (compTurn) {
        clearColor();
        setTimeout(function() {
            if (sequence[light] == 1) green();
            if (sequence[light] == 2) red();
            if (sequence[light] == 3) yellow();
            if (sequence[light] == 4) blue();
        }, 200);
        light++;
    }
}

// Sounds & Lights being generated for each color

function green() {
    if (sound) {
        let audio = document.getElementById("sound-green");
        audio.play();
    }
    sound = true;
    $(greenPad).addClass("green-light");
}

function red() {
    if (sound) {
        let audio = document.getElementById("sound-red");
        audio.play();
    }
    sound = true;
    $(redPad).addClass("red-light");
}

function yellow() {
    if (sound) {
        let audio = document.getElementById("sound-yellow");
        audio.play();
    }
    sound = true;
    $(yellowPad).addClass("yellow-light");
}

function blue() {
    if (sound) {
        let audio = document.getElementById("sound-blue");
        audio.play();
    }
    sound = true;
    $(bluePad).addClass("blue-light");
}

// This returns all of the colours back to their original state from being flashed
function clearColor() {
    $(greenPad).removeClass("green-light");
    $(redPad).removeClass("red-light");
    $(yellowPad).removeClass("yellow-light");
    $(bluePad).removeClass("blue-light");
}

// Events taking place when each of the pads are clicked
greenPad.addEventListener('click', (event) => {
    playerSequence.push(1);
    green();
    setTimeout(function() {
        clearColor();
    }, 300);
});

redPad.addEventListener('click', (event) => {
    playerSequence.push(2);
    red();
    setTimeout(function() {
        clearColor();
    }, 300);
});

yellowPad.addEventListener('click', (event) => {
    playerSequence.push(3);
    yellow();
    setTimeout(function() {
        clearColor();
    }, 300);
});

bluePad.addEventListener('click', (event) => {
    playerSequence.push(4);
    blue();
    setTimeout(function() {
        clearColor();
    }, 300);
});
