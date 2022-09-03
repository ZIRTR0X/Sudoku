let numpad = document.querySelectorAll("#numpad td");
let box = document.querySelectorAll("#sudoku_grid td");

numpad.forEach(function(np){
    np.addEventListener("click", function(){
        let selected;
        box.forEach(function(bx){
            if(bx.classList.contains("selected")){
                selected = bx;
            }
        });
        selected.innerHTML = np.innerHTML; 
    });
    
});