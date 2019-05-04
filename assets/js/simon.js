// Variables

let sequence = [];
let playerSequence = [];
let light;
let turn;
let correct;
let compTurn;
let intervalId;
let strictMode = true;
let sound = true;

// buttons, number displays & pads targetted as variables using jQuery.

const numDisplay = document.getElementById("number-counter");
const greenPad = document.getElementById("0");
const redPad = document.getElementById("1");
const yellowPad = document.getElementById("2");
const bluePad = document.getElementById("3");
const startButton = document.getElementById("start");
const strictButton = document.getElementById("strict");
const startModal = document.getElementById("start-modal-button");
const scoreModalDisplay = document.getElementById("score-modal-display");

// Using a jQuery function to check to see if strict slider is true or false when the slider is clicked.

$(strictButton).on("click", function() {
    if (strictButton.checked == true) {
        strictMode = true;
    }
    else {
        strictMode = false;
    }
});

// jQuery function to initialise game when start button is clicked.

$(startButton).on("click", function() {
    clearInterval(intervalId);
    play();
});

// jQuery function to initialise game when start button in score modal is clicked.

$(startModal).on("click", function() {
    clearInterval(intervalId);
    play();
});

// Default play setting. This targets the game play so that is ready to begin a new sequence.

function play() {
    sequence = [];
    playerSequence = [];
    getRandomNumber();
    light = 0;
    intervalId = 0;
    turn = 1;
    $(numDisplay).text("0");
    correct = true;
    compTurn = true;
    intervalId = setInterval(gameTurn, 800);
}

// Gets a random number & pushes into the sequence.

function getRandomNumber() {
    sequence.push(Math.floor(Math.random() * 4) + 1);
}

/* 
An action taking place whether it's the player's turn or the computer's turn.
When the amount of flashes then matches the turn number. The computer sequence stops, ensures all colours are cleared & sequence is logged to the console.
Whilst the computer is producing a sequence, it checks sequence light id & applies the light & sound function to each one accordingly.
A disable class is added to the timeout using jQuery to stop any clicking action on the pads whilst computer is generating a sequence.
The disable class is then removed after a set time which then allows player to then click.
*/

function gameTurn() {
    if (light == turn) {
        clearInterval(intervalId);
        compTurn = false;
        clearColor();
        console.log(sequence);
    }
    else if (compTurn) {
        clearColor();
        setTimeout(function() {
            if (sequence[light] == 1) green();
            if (sequence[light] == 2) red();
            if (sequence[light] == 3) yellow();
            if (sequence[light] == 4) blue();
            light++;
            $(".pad").addClass('disabled');
        }, 300);
    }
    setTimeout(function() {
        $(".pad").removeClass('disabled');
    }, 299);
}

/* 
Sounds & Lights being generated for each color.
This is done by selecting the sound through jQuery & running a play function.
Also, a class is added through jQuery to give it the light effect.
*/

function green() {
    if (sound) {
        let audio = document.getElementById("sound-green");
        audio.currentTime = 0;
        audio.play();
    }
    sound = true;
    $(greenPad).addClass("green-light");
}

function red() {
    if (sound) {
        let audio = document.getElementById("sound-red");
        audio.currentTime = 0;
        audio.play();
    }
    sound = true;
    $(redPad).addClass("red-light");
}

function yellow() {
    if (sound) {
        let audio = document.getElementById("sound-yellow");
        audio.currentTime = 0;
        audio.play();
    }
    sound = true;
    $(yellowPad).addClass("yellow-light");
}

function blue() {
    if (sound) {
        let audio = document.getElementById("sound-blue");
        audio.currentTime = 0;
        audio.play();
    }
    sound = true;
    $(bluePad).addClass("blue-light");
}

// This returns all of the colours back to their original state from being flashed by removing class name through jQuery. 

function clearColor() {
    $(greenPad).removeClass("green-light");
    $(redPad).removeClass("red-light");
    $(yellowPad).removeClass("yellow-light");
    $(bluePad).removeClass("blue-light");
}

//  This will flash all of the colours at the same time using jQuery.

function lightAllColors() {
    $(greenPad).addClass("green-light");
    $(redPad).addClass("red-light");
    $(yellowPad).addClass("yellow-light");
    $(bluePad).addClass("blue-light");
}

/* 
Function to order game over modal to appear with final score.
This will show the modal & show the final score using jQuery.
*/
function displayModal() {
    $('#scoresModal').modal('show');
    $(scoreModalDisplay).text((turn) - 1);
}


/* 
Events taking place when each of the pads are clicked using jQuery.
On click on each of the pads, it will push a number into the player sequence array depending on which has been clicked.
It then runs a light & sound function depending on colour.
Then it will clear colour after a set time.
*/

$(greenPad).on("click", function() {
    playerSequence.push(1);
    check();
    green();
    setTimeout(function() {
        clearColor();
    }, 300);
});

$(redPad).on("click", function() {
    playerSequence.push(2);
    check();
    red();
    setTimeout(function() {
        clearColor();
    }, 300);
});

$(yellowPad).on("click", function() {
    playerSequence.push(3);
    check();
    yellow();
    setTimeout(function() {
        clearColor();
    }, 300);
});

$(bluePad).on("click", function() {
    playerSequence.push(4);
    check();
    blue();
    setTimeout(function() {
        clearColor();
    }, 300);
});


/* Checking to see if sequences are correct or wrong.
If player sequence is not the same as computer sequence, correct will return as false.
If correct is false, this will mean you've lost & you will get back "Lose!" in the number display.
A lose sound with a flashing of all of the lights will be produced. 
Pads are also disabled using jQuery.
*/

/*
A timeout has been set up on lose for after 800 milliseconds. which will clear all colours & display the turn number as your score in the number display.
Being in strict mode as default, it will disable all of the pads & produce a modal with your final score.
If strict mode has been turned off, then it will repeat the previous sequence again.
*/

/*
If player sequence matches turn count & is correct then, turn count will increase by 1, an extra number is added to sequence array & will begin the computer sequence again.
*/
function check() {
    if (playerSequence[playerSequence.length - 1] !== sequence[playerSequence.length - 1]) {
        correct = false;
    }
    if (correct == false) {
        lightAllColors();
        $(numDisplay).text("Lose!");
        sound = false;
        let audio = document.getElementById("sound-lost");
        audio.play();
        $(".pad").addClass('disabled');

        setTimeout(function() {
            $(numDisplay).text((turn) - 1);
            clearColor();
            if (strictMode) {
                $(".pad").addClass('disabled');
                displayModal();
            }
            else {
                compTurn = true;
                light = 0;
                playerSequence = [];
                correct = true;
                intervalId = setInterval(gameTurn, 800);
            }
        }, 800);
    }
    else if (turn == playerSequence.length && correct) {
        turn++;
        playerSequence = [];
        getRandomNumber();
        compTurn = true;
        light = 0;
        $(numDisplay).text((turn) - 1);
        $(".pad").addClass('disabled');
        intervalId = setInterval(gameTurn, 800);
    }
}
