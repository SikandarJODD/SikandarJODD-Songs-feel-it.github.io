var audio = document.getElementById('audio-1');
var playPauseBTN = document.getElementById('playPauseBTN');
var count = 0;
function playpause() {
    if (count == 0) {
        count = 1;
        audio.play();
        playPauseBTN.innerHTML = "Pause &#9208;";
    }
    else {
        count = 0;
        audio.pause();
        playPauseBTN.innerHTML = "Play &#9211;";
    }
}
function stop() {
    playpause();
    audio.pause();
    audio.currentTime = 0;
    playPauseBTN.innerHTML = "Play &#9211;";
}
// Song 2 
var audio1 = document.getElementById('audio-2');
var playPauseBTN1 = document.getElementById('playPauseBTN2');
var count1 = 0;
function playpause1() {
    if (count1 == 0) {
        count1 = 1;
        audio1.play();
        playPauseBTN1.innerHTML = "Pause &#9208;";
    }
    else {
        count1 = 0;1
        audio1.pause();
        playPauseBTN1.innerHTML = "Play &#9211;";
    }
}
function stop1() {
    playpause1();
    audio1.pause();
    audio1.currentTime = 0;
    playPauseBTN1.innerHTML = "Play &#9211;";
}
// Song 3
var audio3 = document.getElementById('audio-3');
var playPauseBTN3 = document.getElementById('playPauseBTN3');
function playpause3() {
    if (count == 0) {
        count = 1;
        audio3.play();
        playPauseBTN3.innerHTML = "Pause &#9208;";
    }
    else {
        count = 0;
        audio3.pause();
        playPauseBTN3.innerHTML = "Play &#9211;";
    }
}
function stop3() {
    playpause3();
    audio3.pause();
    audio3.currentTime = 0;
    playPauseBTN3.innerHTML = "Play &#9211;";
}
// Song 4
var audio4 = document.getElementById('audio-4');
var playPauseBTN4 = document.getElementById('playPauseBTN4');
var count = 0;
function playpause4() {
    if (count == 0) {
        count = 1;
        audio4.play();
        playPauseBTN4.innerHTML = "Pause &#9208;";
    }
    else {
        count = 0;
        audio4.pause();
        playPauseBTN4.innerHTML = "Play &#9211;";
    }
}
function stop4() {
    playpause4();
    audio4.pause();
    audio4.currentTime = 0;
    playPauseBTN4.innerHTML = "Play &#9211;";
}
// Song 5
var audio5 = document.getElementById('audio-5');
var playPauseBTN5 = document.getElementById('playPauseBTN5');
var count = 0;
function playpause5() {
    if (count == 0) {
        count = 1;
        audio5.play();
        playPauseBTN5.innerHTML = "Pause &#9208;";
    }
    else {
        count = 0;
        audio5.pause();
        playPauseBTN5.innerHTML = "Play &#9211;";
    }
}
function stop5() {
    playpause5();
    audio5.pause();
    audio5.currentTime = 0;
    playPauseBTN5.innerHTML = "Play &#9211;";
}
// song 6
var audio6 = document.getElementById('audio-6');
var playPauseBTN6 = document.getElementById('playPauseBTN6');
var count = 0;
function playpause6() {
    if (count == 0) {
        count = 1;
        audio6.play();
        playPauseBTN6.innerHTML = "Pause &#9208;";
    }
    else {
        count = 0;
        audio6.pause();
        playPauseBTN6.innerHTML = "Play &#9211;";
    }
}
function stop6() {
    playpause6();
    audio6.pause();
    audio6.currentTime = 0;
    playPauseBTN6.innerHTML = "Play &#9211;";
}
// song 7
var audio7 = document.getElementById('audio-7');
var playPauseBTN7 = document.getElementById('playPauseBTN7');
var counta = 0;
function playpause7() {
    if (counta == 0) {
        counta = 1;
        audio7.play();
        playPauseBTN7.innerHTML = "Pause &#9208;";
    }
    else {
        counta = 0;
        audio7.pause();
        playPauseBTN7.innerHTML = "Play &#9211;";
    }
}
function stop7() {
    playpause7();
    audio7.pause();
    audio7.currentTime = 0;
    playPauseBTN7.innerHTML = "Play &#9211;";
}
// song 8
var audio8 = document.getElementById('audio-8');
var playPauseBTN8 = document.getElementById('playPauseBTN8');
var counta = 0;
function playpause8() {
    if (counta == 0) {
        counta = 1;
        audio8.play();
        playPauseBTN7.innerHTML = "Pause &#9208;";
    }
    else {
        counta = 0;
        audio8.pause();
        playPauseBTN8.innerHTML = "Play &#9211;";
    }
}
function stop8() {
    playpause7();
    audio8.pause();
    audio8.currentTime = 0;
    playPauseBTN7.innerHTML = "Play &#9211;";
}