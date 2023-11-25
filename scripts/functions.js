// Function to generate a random integer between 1 and 8
const getRandomMove = () => Math.floor(Math.random() * 8) + 1;

// Move duck to the top-left
const moveTopLeft = (duckObjet) => {
    // Your implementation for moving to the top-left
};

// Move duck to the top-right
const moveTopRight = (duckObjet) => {
    // Your implementation for moving to the top-right
};

// Move duck to the bottom-left
const moveBottomLeft = (duckObjet) => {
    // Your implementation for moving to the bottom-left
};

// Move duck to the bottom-right
const moveBottomRight = (duckObjet) => {
    // Your implementation for moving to the bottom-right
};

// Move duck to the bottom
const moveBottom = (duckObjet) => {
    // Your implementation for moving to the bottom
};

// Move duck to the top
const moveTop = (duckObjet) => {
    // Your implementation for moving to the top
};

// Move duck to the right
const moveRight = (duckObjet) => {
    // Your implementation for moving to the right
};

// Move duck to the left
const moveLeft = (duckObjet) => {
    // Your implementation for moving to the left
};



// Function to move duck in a random position
const moveInRandomPosition = (duckObjet) => {
    const randomPositionNumber = getRandomMove();

    switch (randomPositionNumber) {
        case 1:
            moveTopLeft(duckObjet);
            break;
        case 2:
            moveTopRight(duckObjet);
            break;
        case 3:
            moveBottomLeft(duckObjet);
            break;
        case 4:
            moveBottomRight(duckObjet);
            break;
        case 5:
            moveBottom(duckObjet);
            break;
        case 6:
            moveTop(duckObjet);
            break;
        case 7:
            moveRight(duckObjet);
            break;
        case 8:
            moveLeft(duckObjet);
            break;
        default:
            break;
    }
};
