console.log("Hello World")

let songIndex = 0;
let masterPlay = document.getElementById('masterPlay');
let audioElement = new Audio('song/1.mp3');
let songProgressBar = document.getElementById('songProgressBar');
let songs = Array.from(document.getElementsByClassName('song'));


let song = [
    {songName: "Save Your Tears", filePath: "song/1.mp3"},
    {songName: "Blinding Lights", filePath: "song/2.mp3"},
    {songName: "In Your Eyes", filePath: "song/3.mp3"},
    {songName: "Heartless", filePath: "song/4.mp3"},
    {songName: "Until I Bleed Out", filePath: "song/5.mp3"},
    {songName: "Often", filePath: "song/6.mp3"},
    {songName: "The Hills", filePath: "song/7.mp3"},
    {songName: "Earned It", filePath: "song/8.mp3"},
    {songName: "Acquainted", filePath: "song/9.mp3"},
    {songName: "Can't Feel My Face", filePath: "song/10.mp3"},
    {songName: "Starboy", filePath: "song/11.mp3"},
    {songName: "I Feel It Coming", filePath: "song/12.mp3"},
    {songName: "Stargirl Interlude", filePath: "song/13.mp3"},
    {songName: "Die For You", filePath: "song/14.mp3"},
    {songName: "Sidewalks", filePath: "song/15.mp3"},
    {songName: "Out of Time", filePath: "song/16.mp3"},
    {songName: "Gasoline", filePath: "song/17.mp3"},
    {songName: "Sacrifice", filePath: "song/18.mp3"},
    {songName: "I Heard You're Married", filePath: "song/19.mp3"},
    {songName: "Starry Eyes", filePath: "song/20.mp3"},
    {songName: "Wicked Games", filePath: "song/21.mp3"},
    {songName: "The Morning", filePath: "song/22.mp3"},
    {songName: "The Party & The After Party", filePath: "song/23.mp3"},
    {songName: "What You Need", filePath: "song/24.mp3"},
    {songName: "Coming Down", filePath: "song/25.mp3"},
    {songName: "Life of The Party", filePath: "song/26.mp3"},
    {songName: "Loft Music", filePath: "song/27.mp3"},
    {songName: "Gone", filePath: "song/28.mp3"},
    {songName: "Heaven Or Las Vegas", filePath: "song/29.mp3"},
    {songName: "Lonely Star", filePath: "song/30.mp3"}
]

songs.forEach((element)=>{
    element.getElementsByTagName
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa-solid fa-pause');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-pause');
        masterPlay.classList.add('fa-solid fa-play');
        
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    songProgressBar.value = progress;
})

songProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = songProgressBar.value * audioElement.duration/100;
})