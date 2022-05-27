import { Player } from "./player";

export let human = new Player(false);
export let computer = new Player(true);

let humanGrid = document.querySelector(".human-grid");
let computerGrid = document.querySelector(".computer-grid");

function populatePlayerBoard() {
    clearBoard(humanGrid);

    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            //no ship no hit
            if(human.gameboard.board[i][j].ship == null && human.gameboard.board[i][j].isHit == false) {
                let square = document.createElement("div");
                square.classList.add("square");
                square.setAttribute("id", i.toString() + j.toString());
                humanGrid.appendChild(square);   
            }
            //yes ship no hit
            else if(human.gameboard.board[i][j].ship != null && human.gameboard.board[i][j].isHit == false) {
                let square = document.createElement("div");
                square.classList.add("square-ship");
                square.setAttribute("id", i.toString() + j.toString());
                humanGrid.appendChild(square);
            }
            //no ship yes hit
            else if(human.gameboard.board[i][j].ship == null && human.gameboard.board[i][j].isHit == true) {
                let square = document.createElement("div");
                square.classList.add("square-hit");
                square.setAttribute("id", i.toString() + j.toString());
                humanGrid.appendChild(square);
            }
            //yes ship yes hit
            else if(human.gameboard.board[i][j].ship != null && human.gameboard.board[i][j].isHit == true) {
                let square = document.createElement("div");
                square.classList.add("square-ship-hit");
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
            //no ship no hit
            if(computer.gameboard.board[i][j].ship == null && computer.gameboard.board[i][j].isHit == false) {
                let square = document.createElement("div");
                square.classList.add("square");
                square.setAttribute("id", i.toString() + j.toString());
                computerGrid.appendChild(square);   
            }
            //yes ship no hit 
            //computer ship must be invisible to the human player before being hit
            else if(computer.gameboard.board[i][j].ship != null && computer.gameboard.board[i][j].isHit == false) {
                let square = document.createElement("div");
                square.classList.add("square");
                square.setAttribute("id", i.toString() + j.toString());
                computerGrid.appendChild(square); 
            }
            //no ship yes hit
            else if(computer.gameboard.board[i][j].ship == null && computer.gameboard.board[i][j].isHit == true) {
                let square = document.createElement("div");
                square.classList.add("square-hit");
                square.setAttribute("id", i.toString() + j.toString());
                computerGrid.appendChild(square); 
            }
            //yes ship yes hit
            else if(computer.gameboard.board[i][j].ship != null && computer.gameboard.board[i][j].isHit == true) {
                let square = document.createElement("div");
                square.classList.add("square-ship-hit");
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
    human.gameboard.placeShip(2,3,5);
    human.gameboard.placeShip(0,1,4);
    human.gameboard.placeShip(4,4,3);
    human.gameboard.placeShip(6,7,3);
    human.gameboard.placeShip(8,1,2);

    computer.gameboard.placeShip(0,1,2);
    
    populatePlayerBoard();
    populateEnemyBoard();
}


