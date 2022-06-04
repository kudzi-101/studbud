
/* SHOW AND HIDE TIMER TABS */
// Reference: HMA WebDesign. (2021). How to Build Vertical Tabs in HTML and CSS | Animated Vertical Tabs in HTML and JavaScript [Video]. Retrieved from https://youtu.be/4fzLRXUbkcM.//
function openTab(event, content){

    //initialising variables
    let i, tabContent, timerButtons;

    // return tabcontent class//
    tabContent = document.getElementsByClassName("tabContent");

    // Makes tabcontent not be displayed //
    for(i=0; i < tabContent.length; i++){
        tabContent[i].style.display = "none";
    }

    // return timerButtons class//
    timerButtons = document.getElementsByClassName("timerButtons");

    // when timer button is selected make its class become active//
    for(i=0; i < timerButtons.length; i++){
        timerButtons[i].className = timerButtons[i].className.replace("active","" )
    }

    // display tab content in document//
    document.getElementById(content).style.display = "block";
    event.currentTarget.className += " active"; 
}

document.getElementById("defaultOpen").click();




/* STOPWATCH TIMER */
// Reference: Ashiqur Rahman Pranto. (2022). Stopwatch using HTML, CSS and JavaScript | JavaScript Project [Video]. Retrieved from https://youtu.be/TZaVhmoMHek.//

//Intitialising values//
let milliSecond=0;
let second=0;
let minute=0;
let hour=0;

//returning element id to variables//
let milliSecondString= document.getElementById('milliSecond')
let secondString= document.getElementById('second')
let minuteString= document.getElementById('minute')
let hourString= document.getElementById('hour')

let startBttn= document.getElementById('start');
let stopBttn= document.getElementById('stop');
let resettBttn= document.getElementById('reset');

//initialising interval//
let interval;

// function to start stopwatch//
function stopwatch(){

    // allow milliseconds to increment by 1//
    milliSecond++;

    // if milliseconds = 100 let millisecons become 0 and let seconds begin incrementing by one and add html text from string to become millisecond numerals//
    if(milliSecond == 100){
        milliSecond=0;
        second++;
        milliSecondString.innerHTML = milliSecond;
    }

    // if seconds = 60 let seconds become 0 and let minutes begin incrementing by one and add html text from string to become minute  numerals//
    if(second == 60){
        second=0;
        minute++;
        secondString.innerHTML = second;
    }


    // if minutes = 60 let minutes become 0 and let hour begin incrementing by one and add html text from string to minute numerals//
    if(minute == 60){
        minute=0;
        hour++;
        minuteString.innerHTML = minute;
    }

    // if milliseconds are less than 10 than add a 0 to millisecond html //
    if( milliSecond < 10){
        milliSecondString.innerHTML = '0' + milliSecond;
    }
    else{
        milliSecondString.innerHTML = milliSecond;
    }


    // if seconds are less than 10 than add a 0 to second html //
    if( second < 10){
        secondString.innerHTML = '0' + second;
    }
    else{
        secondString.innerHTML = second;
    }

    // if minutes are less than 10 than add a 0 to minute html //
    if( minute < 10){
        minuteString.innerHTML = '0' + minute;
    }
    else{
       minuteString.innerHTML = minute;
    }

    // if hours are less than 10 than add a 0 to hour html //
    if( hour < 10){
        hourString.innerHTML = '0' + hour;
    }
    else{
        hourString.innerHTML = hour;
    }
}

// when stopwatch is started clear interval counter and set interval numeral as stopwatch completes run//
function startStopwatch(){
    clearInterval(interval);
    interval = setInterval(stopwatch, 10);
}


// when stopwatch is stopped clear interval counter//
function stopStopwatch(){
    clearInterval(interval);
}

// when stopwatch is reset, reset all vallues to 0 and html text to "00". and clear interval counter.
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

// when start button is clicked fire startStopwatch function//
startBttn.addEventListener('click', startStopwatch)

// when stop button is clicked fire stopStopwatch function//
stopBttn.addEventListener('click', stopStopwatch)

// when reset button is clicked fire resetStopwatch function//
resettBttn.addEventListener('click', resetStopwatch)




/* POMODORO TIMER */
// Reference: learn-webdev. (2020). Pomodoro Timer | Javascript Beginner Project Tutorial [Video]. Retrieved from https://youtu.be/vAEG6OVCass.//

//returning element id to variables//
let Start = document.getElementById('Start');
let Stop = document.getElementById('Stop');
let Reset = document.getElementById('Reset');

// session minutes and seconds //
let sMin = document.getElementById('sMinutes');
let sSec = document.getElementById('sSeconds');

// Break minutes and seconds//
let bMin = document.getElementById('bMinutes');
let bSec = document.getElementById('bSeconds');

// initialisiing variable//
let startPomodoro;

// when start button is selected, if pomodoro is not undefined make 
Start.addEventListener('click', function(){
    if(startPomodoro === undefined ){
        startPomodoro = setInterval(pomodoro, 1000)
    }else{
      alert("timer is already running");  
    }
})

// when stop button is selected, stop interval counter and make pomodoro undefined//
Stop.addEventListener('click', function(){
    stopInterval()
    startPomodoro = undefined;
})


// when reset button is selected, reset session, break, and interval //
Reset.addEventListener('click', function(){
    sMin.innerText = 25;
    sSec.innerText = "00";

    bMin.innerText = 5;
    bSec.innerText = "00";

    document.getElementById('counter').innerText = 0;
    stopInterval()
    startPomodoro = undefined;
})


function pomodoro(){
    // if session second don't equal 0 then decrement decrement session seconds//
    if(sSec.innerText != 0){
        sSec.innerText--;

    // and if session minutes dont equal 0 and session second equal 0, then make session second numerals 59 and start decrementing session minutes//
    } else if(sMin.innerText != 0 && sSec.innerText == 0){
        sSec.innerText = 59;
        sMin.innerText--;
    }

    // if session minutes equal 0 and session seconds equal 0, then start decrementing break time seconds//
    if(sMin.innerText == 0 && sSec.innerText == 0){
        if(bSec.innerText !=0){
           bSec.innerText --;

        // and if break timer minutes don't equal 0 and break seconds equal 0 then make break seconds 59 ahd begin decrementing break minutes//
        } else if(bMin.innerText != 0 && bSec.innerText == 0){
            bSec.innerText = 59;
            bMin.innerText--;
        }   
    } 

    
    // if session minutes, session seconds, break minutes, break seconds, and break minutes all equal 0 then reset all timers and increment interval counter by 1//
    if(sMin.innerText == 0 && sSec.innerText == 0 && bMin.innerText == 0 && bSec.innerText == 0){
        sMin.innerText = 25;
        sSec.innerText = "00";

        bMin.innerText = 5;
        bSec.innerText = "00";

        document.getElementById('counter').innerText++;
    }
}


//Stop Pomodoro function//
function stopInterval(){
    clearInterval(startPomodoro);
}