import MediaPlayer from './MediaPlayer'
import Autoplay from './plugins/Autoplay'
import Autopause from './plugins/Autopause'
import Ads from './plugins/Ads'

const video = document.querySelector("video")
const reproducir:HTMLElement = document.querySelector(".Play-pause")
const mute:HTMLElement = document.querySelector(".Mute-unmute");
const player =  new MediaPlayer({
    el: video, 
    plugins:[new Autoplay(), new Autopause(), new Ads()],
});

reproducir.onclick = () => player.togglePlay();
mute.onclick = ()=> player.unmute();

if('serviceWorker' in navigator){
    navigator.serviceWorker.register(new URL('/sw.js',  import.meta.url)).catch(error =>{
        console.log(error.message);
    })
}