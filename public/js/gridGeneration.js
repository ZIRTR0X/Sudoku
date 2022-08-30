let grid = new Array(9);
function resetGrid(grid) {
    for (let i = 0; i < 9; i++) {
        grid[i] = new Array(9);
        for (let j = 0; j < 9; j++) {
            grid[i][j] = 0;
        }
    }
}
resetGrid(grid);
console.log(grid);

function getGrid() {
    return grid;
}

let numberGroupState = new Array(9);
function resetNumberGroupState(numberGroupState){
    for (let i = 0; i < 9; i++) {
        numberGroupState[i] = new Array(9);
        for (let j = 0; j < 9; j++) {
            numberGroupState[i][j] = 0;
        }
    }
}
resetNumberGroupState(numberGroupState);
console.log(numberGroupState);

function checkColumn(number, i, j, grid){
    for(let k = 0; k < 9; k++) {
        if(grid[k][j] == number && k != i) {
            return false;
        }
    }
    return true;
}

function findGroup(i, j){
    i++;
    let box = document.querySelectorAll('.row'+i)[j];
    return box.classList[1];
}

findGroup(8, 8);

function checkGroup(number, i, j) {
    let group = parseInt(findGroup(i-1, j).split('group')[1]);
    if(numberGroupState[group-1][number-1] == 1){
        return false;
    }else{
        return true;
    }
}

let iterationNombre = 0;

function checkNumber(i, j, numbersState){
    iterationNombre++;
    let random = Math.floor(Math.random() * 9) + 1;
    let num = i + 1;

    if(iterationNombre < 15){
        if(numbersState[parseInt(random) - 1] === 1){
            return checkNumber(i, j, numbersState);
        }else{
            if(checkColumn(random, i, j, grid) === false) {
                return checkNumber(i, j, numbersState);
            }else{
                if(checkGroup(random, num, j) === false) {
                    return checkNumber(i, j, numbersState);
                }else{
                    iterationNombre = 0;
                    return random;
                }
            }
        }
    }else{
        iterationNombre = "";
        return 0;
    }
}

function generateGrid(grid, level) {
    let levelProba = 0;
    resetNumberGroupState(numberGroupState);
    switch(level) {
        case "easy":
            levelProba = 0.40;
            break;
        case "medium":
            levelProba = 0.60;
            break;
        case "hard":
            levelProba = 0.70;
            break;
        case "impossible":
            levelProba = 0.80;
            break;
    }

    let numbersState = new Array(9);
    for (let i = 0; i < 9; i++) {
        for(let k = 0; k < 9; k++) {
            numbersState[k] = 0;
        }
        for (let j = 0; j < 9; j++) {
            let probablity = Math.random();
            
            if (probablity < levelProba) {
                grid[i][j] = "";
            } else {

                let number = checkNumber(i, j, numbersState);
                if(number != 0) {
                grid[i][j] = number;
                } else {
                    grid[i][j] = "";
                }

                let group = parseInt(findGroup(i, j).split('group')[1]);

                numberGroupState[group-1][number-1] = 1;
                numbersState[number - 1] = 1;
            }
        }
    }
}

function showGrid(grid) {
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            let num = i + 1;
            let box = document.querySelectorAll('.row'+num)[j];
            box.innerHTML = grid[i][j];
        }
    }
}

// generateGrid(grid, 1);
// showGrid(grid);