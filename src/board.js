const BlackKing = `<i class="fa-solid fa-chess-king"></i>`
const WhiteKing = `<i class="fa-solid fa-chess-king"></i>`
const BlackQueen = `<i class="fa-solid fa-chess-queen"></i>`
const WhiteQueen = `<i class="fa-solid fa-chess-queen"></i>`
const BlackBishop = `<i class="fa-solid fa-chess-bishop"></i>`
const WhiteBishop = `<i class="fa-solid fa-chess-bishop"></i>`
const BlackKnight = `<i class="fa-solid fa-chess-knight"></i>`
const WhiteKnight = `<i class="fa-solid fa-chess-knight"></i>`
const BlackRook = `<i class="fa-solid fa-chess-rook"></i>`
const WhiteRook = `<i class="fa-regular fa-chess-rook"></i>`
const BlackPawn = `<i class="fa-solid fa-chess-pawn"></i>`
const WhitePawn = `<i class="fa-regular fa-chess-pawn"></i>`



const MAX_HEIGHT = 500;
const MAX_WIDTH = 500;
const SQUARES = 8;
const board = document.querySelector(".board");


const startPieces = [
    [BlackRook, BlackKnight, BlackBishop, BlackQueen, BlackKing, BlackBishop, BlackKnight, BlackRook],
    [BlackPawn, BlackPawn, BlackPawn, BlackPawn, BlackPawn, BlackPawn, BlackPawn, BlackPawn],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    ['', '', '', '', '', '', '', ''],
    [WhitePawn, WhitePawn, WhitePawn, WhitePawn, WhitePawn, WhitePawn, WhitePawn, WhitePawn],
    [WhiteRook, WhiteKnight, WhiteBishop, WhiteKing, WhiteQueen, WhiteBishop, WhiteKnight, WhiteRook],
]

function createBoard(){
    let height = MAX_HEIGHT / SQUARES;
    let width = MAX_WIDTH / SQUARES;

    for(let i = 0; i < SQUARES; i++){
        let row = document.createElement("div");

        row.classList.add("row");

        board.appendChild(row);
        
        for(let j = 0; j < SQUARES; j++){
            let square = document.createElement("div");
            let piece = startPieces[j][i]
            
            square.classList.add("square");
            square.innerHTML = piece;

            if(i % 2 == 0){
                if(j % 2 == 0){
                    square.classList.add("beige");
                }
                else{
                    square.classList.add("brown");
                }
            }
            else{
                if(j % 2 != 0){
                    square.classList.add("beige");
                }
                else{
                    square.classList.add("brown");
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