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
function changeColor(){
    const squares = document.querySelectorAll('.column');
    squares.forEach((square) => {
    square.addEventListener("mouseover", () => {
        square.classList.add("colorChange");
      }); 
    })
}

changeColor();

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
const button = document.querySelector('button');
button.addEventListener('click', getUserInput);

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