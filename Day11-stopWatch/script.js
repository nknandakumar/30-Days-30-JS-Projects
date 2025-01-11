let displayTimer = document.getElementById('timer');
let stopBtn = document.getElementById('stop');
let startBtn = document.getElementById('start');
let [hour,  minute, seconds] = [0,0,0]
let timer= null ;

function stopWatch(){
    seconds++
    if(seconds == 60) {
        seconds = 0 ;
        minute++
        if(minute == 60) {
            minute= 0;
             hour++;
        }
    }

    displayTimer.innerHTML = `${hour<10?"0"+hour:hour}:${minute<10?`0${minute}`:minute}:${seconds.toString().padStart(2,"0")}` ;
}

function start(){
if (timer!=null) {
   clearInterval(timer) 
}
timer = setInterval(stopWatch,1000);
startBtn.style.cursor = "no-drop" ;
stopBtn.style.cursor = "pointer" ;
}
 
function stop(){
clearInterval(timer) ;
stopBtn.style.cursor = "no-drop" ;
startBtn.style.cursor = "pointer" ;
}

function reset(){
clearInterval(timer) ;
[hour,  minute, seconds] = [0,0,0];
displayTimer.innerHTML = "00:00:00"
stopBtn.style.cursor = "no-drop" ;
startBtn.style.cursor = "pointer" ;
}