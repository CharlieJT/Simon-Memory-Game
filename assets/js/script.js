// Variables

var playerSeq = [];
var compSeq = [];
var id, color, lvl = 0; // id, color & lvl are all initialised at 0
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
    
    $(".pad").on("click", function() {
        id = $(this).attr("id");
        color = $(this).attr("class").split(" ")[1];
        playerSeq.push(id);
        console.log(id+" "+color);
        addSoundClass(id, color);
        // Checking person sequence
        if (!personCorrect()) {
            showError();
            playerSeq = [];
        }
        // End of Sequence
        if (playerSeq.length == compSeq.length) {
            lvl++;
            playerSeq = [];
            startPlay();
        }
    })
});

// Computer Sequence.
function startPlay() {
    console.log(lvl);
    $(".num-display").text(lvl);
    // getRandomNumber();
    var i = 0;
    var myInterval = setInterval(function () {
        id = compSeq[i];
        color = $("#"+id).attr("class").split(" ")[1];
        console.log(id+" "+color)
        addSoundClass(id, color);
        i++;
        if (i == compSeq.length) {
            i = 0;
            clearInterval(myInterval);
        }
    }, 1000);
}

// A Random number is generated
function getRandomNumber() {
    var random = Math.floor(Math.random() * 4);
    compSeq.push(random);
}

// A Light & sound will be generated
function addSoundClass(id, color) {
    $("#"+id).addClass(color+"-light");
    soundGenerate();
    setTimeout(function() {
      $("#"+id).removeClass(color+"-light");  
    }, 500);
}

function soundGenerate() {
    
};