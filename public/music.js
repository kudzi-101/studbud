// Reference: Thelle Codes. (2022). Create A Music Player Using HTML CSS & Vanilla JavaScript [Video]. Retrieved from https://youtu.be/bxbidND_jrQ.
// Reference Create a Music Player using JavaScript - GeeksforGeeks. GeeksforGeeks. (2022). Retrieved from https://www.geeksforgeeks.org/create-a-music-player-using-javascript/.//

// returns the play song button class as the variable playSong //
const playSong = document.querySelector(".playSong");

// returns the next song button class as the variable nextSong //
const nextSong = document.querySelector(".nextSong");

// returns the previous song button class as the variable previousSong //
const previousSong = document.querySelector(".previousSong");

// returns the music cover Image class as the variable img //
const img = document.querySelector(".musicImage");

// returns the Song Title class as the variable title//
const title = document.querySelector(".musicTitle");

// returns the Artist Name class as the variable singer/
const singer = document.querySelector(".musicSinger");

// returns play button icon class//
const playIcon = document.querySelector(".fa-play");

// returns selected classes into variable //
const progressContainer = document.querySelector(".progress");
const progressBar = document.querySelector(".progressBar");
const progressHead = document.querySelector(".progressHead");


//Displays the current and duration timings //
const currentTimeHtml = document.querySelector(".currentTime");
const durationHtml = document.querySelector(".duration");


// Array of Different song tracks //
this.songs = [
    {
        name: "Tech House vibes",
        artist: "Artist 1",
        cover: "https://images.unsplash.com/photo-1494232410401-ad00d5433cfa?crop=entropy&cs=tinysrgb&fm=jpg",
        source: "https://assets.mixkit.co/music/download/mixkit-tech-house-vibes-130.mp3",
    },
    {
        name: "Hip Hop 02",
        artist: "Artist 2",
        cover: "https://images.unsplash.com/photo-1485579149621-3123dd979885?crop=entropy&cs=tinysrgb&fm=jpg",
        source: "https://assets.mixkit.co/music/download/mixkit-hip-hop-02-738.mp3",
    },
    {
        name: "Dreaming Big",
        artist: "Artist 3",
        cover: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?crop=entropy&cs=tinysrgb&fm=jpg",
        source: "https://assets.mixkit.co/music/download/mixkit-dreaming-big-31.mp3",
    },
];




//--------- Initialising values of audio, BarWidth, duration, and Current Time ----------//

let audio = null;
let barWidth = null;
let duration = null;
let currentTime = null;

//Used to know whether play button is playing or has been stopped/paused. Initially set to false so it's not playing//
let isTimerPlaying = false;

//Setting The index number of the current playing song to 0. Enables to skip through  or back songs//
let currentSongIndex = 0;

//Sets First Song in Array of Songs to 0//
let currentSong = songs[0];




//-------- Setting Initial state values from array -----------//

audio = new Audio();

// Audio will be sourced from current song  'source' in array //
audio.src = currentSong.source;

// music Image will be obtained from current song 'cover' in array //
img.src = currentSong.cover;

// Titles Inner text will be obtainained from current song 'name' in array //
title.innerText = currentSong.name;

// Artist name Inner text will be obtainained from current song 'artist' in array //
singer.innerText = currentSong.artist;



//--- Playing Song ---//

//Event listener is going to listen for click event of play button and run the inputed conditions//
playSong.addEventListener('click', () => {

    // if audio is paused and play is pressed then set is Timer Playing to True to play song //
    if(audio.paused){
      audio.play();
      isTimerPlaying = true;
      
    // otherwise if pause is pressed then set is Timer Playing to false to stop playing song //
    }else{
        audio.pause()
        isTimerPlaying = false;
    }
})



