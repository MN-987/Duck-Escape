/// @hab task's

class GameManger {
    #bodyObject = document.body;
    #bulletList = [];
    #duckList = [];

    constructor() {
        this.prepareGameObjects(5);
        this.#duckList.forEach((duck) => {
            duck.startMoving();
            duck.duckObjet.onclick = () => this.playAnimation();
        });
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
        this.#bodyObject.classList.add("color-change-animation");
        this.#bulletList.pop();
        this.#bulletList.forEach(bullet => bullet.removeBullet());
        setTimeout(() => this.#bodyObject.classList.remove("color-change-animation"), 500);
    }
}