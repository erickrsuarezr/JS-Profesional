class Autopause{
    constructor(){
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }

    run(player){
        this.player = player;

        const observer = new IntersectionObserver(this.handleIntersection, {
            threshold: this.threshold,
        })

        observer.observe(this.player.media);

        document.addEventListener("visibilitychange",this.handleVisibilityChange)
    }

    handleIntersection(entries){
        const entry = entries[0]; 
        // console.log(entry);
        const isVisible = entry.intersectionRatio >= this.threshold;

        if(isVisible){
            this.player.play();
        }else{
            this.player.pause();
        }
    }

    handleVisibilityChange(){
        const isVisibile = document.visibilityState === "visible"
        if (isVisibile){
            this.player.play();
        }else{
            this.player.pause();
        }
    }
}

export default Autopause;