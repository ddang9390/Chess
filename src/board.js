const MAX_HEIGHT = 500;
const MAX_WIDTH = 500;
const SQUARES = 8;
const board = document.querySelector(".board");

function createBoard(){
    let height = MAX_HEIGHT / SQUARES;
    let width = MAX_WIDTH / SQUARES;
    for(let i = 0; i < SQUARES; i++){
        let row = document.createElement("div");

        row.classList.add("row");

        board.appendChild(row);
        
        for(let j = 0; j < SQUARES; j++){
            let square = document.createElement("div");
            square.classList.add("square");

            if(i % 2 == 0){
                if(j % 2 == 0){
                    square.classList.add("white");
                }
                else{
                    square.classList.add("black");
                }
            }
            else{
                if(j % 2 != 0){
                    square.classList.add("white");
                }
                else{
                    square.classList.add("black");
                }
            }

            square.addEventListener("mouseover", (event) => {
                square.classList.add("hovered-square");
            })
            square.addEventListener("mouseleave", (event) => {
                square.classList.remove("hovered-square");
            })
            square.style.height = String(height) + "px";
            square.style.width = String(width) + "px";
            row.appendChild(square);
        }
    }
}

createBoard();