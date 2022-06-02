let milliSecond=0;
let second=0;
let minute=0;
let hour=0;

let milliSecondString= document.getElementById('milliSecond')
let secondString= document.getElementById('second')
let minuteString= document.getElementById('minute')
let hourString= document.getElementById('hour')

let startBttn= document.getElementById('start');
let stopBttn= document.getElementById('stop');
let resettBttn= document.getElementById('reset');

let interval;

function stopwatch(){
    milliSecond++;
    if(milliSecond == 100){
        milliSecond=0;
        second++;
        milliSecondString.innerHTML = milliSecond;
    }

    if(second == 60){
        second=0;
        minute++;
        secondString.innerHTML = second;
    }

    if(minute == 60){
        minute=0;
        hour++;
        minuteString.innerHTML = minute;
    }

    
    if( milliSecond < 10){
        milliSecondString.innerHTML = '0' + milliSecond;
    }
    else{
        milliSecondString.innerHTML = milliSecond;
    }


    if( second < 10){
        secondString.innerHTML = '0' + second;
    }
    else{
        secondString.innerHTML = second;
    }


    if( minute < 10){
        minuteString.innerHTML = '0' + minute;
    }
    else{
       minuteString.innerHTML = minute;
    }

    if( hour < 10){
        hourString.innerHTML = '0' + hour;
    }
    else{
        hourString.innerHTML = hour;
    }
}

function startStopwatch(){
    clearInterval(interval);
    interval = setInterval(stopwatch, 10);
}

function stopStopwatch(){
    clearInterval(interval);
}

function resetStopwatch(){
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

startBttn.addEventListener('click', startStopwatch)
stopBttn.addEventListener('click', stopStopwatch)
resettBttn.addEventListener('click', resetStopwatch)


/* POMODORO TIMER */

let minString= document.getElementById('min')
let secString= document.getElementById('sec')


let startButton= document.getElementById('startButton');
localStorage.setItem("btn", "session");

let initial, totalsecs, perc, paused, mins, seconds;

startBttn.addEventListener("click", () => {
  let bttn = localStorage.getItem("bttn");

  if (bttn === "session") {
    mins = +localStorage.getItem("sessionTime") || 1;
  } else {
    mins = +localStorage.getItem("breakTime") || 1;
  }

  seconds = mins * 60;
  totalsecs = mins * 60;
  setTimeout(decremenT(), 60);
  startBttn.style.transform = "scale(0)";
  paused = false;
});

function decremenT() {
    minString.textContent = Math.floor(seconds / 60);
    secString.textContent = seconds % 60 > 9 ? seconds % 60 : `0${seconds % 60}`;
  }

  if (seconds > 0) {
    seconds--;
    initial = window.setTimeout("decremenT()", 1000);
    }
    else {
    mins = 0;
    seconds = 0;
    let bttn = localStorage.getItem("bttn");

    if (bttn === "session") {
      startBttn.textContent = "start break";
      startBttn.classList.add("break");
      localStorage.setItem("bttn", "break");
    } else {
      startBttn.classList.remove("break");
      startBttn.textContent = "start session";
      localStorage.setItem("bttn", "session");
    }


const sessionTimeInput = document.querySelector("#sessionTime");
const breakTimeInput = document.querySelector("#breakTime");
const stopBttn = document.querySelector(".pause");

sessionTimeInput.value = localStorage.getItem("sessionTime");
breakTimeInput.value = localStorage.getItem("breakTime");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  localStorage.setItem("sessionTime", focusTimeInput.value);
  localStorage.setItem("breakTime", breakTimeInput.value);
});

document.querySelector(".reset").addEventListener("click", () => {
  startBttn.style.transform = "scale(1)";
  clearTimeout(initial);
  minString.textContent = 0;
  secString.textContent = 0;
});

stopBttn.addEventListener("click", () => {
  if (paused === undefined) {
    return;
  }
  if (paused) {
    paused = false;
    initial = setTimeout("decremenT()", 60);
    stopBttn.textContent = "stop";
    stopBttn.classList.remove("resume");
  } else {
    clearTimeout(initial);
    stopBttn.textContent = "resume";
    stopBttn.classList.add("resume");
    paused = true;
  }
});
  }