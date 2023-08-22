//16x16 row and column
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

//Change color when hover

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const randomColor = document.querySelector('#randomColor');
randomColor.addEventListener('click', changeRandomColor);

function changeRandomColor() {
    const squares = document.querySelectorAll('.column');
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = getRandomColor();
      });
    });
}
  
changeRandomColor();

const blackColor = document.querySelector('#blackColor');
blackColor.addEventListener('click', changeBlackColor);

function changeBlackColor() {
    const squares = document.querySelectorAll('.column');
    squares.forEach((square) => {
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = 'black';
      });
    });
}

changeBlackColor();


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
const sizeChange = document.querySelector('#sizeChange');
sizeChange.addEventListener('click', getUserInput);

function getUserInput(){
    let userInput = +prompt("Grid Size (Up to 100): ");
    if (userInput !== null) {
        if (userInput <= 100) {
            grid.innerHTML = '';
            gridSize = userInput;
            addSquares(gridSize);
            resizeColumnsAndRows(gridSize);
            changeColor();
        }
        else {
            alert("Please enter a value up to 100.")
        }
    }
    else {
        alert("No input was provided.");
    }
}

/*

1. Random color generator

make 2 buttons, black button and rainbow button;


for change color on hover function
if black button clicked then
    mouse hover will turn squares to black

else if rainbow button clicked then
    mouse hover will turn squares to rainbow
    so call back the random function



2. shade or darkening effect, each time click or passed 10% darker,
after 10 iterations, pitch black.

*/