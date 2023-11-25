// @mohamed's task
class Bullet {
  #bulletObj = document.createElement("img");
  // 1
  #bulletList = document.querySelector("#bulletList");
  constructor(){
    this.initializeBulletObject();
  }

  initializeBulletObject() {
    // 2
    this.#bulletObj.src = "assets/images/bullet.png";
    this.#bulletObj.classList.add("bullet");
    this.#bulletList.appendChild(this.#bulletObj);
  }

  getObject() {
    return this.#bulletObj;
}

  removeBullet() {
    let lastBullet = this.#bulletList.lastElementChild;
    if (lastBullet) {
      this.#bulletList.removeChild(lastBullet);
    }
  }

}