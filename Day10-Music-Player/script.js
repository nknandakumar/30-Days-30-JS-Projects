let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrl = document.getElementById("ctrlIcon");
let playPauseIcon = document.getElementById("playPauseIcon");

song.onloadedmetadata = function () {
    progress.max = song.duration;
    progress.value = song.currentTime;
};

function playPause() {
    if (playPauseIcon.classList.contains("fa-pause")) {
        song.pause();
        playPauseIcon.classList.remove("fa-pause");
        playPauseIcon.classList.add("fa-play");
    } else {
        song.play();
        playPauseIcon.classList.add("fa-pause");
        playPauseIcon.classList.remove("fa-play");
    }
}

if (!song.paused) {
    setInterval(() => {
        progress.value = song.currentTime;
    }, 500);
}
 
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    playPauseIcon.classList.add("fa-pause");
    playPauseIcon.classList.remove("fa-play");
}