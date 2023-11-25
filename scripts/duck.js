class Duck {

    constructor(top, left) {
        this.top = top;
        this.left = left;
    }

    intalizeDuck() {
        let duckObjet = document.createElement('img');
        duckObjet.src='../assets/images/bird.gif'
        duckObjet.style.position = "absolute";
        duckObjet.style.top = this.top + "px";
        duckObjet.style.left = this.left + "px" ;
        return duckObjet;
    }


    




}