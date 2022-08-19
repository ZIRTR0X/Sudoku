let grid = new Array(9);
for (let i = 0; i < 9; i++) {
    grid[i] = new Array(9);
    for (let j = 0; j < 9; j++) {
        grid[i][j] = 0;
    }
}
console.log(grid);

let numberGroupState = new Array(9);
for (let i = 0; i < 9; i++) {
    numberGroupState[i] = new Array(9);
    for (let j = 0; j < 9; j++) {
        numberGroupState[i][j] = 0;
    }
}
console.log(numberGroupState);

function checkColumn(number, i, j){
    for(let k = 0; k < 9; k++) {
        if(grid[k][j] == number && k != i) {
            return false;
        }
    }
    return true;
}

function findGroup(i, j){
    console.log(i, j);
    i++;
    let box = document.querySelectorAll('.row'+i)[j];
    console.log(box);
    console.log("find group : " + box.classList[1]);
    return box.classList[1];
}

findGroup(8, 8);

function checkGroup(number, i, j) {
    // let group = document.querySelectorAll(findGroup(i, j));
    // for(let k = 0; k < group.length; k++) {
    //     if(group[k].innerHTML == number) {
    //         return false;
    //     }
    // }
    // return true;
    console.log("debut checkGroup");
    let group = parseInt(findGroup(i-1, j).split('group')[1]);
    console.log(group);
    if(numberGroupState[group-1][number-1] == 1){
        console.log("fin checkGroup 1");
        return false;
    }else{
        console.log("fin checkGroup 2");
        return true;
    }
}

// console.log(findGroup(1, 4));

let iterationNombre = 0;

function checkNumber(i, j, numbersState){
    iterationNombre++;
    console.log("debut checkNumber");
    let random = Math.floor(Math.random() * 9) + 1;
    let num = i + 1;

    console.log("Debug - random : " + random);
    if(iterationNombre < 15){
        if(numbersState[parseInt(random) - 1] === 1){
            console.log("-- numbersState");
            return checkNumber(i, j, numbersState);
        }else{
            console.log("-- else1");
            if(checkColumn(random, i, j) === false) {
                console.log("-- checkColumn");
                return checkNumber(i, j, numbersState);
            }else{
                console.log("-- else2");
                if(checkGroup(random, num, j) === false) {
                    console.log("-- checkGroup");
                    return checkNumber(i, j, numbersState);
                }else{
                    console.log("fin checkNumber");
                    iterationNombre = 0;
                    return random;
                }
            }
        }
    }else{
        console.log("fin checkNumber");
        iterationNombre = "";
        return 0;
    }
}

function generateGrid(grid, level) {
    let levelProba = 0;
    switch(level) {
        case 1:
            levelProba = 0.33;
            break;
        case 2:
            levelProba = 0.45;
            break;
        case 3:
            levelProba = 0.65;
            break;
        case 4:
            levelProba = 0.85;
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
                console.log("[]-----Les coordonnées sont : " + i + " " + j+"-----[]");

                let number = checkNumber(i, j, numbersState);
                grid[i][j] = number;

                console.log("last random: " + number);

                let group = parseInt(findGroup(i, j).split('group')[1]);

                console.log("group: " + group);

                numberGroupState[group-1][number-1] = 1;
                numbersState[number - 1] = 1;
                console.log("[]----- END -----[]");
            }
        }
    }
}

generateGrid(grid, 1);

function showGrid(grid) {
    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            let num = i + 1;
            let box = document.querySelectorAll('.row'+num)[j];
            box.innerHTML = grid[i][j];
        }
    }
}

showGrid(grid);