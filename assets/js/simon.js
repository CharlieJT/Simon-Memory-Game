// Variables

let sequence = [];
let playerSequence = [];
let playInterval, playTimeout, computerCount, playerCount, turn;
let strictMode = true;

// Buttons, number displays, pads & modals targetted as variables using JQuery.

const numDisplay = document.getElementById("number-counter");
const pad = document.getElementsByClassName('pad');
const greenPad = document.getElementById("1");
const redPad = document.getElementById("2");
const yellowPad = document.getElementById("3");
const bluePad = document.getElementById("4");
const startButton = document.getElementById("start");
const strictSwitch = document.getElementById("strict");
const modalScroll = document.getElementById('modal-scroll');
const startModal = document.getElementById("start-modal-button");
const startWinModal = document.getElementById("start-modal-win-button");
const loseModalDisplay = document.getElementById("lose-modal-display");
const winModalDisplay = document.getElementById("win-modal-display");

// Whatever code is written inside the JQuery ready method will run once the page Document Object Modal (DOM) is ready to execute JavaScript code.

$(document).ready(function() {

    // jQuery function to allow modal scroll icon to scroll down upon click.

    $(modalScroll).on('click', function(e) {
        var linkHref = $(this).attr('href');
        e.preventDefault();
        $('.modal-body').animate({
            scrollTop: $(linkHref).offset().top
        }, 1000);
    });

    /* 
    The startButtonClick function is assigned to each of these 3 click functions to allow the player
    to begin a new game upon clicking each of the buttons
    */

    $(startButton).click(function() {
        startButtonClick();
    });

    $(startModal).on("click", function() {
        startButtonClick();
    });

    $(startWinModal).on("click", function() {
        startButtonClick();
    });

    /*
    jQuery function to check to see if strict slider is true or false when the slider is clicked.
    If strict mode is true, it will return everything back to default setting ready to begin a new game.
    */

    $(strictSwitch).on("click", function() {
        if (strictSwitch.checked == true) {
            strictMode = true;
            turn = 1;
            $(".pad").addClass('disabled');
            clearInterval(playInterval);
            if ($(numDisplay).text() == "-") {
                $(numDisplay).text("-");
            }
            else {
                $(numDisplay).text("0");
            }
            setTimeout(function() {
                removeLightOnAllPads();
            }, 600);
        }
        else {
            strictMode = false;
        }
    });

    /* 
    Events taking place when each of the pads are clicked using jQuery.
    On click on each of the pads, it will push a number into the player sequence array depending on which has been clicked.
    It then runs a light & sound function depending on colour.
    */

    $(pad).click(function() {
        clearTimeout(playTimeout);
        removeLightOnAllPads();
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

/*
Function to allow the player to begin a new game, this will set everything back to default settings
and generate the first sequence of the game.
*/

function startButtonClick() {
    clearInterval(playInterval);
    removeLightOnAllPads();
    $(numDisplay).text('0');
    sequence = [];
    turn = 0;
    $(".pad").addClass('disabled');
    randomNumber();
    gamePlay();
}

/*
This function will select a number at random from 1 to 4 and push that number into the sequence array
*/

function randomNumber() {
    randomNum = Math.ceil(Math.random() * 4);
    sequence.push(randomNum);
    console.log(sequence);
}

/* 
function is run when it's the computers turn to generate a sequence.
The turn will increment the turn by 1, set the player count and the computer count back to 0
and set the player sequence back to an empty string.
the player interval of 800 milliseconds is then ran which holds a switch statement that will
check each of the numbers inside of the sequence array, it will produce a sound and light depending which number
has been found in the switch statement & break after each avoiding each light and sound playing on the previous
pad that's been selected. The number of times this will be ran is the number value of the computerCount.
When the array 'sequence' length matches the computer count it will then stop the play interval and allow
the player to start clicking.
The computer count is then incremented by 1.
*/

function gamePlay() {
    turn++;
    playerCount = 0;
    computerCount = 0;
    playerSequence = [];
    playInterval = setInterval(function() {
        
        switch (sequence[computerCount]) {
            case 1:
                greenLightAndSound();
                break;
            case 2:
                redLightAndSound();
                break;
            case 3:
                yellowLightAndSound();
                break;
            case 4:
                blueLightAndSound();
                break;
            default:
                break;
        }
        if (sequence.length === computerCount) {
            clearInterval(playInterval);
            $(".pad").removeClass('disabled');
        }
        computerCount++;
    }, 800);
}

/* 
These 4 Functions are where the sounds & lights are being generated.
*/

function greenLightAndSound() {
    $(greenPad).addClass('green-light')
    playerTimeout();
    soundGenerate('green');
}

function redLightAndSound() {
    $(redPad).addClass('red-light')
    playerTimeout();
    soundGenerate('red');
}

function yellowLightAndSound() {
    $(yellowPad).addClass('yellow-light')
    playerTimeout();
    soundGenerate('yellow');
}

function blueLightAndSound() {
    $(bluePad).addClass('blue-light')
    playerTimeout();
    soundGenerate('blue');
}

/* 
Function where the light of all of the pads are being removed, this has a timeout function that will
remove all lights after 400 milliseconds.
*/

function playerTimeout() {
    playTimeout = setTimeout(function() {
        removeLightOnAllPads();
    }, 400);
}

/*
Function where all of the sounds are generated. This takes an argument of soundPerformed and wherever the function
is called, it will take the argument of whatever sound needs to be implemented after 'sound-'.
*/

function soundGenerate(soundPerformed) {
    let sound = $(`#sound-${soundPerformed}`)[0];
    sound.currentTime = 0;
    sound.play();
}

/* 
This returns all of the colours back to their original state from being flashed by removing
class name through jQuery. 
*/

function removeLightOnAllPads() {
    $(greenPad).removeClass("green-light");
    $(redPad).removeClass("red-light");
    $(yellowPad).removeClass("yellow-light");
    $(bluePad).removeClass("blue-light");
}

// This will flash all of the colours at the same time using jQuery.

function addLightsToAllPads() {
    $(greenPad).addClass("green-light");
    $(redPad).addClass("red-light");
    $(yellowPad).addClass("yellow-light");
    $(bluePad).addClass("blue-light");
}

/* 
Function to order game over modal to appear with final score when the game is lost.
This will show the modal & show the final score using jQuery.
*/

function displayModal() {
    $('#loseModal').modal('show');
    $(loseModalDisplay).text(turn);
}



function checking() {
    playerCount++;
    let playerAndCompMatch = playerSequence[playerCount - 1] === sequence[playerCount - 1];
    let playerAndCompDontMatch = playerSequence[playerCount - 1] !== sequence[playerCount - 1];
    if (playerCount === 20 && strictMode === true && playerAndCompMatch) {
        clearInterval(playInterval);
        $(".pad").addClass('disabled');
        winGame();
    }
    else if (playerAndCompMatch) {
        if (playerSequence.length === turn) {
            randomNumber();
            $(".pad").addClass('disabled');
            $(numDisplay).text(playerCount);
            setTimeout(gamePlay, 500);
        }
    }
    else if (playerAndCompDontMatch && strictMode === false) {
        $(".pad").addClass('disabled');
        turn--;
        console.log(playerCount);
        soundGenerate('lost');
        $(numDisplay).text('Try');
        addLightsToAllPads();
        setTimeout(function() {
            removeLightOnAllPads();
            $(numDisplay).text('Again');
            setTimeout(function() {
                $(numDisplay).text(turn);
                setTimeout(gamePlay, 500);
            }, 600);
        }, 600);
    }
    else {
        $(".pad").addClass('disabled');
        soundGenerate('lost');
        $(numDisplay).text('Lose');
        addLightsToAllPads();
        setTimeout(function() {
            removeLightOnAllPads();
            setTimeout(function() {
                $(numDisplay).text(turn);
                displayModal();
            }, 600);
        }, 400);
    }
}

/* 
This is called when the player wins the game. This will display "WIN!"
in the number display a win modal with the maximum score.
*/

function winGame() {
    turn++;
    $(numDisplay).text(turn - 1);
    $(numDisplay).text("WIN!");
    clearTimeout(playerTimeout);
    addLightsToAllPads();
    setTimeout(function() {
        setTimeout(function() {
            $(winModalDisplay).text(turn - 1);
            $('#winModal').modal('show');
            soundGenerate('win');
        }, 700);
    }, 700);
}
