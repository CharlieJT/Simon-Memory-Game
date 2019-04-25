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

// buttons, number display & pads targetted as variables using jQuery

const numDisplay = document.getElementById("number-counter");
const greenPad = document.getElementById("0");
const redPad = document.getElementById("1");
const yellowPad = document.getElementById("2");
const bluePad = document.getElementById("3");
const startButton = document.getElementById("start");
const strictButton = document.getElementById("strict")

// Event Listener checks to see if strict slider is true or false when clicked
strictButton.addEventListener('click', (event) => {
    if (strictButton.checked == true) {
        strict = true;
    } else {
        strict = false;
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
    for (var i = 0; i < turn; i++) {
        sequence.push(Math.floor(Math.random()* 4) +1);
    }
    compTurn = true;
}