//Event listener is going to listen for click event of next song button and run the inputed conditions//
nextSong.addEventListener('click',  () => {

    // when next button is pressed, If song current song index is less than the songs length subtracted by 1 then increment the current song Index by 1 to play next song in array//
    if(currentSongIndex < songs.length - 1 ){
      currentSongIndex++;
      
      // otherwise remain at index 0//
    }else{
        currentSongIndex = 0;
    }

    currentSong = songs[currentSongIndex];

   
    audio.src = currentSong.source;
    img.src = currentSong.cover;
    title.innerText = currentSong.name;
    singer.innerText = currentSong.artist;

    // reset bar width to 0//
    barWidth=0;
    progressBar.style.width = `${barWidth}%`;
    progressHead.style.setProperty("left", `${barWidth}%`)
    currentTimeHtml.innerText = `00:00`;
    durationHtml.innerText = `00:00`;

    // reset current Song time 0//
    audio.currentTime = 0;
    audio.src = currentSong.source;

    //Call back function, Checks if timer was initially playing and continues playing song, otherwise if it was paused next song will be paused aswell//
    setTimeout(() => {
        if (isTimerPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, 300);

})



//Event listener is going to listen for click event of previous song button and run the inputed conditions//
previousSong.addEventListener('click',  () => {

    // when previous song button is pressed, If song current song index is less 0 then decrease the current song Index by 1 to play previous song in array//
    if(currentSongIndex > 0 ){
      currentSongIndex--;
      
    }else{
        currentSongIndex = this.songs.length - 1;
    }

    currentSong = songs[currentSongIndex];

   
    audio.src = currentSong.source;
    img.src = currentSong.cover;
    title.innerText = currentSong.name;
    singer.innerText = currentSong.artist;

    barWidth=0;
    progressBar.style.width = `${barWidth}%`;
    progressHead.style.setProperty("left", `${barWidth}%`)
    currentTimeHtml.innerText = `00:00`;
    durationHtml.innerText = `00:00`;

    audio.currentTime = 0;
    audio.src = currentSong.source;

    //Call back function, Checks if timer was initially playing and continues playing song, otherwise if it was pause next song will be paused aswell//
    setTimeout(() => {
        if (isTimerPlaying) {
            audio.play();
        } else {
            audio.pause();
        }
    }, 300);

})


// Animate progress bar and head to move in relation to current song Time where clicked//

progressContainer.addEventListener('click', (x) => {

    let position = x.pageX - progressContainer.offsetLeft;
    let maxduration = audio.duration;

    // calculating of percentage where mouse is clicked on progress bar//
    let percentage = (100 * position)/ progressContainer.offsetWidth;
    if(percentage > 100) percentage = 100;
    if(percentage < 0) percentage = 0;

    barWidth = percentage + "%"

    progressBar.style.width = `${barWidth}`;
    progressHead.style.setProperty("left", `${barWidth}%`)

    // updates current time of song where ever progress head was moved//
    audio.currentTime = (maxduration * percentage)/100;

})

//updates function every millisecond//
audio.ontimeupdate = function(){
    if(audio.duration){

        //Calculating the bar width percentage
        barWidth = (100 / audio.duration) * audio.currentTime;


        // rounding audio duration to nearest whole number/ to get duration minutes//
        let durmin = Math.floor(audio.duration / 60);

        // rounding audio duration to nearest whole number and subtracting it by duration minutes to get duration seconds//
        let dursec = Math.floor(audio.duration - durmin * 60);

        // rounding audio current time to nearest whole number/ to get current song time minutes//
        let curmin = Math.floor(audio.currentTime / 60);

        // rounding audio current to nearest whole number and subtracting it by duration minutes to get current song time seconds//
        let cursec = Math.floor(audio.currentTime -curmin * 60);



        // if duration minute is less than 0 add a "0" infront of duration minute//
        if (durmin < 10) durmin = "0" + durmin;

         // if duration second is less than 0 add a "0" infront of duration second//
        if (dursec < 10) dursec = "0" + dursec;

         // if current minute is less than 0 add a "0" infront of current minute//
        if (curmin < 10) curmin = "0" + curmin;

         // if current seconds is less than 0 add a "0" infront of current seconds/
        if (cursec < 10) cursec = "0" + cursec;



        // add collon between calculated duration minute and seconds to make up the duration time//
        duration = durmin + ":" + dursec;

        // add collon between calculated current minute and seconds to make up the current time//
        currentTime = curmin + ":" + cursec;



        // Animates progress bar width in relation to percentage of barwidth calculation//
        progressBar.style.width = `${barWidth}%`;

        // Animates progress head position in relation to percentage of barwidth calculation and initially set to the left of barWidth//
        progressHead.style.setProperty("left", `${barWidth}%`)

        //Setting the html of the current and duration variabeles to the duration and currenTime
        currentTimeHtml.innerText = `${currentTime}`;
        durationHtml.innerText = `${duration}`;
        
        
        //If song is playing exhange the play icon with the pause icon//
        if(isTimerPlaying){

            //removes play icon class//
            playIcon.classList.remove('fa-play');

            //adds pause icon class//
            playIcon.classList.add('fa-pause')

        // otherwise if song is not playing exhange the pause icon with the play icon
        }else{

         playIcon.classList.add('fa-play');

            playIcon.classList.add('fa-pause');
        }
    }
}
