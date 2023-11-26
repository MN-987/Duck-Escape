/// @hab task's

class GameManger {
    #bodyObject = document.body;
    #bulletList = [];
    #duckList = [];

    constructor() {
        this.prepareGameObjects(5);
        this.#bodyObject.onclick = () => this.playAnimation();
    }

    prepareGameObjects(bullets) {
        for (let i = 0; i < bullets; i++) {
            this.#bulletList[i] = new Bullet();
            if (i < bullets - 2) {
                this.#duckList[i] = new Duck();
            }
        }
    }

    playAnimation() {
        if (this.#bulletList.length > 0) {
            let removedBullet = this.#bulletList.pop();
            this.#bodyObject.classList.add("color-change-animation");
            removedBullet.removeBullet();
            setTimeout(() => {
                this.#bodyObject.classList.remove("color-change-animation");
            }, 300);

            this.checkWinCondition();
        } else {
            // User loses if no bullets left
            console.log("You lose!");
        }
    }

    emptyDuckList() {
        if (this.#duckList.length > 0) {
            let removedDuck = this.#duckList.pop();
            removedDuck.destroy();

            this.checkWinCondition();
        } else {
            // The User loses if there are no ducks left and the user has no bullets
            if (this.#bulletList.length === 0) {
                console.log("You lose!");
            }
        }
    }

    checkWinCondition() {
        if (this.#duckList.length === 0 && this.#bulletList.length > 0) {
            // User wins
            console.log("You win!");
        }
    }
}