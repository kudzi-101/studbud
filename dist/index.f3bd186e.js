/* SHOW AND HIDE TIMER TABS */ function openTab(event, content) {
    let i, tabContent, timerButtons;
    tabContent = document.getElementsByClassName("tabContent");
    for(i = 0; i < tabContent.length; i++)tabContent[i].style.display = "none";
    timerButtons = document.getElementsByClassName("timerButtons");
    for(i = 0; i < timerButtons.length; i++)timerButtons[i].className = timerButtons[i].className.replace("active", "");
    document.getElementById(content).style.display = "block";
    event.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();
/* STOPWATCH TIMER */ let milliSecond = 0;
let second = 0;
let minute = 0;
let hour = 0;
let milliSecondString = document.getElementById('milliSecond');
let secondString = document.getElementById('second');
let minuteString = document.getElementById('minute');
let hourString = document.getElementById('hour');
let startBttn = document.getElementById('start');
let stopBttn = document.getElementById('stop');
let resettBttn = document.getElementById('reset');
let interval;
function stopwatch() {
    milliSecond++;
    if (milliSecond == 100) {
        milliSecond = 0;
        second++;
        milliSecondString.innerHTML = milliSecond;
    }
    if (second == 60) {
        second = 0;
        minute++;
        secondString.innerHTML = second;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
        minuteString.innerHTML = minute;
    }
    if (milliSecond < 10) milliSecondString.innerHTML = '0' + milliSecond;
    else milliSecondString.innerHTML = milliSecond;
    if (second < 10) secondString.innerHTML = '0' + second;
    else secondString.innerHTML = second;
    if (minute < 10) minuteString.innerHTML = '0' + minute;
    else minuteString.innerHTML = minute;
    if (hour < 10) hourString.innerHTML = '0' + hour;
    else hourString.innerHTML = hour;
}
function startStopwatch() {
    clearInterval(interval);
    interval = setInterval(stopwatch, 10);
}
function stopStopwatch() {
    clearInterval(interval);
}
function resetStopwatch() {
    clearInterval(interval);
    milliSecond = 0;
    second = 0;
    minute = 0;
    hour = 0;
    milliSecondString.innerHTML = '00';
    secondString.innerHTML = '00';
    minuteString.innerHTML = '00';
    hourString.innerHTML = '00';
}
startBttn.addEventListener('click', startStopwatch);
stopBttn.addEventListener('click', stopStopwatch);
resettBttn.addEventListener('click', resetStopwatch);
/* POMODORO TIMER */ let Start = document.getElementById('Start');
let Stop = document.getElementById('Stop');
let Reset = document.getElementById('Reset');
let sMin = document.getElementById('sMinutes');
let sSec = document.getElementById('sSeconds');
let bMin = document.getElementById('bMinutes');
let bSec = document.getElementById('bSeconds');
let startPomodoro;
Start.addEventListener('click', function() {
    if (startPomodoro === undefined) startPomodoro = setInterval(pomodoro, 1000);
    else alert("timer is already running");
});
Stop.addEventListener('click', function() {
    stopInterval();
    startPomodoro = undefined;
});
Reset.addEventListener('click', function() {
    sMin.innerText = 25;
    sSec.innerText = "00";
    bMin.innerText = 5;
    bSec.innerText = "00";
    document.getElementById('counter').innerText = 0;
    stopInterval();
    startPomodoro = undefined;
});
function pomodoro() {
    if (sSec.innerText != 0) sSec.innerText--;
    else if (sMin.innerText != 0 && sSec.innerText == 0) {
        sSec.innerText = 59;
        sMin.innerText--;
    }
    if (sMin.innerText == 0 && sSec.innerText == 0) {
        if (bSec.innerText != 0) bSec.innerText--;
        else if (bMin.innerText != 0 && bSec.innerText == 0) {
            bSec.innerText = 59;
            bMin.innerText--;
        }
    }
    if (sMin.innerText == 0 && sSec.innerText == 0 && bMin.innerText == 0 && bSec.innerText == 0) {
        sMin.innerText = 25;
        sSec.innerText = "00";
        bMin.innerText = 5;
        bSec.innerText = "00";
        document.getElementById('counter').innerText++;
    }
}
//Stop Pomodoro function//
function stopInterval() {
    clearInterval(startPomodoro);
}

//# sourceMappingURL=index.f3bd186e.js.map
