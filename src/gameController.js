import { Player } from "./player";

export let human = new Player(false);
export let computer = new Player(true);

let humanGrid = document.querySelector(".human-grid");
let computerGrid = document.querySelector(".computer-grid");

function populatePlayerBoard() {
    clearBoard(humanGrid);

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            if(human.gameboard.board[i][j].ship == null && human.gameboard.board[i][j].isHit == false) {
                let square = document.createElement("div");
                square.classList.add("square");
                square.setAttribute("id", i.toString() + j.toString());
                humanGrid.appendChild(square);   
            }
            else if(human.gameboard.board[i][j].ship != null && human.gameboard.board[i][j].isHit == false) {
                let square = document.createElement("div");
                square.classList.add("square-ship");
                square.setAttribute("id", i.toString() + j.toString());
                humanGrid.appendChild(square);
            }
        }
    }
}

function populateEnemyBoard() {
    clearBoard(computerGrid);

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            if(computer.gameboard.board[i][j].ship == null && computer.gameboard.board[i][j].isHit == false) {
                let square = document.createElement("div");
                square.classList.add("square");
                square.setAttribute("id", i.toString() + j.toString());
                computerGrid.appendChild(square);   
            }
        }
    }
}

function clearBoard(board) {
    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

export function startGame() {
    populatePlayerBoard();
    populateEnemyBoard();
    
    human.gameboard.placeShip(0,1,4);
    human.gameboard.placeShip(2,3,5);
    populatePlayerBoard();
}


