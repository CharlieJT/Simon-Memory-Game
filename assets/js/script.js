let playerSeq = [];
let compSeq = [];
let lvl = 0;
let greenSound = document.getElementById("green-audio"); //for audio
let redSound = document.getElementById("red-audio");
let yellowSound = document.getElementById("yellow-audio");
let blueSound = document.getElementById("blue-audio");
let gameOverSound = document.getElementById("game-over");


// Initialising sequence.
$(document).ready(function() {
    $(".start-btn").on("click", function() {
        lvl++;
       startPlay(); 
    });
});

// Computer Sequence.
function startPlay() {
    $(".num-display").text(lvl);
}

function getRandomNumber() {
    
}