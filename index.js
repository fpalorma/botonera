
const btnPazGallina = document.getElementById("paz-gallina")
const btnPazGallinaRapido = document.getElementById("paz-gallina-rapido")
const audioGallina = new Audio()
console.log(audioGallina);
audioGallina.src = "./audios/paz-gallina.mp3"



btnPazGallina.addEventListener("click",()=>{
    audioGallina.playbackRate=1;
    togglePlay();
    audioGallina.currentTime = 0;
})

btnPazGallinaRapido.addEventListener("click",()=>{
    audioGallina.playbackRate=1.5
    togglePlay();
    audioGallina.currentTime = 0;
})

function togglePlay() {
    return audioGallina.paused ? audioGallina.play() : audioGallina.pause();
  };