const grid = document.querySelector('#grid');
grid.classList.add('#grid');

const gridSize = 32;

//16x16 row and column

let addSquares = function (){
    for (let i = 0; i <= gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('row')
        grid.appendChild(row);
        for (let j = 0; j <= gridSize; j++){
            const column = document.createElement('div');
            column.classList.add('column')
            row.appendChild(column);
        }
    }
}

addSquares(gridSize);

//Change color when hover

const squares = document.querySelectorAll('.column');
squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.classList.add("colorChange");
      }); 
})

//resize column and row when gridSize change

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

