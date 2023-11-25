class Duck {

    
    #bodyObj = document.querySelector('body');
    duckObjet;

    constructor() {
        this.duckObjet = this.initializeDuck();
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
    getRandomMove = () => Math.floor(Math.random() * 1) + 1;

    moveTopLeft() {
        let top = this.duckObjet.getBoundingClientRect().top;
        let left = this.duckObjet.getBoundingClientRect().left;

        let id = setInterval(() => {
            left -= 15;
            top -= 15;

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
            top -= 15;
            left += 15;
            console.log(`Top: ${top}, Left: ${left}`);
            if (top > 0 && left < window.innerWidth - this.duckObjet.width) {
                console.log("In if of moveTopRight");
                this.duckObjet.style.top = top + 'px';
                this.duckObjet.style.left = left + 'px';
            } else {
                clearInterval(id);
                console.log("Moving to bottom left");
                this.moveBottomLeft();
            }
        }, 100); // Increase the interval to slow down the animation
    }



    moveBottomRight() {
        let top = this.duckObjet.getBoundingClientRect().top;
        let left = this.duckObjet.getBoundingClientRect().left;
        console.log(`Initial Top: ${top} Initial Left: ${left}`);
        let id = setInterval(() => {
            top += 15;
            left += 15;
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
        console.log(`Inside move bottom left and the top value is ${top} and`);
        let id = setInterval(() => {
            top += 15;
            left -= 15;
            if (top < (window.innerHeight - 160) - this.duckObjet.height && left > 0) {
                this.duckObjet.style.top = top + 'px';
                this.duckObjet.style.left = left + 'px';
            } else {
                clearInterval(id);
                this.moveTopLeft();
            }
        }, 50);
    }

};

//  moveInRandomPosition = function (duckObjet) {
//         const randomPositionNumber = getRandomMove();

//         switch (randomPositionNumber) {
//             case 1:
//                 moveTopLeft(duckObjet);
//                 break;
//             case 2:
//                 moveTopRight(duckObjet);
//                 break;
//         case 3:
//             moveBottomLeft(duckObjet);
//             break;
//         case 4:
//             moveBottomRight(duckObjet);
//             break;
//         case 5:
//             moveBottom(duckObjet);
//             break;
//         case 6:
//             moveTop(duckObjet);
//             break;
//         case 7:
//             moveRight(duckObjet);
//             break;
//         case 8:
//             moveLeft(duckObjet);
//             break;
//         default:
//             break;
//     }
//  };
//         }

// }

// Create an instance of the Duck class
let duckInstance = new Duck();
let duckInstance2 = new Duck();
let duckInstance3 = new Duck();

let duckInstance4 = new Duck();

let duckInstance5 = new Duck();
let duckInstance6 = new Duck();
// Call the moveTopLeft method to animate the duck
duckInstance.moveTopLeft();


duckInstance2.moveTopRight();

duckInstance3.moveBottomLeft();

duckInstance4.moveBottomRight();

duckInstance5.moveTopRight();

duckInstance6.moveBottomRight();