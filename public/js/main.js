function changeDifficulty() {
    let difficulty = document.querySelector("#difficulty").value;
    console.log(difficulty);
    let grid = getGrid();
    generateGrid(grid, difficulty);
    showGrid(grid);
}

function difficultyStateChange(){
    let difficulty = document.querySelector("#difficulty");
    difficulty.addEventListener("change", changeDifficulty);
}
// --- initialisation ---
changeDifficulty();
// --- end initialisation ---
difficultyStateChange();