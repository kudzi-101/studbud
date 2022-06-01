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