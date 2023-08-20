const grid = document.querySelector('#grid');
grid.classList.add('#grid');

const squareNum = 16;

//16x16 row and column

let addSquares = function (){
    for (let i = 0; i <= squareNum; i++){
        const row = document.createElement('div');
        row.classList.add('row')
        grid.appendChild(row);
        for (let j = 0; j <= squareNum; j++){
            const column = document.createElement('div');
            column.classList.add('column')
            row.appendChild(column);
        }
    }
}

addSquares(squareNum);

