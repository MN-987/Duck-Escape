class Duck {

    #bodyObj = document.querySelector('body');
    duckObjet;

    constructor() {
        this.duckObjet = this.initializeDuck();
        this.startMoving();
        this.duckObjet.onclick = () => this.destroy();
    }

    destroy() {
        this.duckObjet.remove();
    }

    initializeDuck() {
        let duckObjetToAdd = document.createElement('img');
        duckObjetToAdd.src = '../../assets/images/bird.gif';
        duckObjetToAdd.style.position = 'absolute';
        duckObjetToAdd.classList.add('duck')
        this.addDuckInRandomPosition(duckObjetToAdd);
        return duckObjetToAdd;
    }

    addDuckInRandomPosition(duckObjetToAdd) {
        let randomTop = Math.floor(Math.random() * window.innerHeight);
        let randomLeft = Math.floor(Math.random() * window.innerWidth);
        duckObjetToAdd.style.top = randomTop + 'px';
        duckObjetToAdd.style.left = randomLeft + 'px';
        this.#bodyObj.appendChild(duckObjetToAdd);
    }

    // Function to generate a random integer between 1 and 8
    getRandomMove = () => Math.floor(Math.random() * 4) + 1;

    moveTopLeft() {
        let top = this.duckObjet.getBoundingClientRect().top;
        let left = this.duckObjet.getBoundingClientRect().left;

        let id = setInterval(() => {
            left -= 20;
            top -= 20;

            if (top > 0 && left > 0) {
                this.duckObjet.style.top = top + 'px';
                this.duckObjet.style.left = left + 'px';
            } else {
                clearInterval(id);
                this.moveBottomRight();
            }
        }, 50);
    }

    moveTopRight() {
        let top = this.duckObjet.getBoundingClientRect().top;
        let left = this.duckObjet.getBoundingClientRect().left;
        let id = setInterval(() => {
            top -= 20;
            left += 20;
            if (top > 0 && left < window.innerWidth - this.duckObjet.width) {
                this.duckObjet.style.top = top + 'px';
                this.duckObjet.style.left = left + 'px';
            } else {
                clearInterval(id);
                this.moveBottomLeft();
            }
        }, 100); // Increase the interval to slow down the animation
    }

    moveBottomRight() {
        let top = this.duckObjet.getBoundingClientRect().top;
        let left = this.duckObjet.getBoundingClientRect().left;
        let id = setInterval(() => {
            top += 20;
            left += 20;
            if (top < (window.innerHeight - 160) - this.duckObjet.height && left < window.innerWidth - 30 - this.duckObjet.width) {
                this.duckObjet.style.top = top + 'px';
                this.duckObjet.style.left = left + 'px';
            } else {
                clearInterval(id);
                this.moveTopRight()
            }
        }, 50);
    }

    moveBottomLeft() {
        let top = this.duckObjet.getBoundingClientRect().top;
        let left = this.duckObjet.getBoundingClientRect().left;
        let id = setInterval(() => {
            top += 20;
            left -= 20;
            if (top < (window.innerHeight - 160) - this.duckObjet.height && left > 0) {
                this.duckObjet.style.top = top + 'px';
                this.duckObjet.style.left = left + 'px';
            } else {
                clearInterval(id);
                this.moveTopLeft();
            }
        }, 50);
    }

    startMoving() {
        // You can choose a random starting direction
        const randomDirection = this.getRandomMove();

        // Call the appropriate move function based on the randomDirection
        switch (randomDirection) {
            case 1:
                this.moveTopLeft();
                break;
            case 2:
                this.moveTopRight();
                break;
            case 3:
                this.moveBottomRight();
                break;
            case 4:
                this.moveBottomLeft();
                break;
        }
    }
}