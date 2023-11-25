let body = document.body;

window.addEventListener("click", function () {
  playAnimation();
  removeBullet();
  createRedDuckImg();
});

function playAnimation() {
  body.classList.add("color-change-animation");
  // Remove the class after the animation duration
  setTimeout(function () {
    body.classList.remove("color-change-animation");
  }, 700);
}


