const playSong = document.querySelector(".playSong");
const nextSong = document.querySelector(".nextSong");
const previousSong = document.querySelector(".previousSong");
const img = document.querySelector(".musicImage");
const title = document.querySelector(".musicTitle");
const singer = document.querySelector(".musicSinger");
const playIcon = document.querySelector(".fa-play");
const progressContainer = document.querySelector(".progress");
const progressBar = document.querySelector(".progressBar");
const progressHead = document.querySelector(".progressHead");
const currentTimeHtml = document.querySelector(".currentTime");
const durationHtml = document.querySelector(".duration");


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

let audio = null;
let barWidth = null;
let duration = null;
let currentTime = null;
let isTimerPlaying = false;
let currentSongIndex = 0;
let currentSong = songs[0];

audio = new Audio();
audio.src = currentSong.source;
img.src = currentSong.cover;
title.innerText = currentSong.name;
singer.innerText = currentSong.artist;

playSong.addEventListener('click', () => {
    if(audio.paused){
      audio.play();
      isTimerPlaying = true;
      
    }else{
        audio.pause()
        isTimerPlaying = false;
    }
})

nextSong.addEventListener('click',  () => {
    if(currentSongIndex < songs.length - 1 ){
      currentSongIndex++;
      
    }else{
        currentSongIndex = 0;
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

previousSong.addEventListener('click',  () => {
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

progressContainer.addEventListener('click', (x) => {
    let position = x.pageX - progressContainer.offsetLeft;
    let maxduration = audio.duration;
    let percentage = (100 * position)/ progressContainer.offsetWidth;
    if(percentage > 100) percentage = 100;
    if(percentage < 0) percentage = 0;

    barWidth = percentage + "%"

    progressBar.style.width = `${barWidth}`;
    progressHead.style.setProperty("left", `${barWidth}%`)

    audio.currentTime = (maxduration * percentage)/100;

})


audio.ontimeupdate = function(){
    if(audio.duration){
        barWidth = (100 / audio.duration) * audio.currentTime;

        let durmin = Math.floor(audio.duration / 60);
        let dursec = Math.floor(audio.duration - durmin * 60);
        let curmin = Math.floor(audio.currentTime / 60);
        let cursec = Math.floor(audio.currentTime -curmin * 60);

        if (durmin < 10) durmin = "0" + durmin;

        if (dursec < 10) dursec = "0" + dursec;

        if (curmin < 10) curmin = "0" + curmin;

        if (cursec < 10) cursec = "0" + cursec;

        duration = durmin + ":" + dursec;
        currentTime = curmin + ":" + cursec;

        progressBar.style.width = `${barWidth}%`;
        progressHead.style.setProperty("left", `${barWidth}%`)
        currentTimeHtml.innerText = `${currentTime}`;
        durationHtml.innerText = `${duration}`;
        
    
        if(isTimerPlaying){
            playIcon.classList.remove('fa-play');
            playIcon.classList.add('fa-pause')

        }else{
         playIcon.classList.add('fa-play');
            playIcon.classList.add('fa-pause');
        }
    }
}
