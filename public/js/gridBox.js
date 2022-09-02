let boxe = document.querySelectorAll("#sudoku_grid td");
let toogleSwitch = document.querySelector(".switch input");

function unselectBoxes(boxe){
    boxe.forEach(function(box){
        if(box.classList.contains("selected")){
            box.classList.remove("selected");
        }
        if(box.classList.contains("colorhelp")){
            box.classList.remove("colorhelp");
        }
        box.classList.add("unselected");
        
    }); 
}

function highlightingState(){
    let toogleSwitch = document.querySelector(".switch input");
    if(toogleSwitch.checked){
        return true;
    }else{
        return false;
    }
} 

function rowSelectBoxes(row){
    boxe.forEach(function(box){
        if(box.classList.contains(row) && !box.classList.contains("selected")){
            box.classList.remove("unselected");
            box.classList.add("colorhelp");
        }
    });
}

function columnSelectBoxes(column){
    boxe.forEach(function(box){
        if(box.classList.contains(column) && !box.classList.contains("selected")){
            box.classList.remove("unselected");
            box.classList.add("colorhelp");
        }
    });
}

function groupSelectBoxes(group){
    boxe.forEach(function(box){
        if(box.classList.contains(group) && !box.classList.contains("selected")){
            box.classList.remove("unselected");
            box.classList.add("colorhelp");
        }
    });
}

function searchBoxSelect(){
    let setectedBox;
    boxe.forEach(function(box){
        if(box.classList.contains("selected")){
            console.log(box);
            setectedBox = box;
        }
    });
    return setectedBox;
}

boxe.forEach(function(box){
    box.addEventListener("click", function(){
        unselectBoxes(boxe);
        box.classList.remove("unselected");
        box.classList.add("selected");
        let row = box.classList[0];
        let group = box.classList[1];
        let column = box.classList[2];
        if(highlightingState()){
            rowSelectBoxes(row);
            groupSelectBoxes(group);
            columnSelectBoxes(column);
        }
    });
});

toogleSwitch.addEventListener("change", function(){
    let selectedBox = searchBoxSelect();
    if(highlightingState()){
        let row = selectedBox.classList[0];
        let group = selectedBox.classList[1];
        let column = selectedBox.classList[2];
        rowSelectBoxes(row);
        groupSelectBoxes(group);
        columnSelectBoxes(column);
    }else{
        unselectBoxes(boxe);
        selectedBox.classList.remove("unselected");
        selectedBox.classList.add("selected");
    }
});