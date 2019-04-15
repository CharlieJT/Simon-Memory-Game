// Variables

var playerSeq = [];
var compSeq = [];
var id, color, lvl, i = 0;
var greenSound = document.getElementById("sound-green"); //for audio
var redSound = document.getElementById("sound-red");
var yellowSound = document.getElementById("sound-yellow");
var blueSound = document.getElementById("sound-blue");
var gameOverSound = document.getElementById("sound-lost");


// Initialising sequence.
$(document).ready(function() {
    $(".start-btn").on("click", function() {
        lvl++;
        startPlay();
    });
});

// Computer Sequence.
function startPlay() {
    console.log(lvl);
    $(".num-display").text(lvl);
    getRandomNumber();
    var myInterval = setInterval(function () {
        id = compSeq[i];
        color = $("#"+id).attr("class").split(" ")[1];
        console.log(id+" "+color)
        addSoundClass(id, color);
    }, 1000);
}

function getRandomNumber() {
    var random = Math.floor(Math.random() * 4);
    compSeq.push(random);
}

function addSoundClass(id, color) {
    $("#"+id).addClass(color+"active");
    setTimeout(function() {
      $("#"+id).removeClass(color+"active");  
    }, 500);
}