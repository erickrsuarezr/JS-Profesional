import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/Autoplay.js'

const video = document.querySelector("video")
const reproducir = document.querySelector(".Play-pause")
const mute = document.querySelector(".Mute-unmute");
const player =  new MediaPlayer({el: video, plugins:[
    new Autoplay()
]});

reproducir.onclick = () => player.play();
mute.onclick = ()=> player.unmute();