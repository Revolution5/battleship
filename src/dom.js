import { human, computer, clickHandler, startGame } from "./gameController";

let humanGrid = document.querySelector(".human-grid");
let computerGrid = document.querySelector(".computer-grid");
let newRound = document.querySelector(".new-round");
let winnerText = document.querySelector(".winner-text > h1");

export function populatePlayerBoard() {
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
    //click handler for placing ships before the game starts
    let humanSquares = document.querySelectorAll(".human-grid > .square");
    if(human.gameboard.ships.length == 0) {
        winnerText.textContent = "Place your Carrier!"; 
    }
    humanSquares.forEach(square => {
        square.addEventListener("click", function(e) {
            let clicked = e.target.id;
            let x = Number(clicked[0]);
            let y = Number(clicked[1]);
            if(human.gameboard.ships.length == 0) {
                if(human.gameboard.placeShip(x, y, 5, false)) {
                    populatePlayerBoard();
                    winnerText.textContent = "Place your Battleship!";
                }  
            }
            else if(human.gameboard.ships.length == 1) {
                if(human.gameboard.placeShip(x, y, 4, false)) {
                    populatePlayerBoard();
                    winnerText.textContent = "Place your Cruiser!";
                }
            }
            else if(human.gameboard.ships.length == 2) {
                if(human.gameboard.placeShip(x, y, 3, false)) {
                    populatePlayerBoard();
                    winnerText.textContent = "Place your Submarine!";
                }
            }
            else if(human.gameboard.ships.length == 3) {
                if(human.gameboard.placeShip(x, y, 3, false)) {
                    populatePlayerBoard();
                    winnerText.textContent = "Place your Destroyer!";
                }
            }
            else if(human.gameboard.ships.length == 4) {
                if(human.gameboard.placeShip(x, y, 2, false)) {
                    populatePlayerBoard();
                    startGame();
                }
            }
        })
    })
}

export function populateEnemyBoard() {
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
                square.classList.add("square-ship");
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

    let computerSquares = Array.from(document.querySelectorAll(".computer-grid > div"));

    computerSquares.forEach(square => {
        square.addEventListener("click", clickHandler);
    })
}

function clearBoard(board) {
    while(board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

newRound.addEventListener("click", function(e) {
    human.gameboard.resetBoard();
    computer.gameboard.resetBoard();
    clearBoard(computerGrid);
    winnerText.textContent = "";
    newRound.style.display = "none";
    document.querySelector(".human-label").textContent = "";
    document.querySelector(".computer-label").textContent = "";
    populatePlayerBoard();
})
