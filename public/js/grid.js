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


// ---- Prevent numpad text selection ----
let numpads = document.querySelectorAll('#numpad td');

numpads.forEach(numpad => {
    numpad.onmousedown = function() {
        return false;
    }
    numpad.onselectstart = function() {
        return false;
    }
    numpad.onmouseover = function() {
        this.style.cursor = 'default';
    }
}); 
// ---- End prevent box text selection ----