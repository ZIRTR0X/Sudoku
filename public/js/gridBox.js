let boxe = document.querySelectorAll("#sudoku_grid td");

function unselectBoxes(boxe){
    boxe.forEach(function(box){
        if(box.classList.contains("selected")){
            box.classList.remove("selected");
            box.classList.add("unselected");
        }
    }); 
}

boxe.forEach(function(box){
    box.addEventListener("click", function(){
        unselectBoxes(boxe);
        box.classList.remove("unselected");
        box.classList.add("selected");
    });
});