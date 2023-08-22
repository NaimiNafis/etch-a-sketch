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

//Change color when hover
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

//Shade effect on colored column
/*
Problem: 
1.mouseover getRandomColor did not stop when shade button clicked

capture current color value
create new color value + darken it 10%

If mouseover column then
    if column is white then
    return;
    else
    the touched column will shade 10%


 */

const darkShade = document.getElementById('darkShadeBtn');
darkShade.addEventListener('click', darkenColumn);

function darkenColumn() {

}


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
