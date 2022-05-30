import { Player } from "./player";
import { AI } from "./ai";
import { populateEnemyBoard, populatePlayerBoard } from "./dom";

export let human = new Player();
export let computer = new AI();
let newRound = document.querySelector(".new-round");
let winnerText = document.querySelector(".winner-text > h1");

export function clickHandler(e) {
    let clicked = e.target.id;
    let x = clicked[0];
    let y = clicked[1];
    if(computer.gameboard.board[x][y].isHit == false) {
        human.takeTurn(computer.gameboard, x, y)
        populateEnemyBoard();
        computer.takeTurnAI(human.gameboard);
        populatePlayerBoard(); 
        checkForWin();
    }
}

function checkForWin() {
    let computerSquares = Array.from(document.querySelectorAll(".computer-grid > div"));
    let winnerText = document.querySelector(".winner-text > h1");

    if(computer.gameboard.allShipsSunk()) {
        winnerText.textContent = "You Win!"
        computerSquares.forEach(square => {
            square.removeEventListener("click", clickHandler);
        })
        newRound.style.display = "block";
    }
    else if(human.gameboard.allShipsSunk()) {
        winnerText.textContent = "You Lose!"
        computerSquares.forEach(square => {
            square.removeEventListener("click", clickHandler);
        })
        newRound.style.display = "block";
    }
}

export function startGame() {
    human.gameboard.resetBoard();
    computer.gameboard.resetBoard();

    winnerText.textContent = "";
    newRound.style.display = "none";

    human.gameboard.placeShip(2,3,5);
    human.gameboard.placeShip(0,1,4);
    human.gameboard.placeShip(4,4,3);
    human.gameboard.placeShip(6,7,3);
    human.gameboard.placeShip(8,1,2);

    computer.placeRandomShip(5);
    computer.placeRandomShip(4);
    computer.placeRandomShip(3);
    computer.placeRandomShip(3);
    computer.placeRandomShip(2);
    
    populatePlayerBoard();
    populateEnemyBoard();
}