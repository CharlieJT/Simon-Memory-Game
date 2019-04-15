let playerSeq = [];
let compSeq = [];
let lvl = 0;

$(document).ready(function() {
    $(".startBtn").on("click", function() {
        lvl++;
       startPlay(); 
    });
});

function startPlay() {
    $(".numDisplay").text(lvl);
}