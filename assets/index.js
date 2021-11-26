import MediaPlayer from './MediaPlayer.js'
import Autoplay from './plugins/Autoplay.js'
import Autopause from './plugins/Autopause.js'

const video = document.querySelector("video")
const reproducir = document.querySelector(".Play-pause")
const mute = document.querySelector(".Mute-unmute");
const player =  new MediaPlayer({
    el: video, 
    plugins:[new Autoplay(), new Autopause()]
});

reproducir.onclick = () => player.togglePlay();
mute.onclick = ()=> player.unmute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register(new URL('/sw.js',import.meta.url)).catch(error =>{
        console.log(error.message);
    })
}