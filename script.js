//Default 16x16 row and column
let gridSize = 16;
function addSquares(){
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row')
        grid.appendChild(row);
        for (let j = 0; j < gridSize; j++){
            const column = document.createElement('div');
            column.classList.add('column')
            row.appendChild(column);
        }
    }
}

addSquares();

//Clear grid 
const gridClear = document.getElementById('clearBtn');
gridClear.addEventListener('click', clearGrid);

function clearGrid(){
    const squares = document.querySelectorAll('.column');
    squares.forEach((square) => {
        square.style.backgroundColor = 'white';
    }); 
}

//Change color when dragged
const randomColorButton = document.getElementById('randomBtn');
const blackColorButton = document.getElementById('blackBtn');

randomColorButton.addEventListener('click', changeRandomColor);
blackColorButton.addEventListener('click', changeBlackColor);
let isDragging = false;

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeRandomColor() {
    const squares = document.querySelectorAll('.column');
    squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            isDragging = true;
            square.style.backgroundColor = getRandomColor();
        })
        square.addEventListener('mouseenter', () => {
            if (isDragging === true){
                square.style.backgroundColor = getRandomColor();
            }
        })
        square.addEventListener('mouseup', () => {
            isDragging = false;
        })
    });
}

function changeBlackColor() {
    const squares = document.querySelectorAll('.column');
    squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            isDragging = true;
            square.style.backgroundColor = 'black';
        })
        square.addEventListener('mouseenter', () => {
            if (isDragging === true){
                square.style.backgroundColor = 'black';
            }
        })
        square.addEventListener('mouseup', () => {
            isDragging = false;
        })
    });
}

//Erase to white
const gridEraser = document.getElementById('eraserBtn');
gridEraser.addEventListener('click', eraser);

function eraser() {
    const squares = document.querySelectorAll('.column');
    squares.forEach((square) => {
        square.addEventListener('mousedown', () => {
            isDragging = true;
            square.style.backgroundColor = 'white';
        })
        square.addEventListener('mouseenter', () => {
            if (isDragging === true){
                square.style.backgroundColor = 'white';
            }
        })
        square.addEventListener('mouseup', () => {
            isDragging = false;
        })
    });
}

//Shade effect on colored column

const darkShade = document.getElementById('darkShadeBtn');
darkShade.addEventListener('click', darkenColumn);
let currentDarkness = 1;

function darkenColumn() {
    const squares = document.querySelectorAll('.column');
    let currentDarkness = 1;
    squares.forEach((square) => {
        square.addEventListener('mouseenter', () => {
            const newDarkness = Math.max(currentDarkness - 0.1, 0);
            const currentColor = window.getComputedStyle(square).backgroundColor;
            const rgb = currentColor.match(/\d+/g);
            const newColor = `rgb(${Math.floor(rgb[0] * newDarkness)}, ${Math.floor(rgb[1] * newDarkness)}, ${Math.floor(rgb[2] * newDarkness)})`;
            square.style.backgroundColor = newColor;
        });
    });
}

// function darkenColumn() {
//     currentDarkness -= 0.1;
//     if (currentDarkness < 0) {
//         currentDarkness = 0;
//     }
//     const squares = document.querySelectorAll('.column');
//     squares.forEach((square) => {
//         const currentColor = window.getComputedStyle(square).backgroundColor;
//         const rgb = currentColor.match(/\d+/g);
//         const newColor = `rgb(${rgb[0] * currentDarkness}, ${rgb[1] * currentDarkness}, ${rgb[2] * currentDarkness})`;
//         //the newColor rgb value should be (0,0,0) or black at the end of 10 iteration
//         square.addEventListener('mousedown', () => {
//             isDragging = true;
//             square.style.backgroundColor = newColor;
//         })
//         square.addEventListener('mouseenter', () => {
//             if (isDragging === true){
//                 square.style.backgroundColor = newColor;
//             }
//         })
//         square.addEventListener('mouseup', () => {
//             isDragging = false;
//         })
//     });
// }


//Resize column and row when gridSize change
function resizeColumnsAndRows(){
    const containerWidth = 960;
    const columnWidth = containerWidth / gridSize;
    const rowHeight = containerWidth / gridSize;

    const columns = document.querySelectorAll('.column');
    const rows = document.querySelectorAll('.row');

    columns.forEach((column) => {
        column.style.width = `${columnWidth}px`;
    })

    rows.forEach((row) => {
        row.style.height = `${rowHeight}px`;
})
}

resizeColumnsAndRows();


//Prompt user to change gridSize using button
const sizeChange = document.getElementById('sizeBtn');
sizeChange.addEventListener('click', getUserInput);

function getUserInput(){
    let userInput = +prompt("Grid Size (Up to 100): ");
    if (userInput !== null) {
        if (userInput <= 100) {
            grid.innerHTML = '';
            gridSize = userInput;
            addSquares(gridSize);
            resizeColumnsAndRows(gridSize);
        }
        else {
            alert("Please enter a value up to 100.")
        }
    }
    else {
        alert("No input was provided.");
    }
}


