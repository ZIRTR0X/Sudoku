// ---- Prevent box text selection ----
let boxes = document.querySelectorAll('#sudoku_grid td');

boxes.forEach(box => {
    box.onmousedown = function() {
        return false;
    }
    box.onselectstart = function() {
        return false;
    }
    box.onmouseover = function() {
        this.style.cursor = 'default';
    }
}); 
// ---- End prevent box text selection ----