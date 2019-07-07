// Variables

let sequence = [];
let playerSequence = [];
let strictMode = true;
let playInterval, playTimeout, computerCount, playerCount, turn;

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
    The startButtonClick jQuery function is assigned to each of these 3 click functions to allow the player
    to begin a new game upon clicking each of the buttons.
    */

    $(startButton).click(function() {
        initializeGame();
    });

    $(startModal).on("click", function() {
        initializeGame();
    });

    $(startWinModal).on("click", function() {
        initializeGame();
    });

    /*
    jQuery function to check to see if the strict slider is true or false when the slider is clicked.
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
    Events taking place when each of the pads is clicked using jQuery.
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

function initializeGame() {
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
This function will select a number at random from 1 to 4 and push that number into the sequence array.
*/

function randomNumber() {
    randomNum = Math.ceil(Math.random() * 4);
    sequence.push(randomNum);
    console.log(sequence);
}

/* 
The Function is run when it's the computers turn to generate a sequence.
The turn will increment the turn by 1, set the player count and the computer count back to 0
and set the player sequence back to an empty string.
the player interval of 800 milliseconds is then run which holds a switch statement that will
check each of the numbers inside of the sequence array, it will produce a sound and light depending on which number
has been found in the switch statement & break after each avoiding each light and sound playing on the previous
pad that's been selected. The number of times this will be run is the number value of the computer count.
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
These 4 functions are where the sounds & lights are being generated.
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
This function where the light of all of the pads are being removed, this has a timeout function that will
remove all lights after 400 milliseconds.
*/

function playerTimeout() {
    playTimeout = setTimeout(function() {
        removeLightOnAllPads();
    }, 400);
}

/*
This function where all of the sounds are generated. This takes an argument of 'soundPerformed' and wherever the function
is called, it will take the argument of whatever sound needs to be implemented after 'sound-'.
*/

function soundGenerate(soundPerformed) {
    let sound = $(`#sound-${soundPerformed}`)[0];
    sound.currentTime = 0;
    sound.play();
}

/* 
This function returns all of the colours back to their original state from being flashed by removing
the light class name through jQuery. 
*/

function removeLightOnAllPads() {
    $(greenPad).removeClass("green-light");
    $(redPad).removeClass("red-light");
    $(yellowPad).removeClass("yellow-light");
    $(bluePad).removeClass("blue-light");
}

// This function will flash all of the colours at the same time using jQuery.

function addLightsToAllPads() {
    $(greenPad).addClass("green-light");
    $(redPad).addClass("red-light");
    $(yellowPad).addClass("yellow-light");
    $(bluePad).addClass("blue-light");
}

/* 
This function is to order a game over modal to appear with the final score when the game is lost.
This will show the modal & show the final score using jQuery.
*/

function displayModal() {
    $('#loseModal').modal('show');
    $(loseModalDisplay).text(turn);
}

/*
This is the function which does the entire checking of the game, this will increment the player count and has two variables assigned
which checks if the player sequence and computer sequence match and player sequence and computer sequence don't match.
This will then apply an if statement to check each of the possible scenarios during the game and implement an
outcome accordingly.
*/

function checking() {
    playerCount++;
    let playerAndCompSeqMatch = playerSequence[playerCount - 1] === sequence[playerCount - 1];
    let playerAndCompSeqDontMatch = playerSequence[playerCount - 1] !== sequence[playerCount - 1];
    /* 
    This if statement checks if the player has got to the 20th play count, strict mode is true and
    the player sequence array matches the computer sequence array. if so then the play interval is stopped,
    the pads are disabled and the winning function is run.
    */
    if (playerCount === 20 && strictMode && playerAndCompSeqMatch) {
        clearInterval(playInterval);
        $(".pad").addClass('disabled');
        winGame();
    }
    /* 
    This statement checks to see if the player sequence array matches the computer sequence array. If it does,
    then a new random number is pushed into the computer array, pads are displayed, number display is updated
    to a new score and gameplay is then run on a set timeout.
    */
    else if (playerAndCompSeqMatch) {
        if (playerSequence.length === turn) {
            randomNumber();
            $(".pad").addClass('disabled');
            $(numDisplay).text(playerCount);
            setTimeout(gamePlay, 500);
        }
    }
    /* 
    This statement checks to see if the player sequence array doesn't match with the computer sequence array and strict
    mode is not active, it will disable the pads, switch the turn back to the previous turn and light all pads,
    this will then produce a losing sound along with "Try Again" displaying on the number display with a set timeout
    function to split each word, it will then remove all of the colours on the pads after a set timeout of 400 milliseconds,
    display the current score after a set timeout of 600 seconds and re-run the previous sequence again with the set timeout function.
    */
    else if (playerAndCompSeqDontMatch && !strictMode) {
        $(".pad").addClass('disabled');
        turn--;
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
    /* 
    With the only other option being to have the player sequence array not matching the computer sequence array and
    strict mode to be true, an else statement is then implemented to say the game has been lost in strict mode.
    This will disable the pads, produce a losing sound, display "lost" in the number display and make all pad flash.
    the flash is removed after a set timeout of 400 milliseconds. Then after 600 milliseconds, it will display a losing,
    modal informing the player of their score and display the score in the number display.
    */
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
Function generated when the player wins the game. This will change the number display to say "WIN!",
flash all pads and stop the player timeout to avoid the player timeout to carry on running and
interrupting the lights generated by the pads all flashing. This will then set a timeout of 1400 milliseconds
to generate a winning noise and display the winning modal with the maximum score.
*/

function winGame() {
    $(numDisplay).text("WIN!");
    clearTimeout(playerTimeout);
    addLightsToAllPads();
    setTimeout(function() {
        $(winModalDisplay).text(turn);
        $('#winModal').modal('show');
        soundGenerate('win');
    }, 1400);
}
