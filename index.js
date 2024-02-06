
const btnPazGallina = document.getElementById("paz-gallina")
const btnPazGallinaRapido = document.getElementById("paz-gallina-rapido")
const audioGallina = new Audio()
audioGallina.src = "./audios/paz-gallina.mp3"

console.log(audioGallina);

btnPazGallina.addEventListener("click",()=>{
    audioGallina.playbackRate=1;
    audioGallina.play()
})

btnPazGallinaRapido.addEventListener("click",()=>{
    audioGallina.playbackRate=1.5
    audioGallina.play()
})
