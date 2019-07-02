// Variables

let sequence = [];
let playerSequence = [];
let playInterval, computerCount, playerCount, turn, win;
let strictMode = true;

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
        clearInterval(playInterval);
        setTimeout(function() {
            startPlay();
        }, 500);
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
    $(".pad").addClass('disabled');
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
    playInterval = setInterval(function() {
        if (sequence.length === computerCount) {
            clearInterval(playInterval);
            $(".pad").removeClass('disabled');
        }
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
        computerCount++;
    }, 800);
}

function greenLightAndSound() {
    $(greenPad).addClass('green-light')
    setTimeout(function() {
        $(greenPad).removeClass('green-light')
    }, 400);
    soundGenerate('green');
}

function redLightAndSound() {
    $(redPad).addClass('red-light')
    setTimeout(function() {
        $(redPad).removeClass('red-light')
    }, 400);
    soundGenerate('red');
}

function yellowLightAndSound() {
    $(yellowPad).addClass('yellow-light')
    setTimeout(function() {
        $(yellowPad).removeClass('yellow-light')
    }, 400);
    soundGenerate('yellow');
}

function blueLightAndSound() {
    $(bluePad).addClass('blue-light')
    setTimeout(function() {
        $(bluePad).removeClass('blue-light')
    }, 400);
    soundGenerate('blue');
}

function soundGenerate(color) {
    let sound = $(`#sound-${color}`)[0];
    sound.currentTime = 0;
    sound.play();
}



function removeLightOnAllPads() {
    $(greenPad).removeClass("green-light");
    $(redPad).removeClass("red-light");
    $(yellowPad).removeClass("yellow-light");
    $(bluePad).removeClass("blue-light");
}

function addLightsToAllPads() {
    $(greenPad).addClass("green-light");
    $(redPad).addClass("red-light");
    $(yellowPad).addClass("yellow-light");
    $(bluePad).addClass("blue-light");
}

function displayModal() {
    $('#loseModal').modal('show');
    $(loseModalDisplay).text(turn);
}

function checking() {
    playerCount++;
    if (playerSequence[playerCount - 1] === sequence[playerCount - 1]) {
        if (playerSequence.length === turn) {
            randomNumber();
            $(".pad").addClass('disabled');
            $(numDisplay).text(playerCount);
            setTimeout(gamePlay, 500);
        };
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
