window.addEventListener("load", function () {
     
    birdImages=this.document.querySelectorAll('img')

    // document.body.addEventListener('click', function (event) {
    //     if (event.target.classList.contains('duck')) {
    //         console.log("Duck hit");
    //         img.classList.add("hide")
    //     }
    // });

    birdImages[3].addEventListener('click', function () {
            console.log("bird hit");
        });

    for (let i = 1; i < birdImages.length; i++) {
        console.log("Inside for loop");
        birdImages[i].addEventListener('click', function () {
            console.log("bird hit");
        });
    }



    // birdImages[0].addEventListener('click', function () {
    //     birdImages[0].classList.add("hide");
    // });

    // birdImages[1].addEventListener('click', function () {
    //     birdImages[1].classList.add("hide");
    // });

    // birdImages[2].addEventListener('click', function () {
    //     birdImages[2].classList.add("hide");
    // });

    // birdImages[3].addEventListener('click', function () {
    //     birdImages[3].classList.add("hide");
    // });
    // birdImages[4].addEventListener('click', function () {
    //     birdImages[4].classList.add("hide");
    // });
  
    
});
