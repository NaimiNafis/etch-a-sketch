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

