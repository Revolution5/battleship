import { Player } from "./player";
import { populateEnemyBoard, populatePlayerBoard } from "./dom";

export let human = new Player(false);
export let computer = new Player(true);

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

function checkForWin() {
    let computerSquares = Array.from(document.querySelectorAll(".computer-grid > div"));

    if(computer.gameboard.allShipsSunk()) {
        console.log("You Win!");
        computerSquares.forEach(square => {
            square.removeEventListener("click", clickHandler);
        })
    }
    else if(human.gameboard.allShipsSunk()) {
        console.log("You Lose!");
        computerSquares.forEach(square => {
            square.removeEventListener("click", clickHandler);
        })
    }

    
}

export function clickHandler(e) {
    let clicked = e.target.id;
    let x = clicked[0];
    let y = clicked[1];
    if(computer.gameboard.board[x][y].isHit == false) {
        human.takeTurn(computer.gameboard, x, y);
        populateEnemyBoard();
        checkForWin(); 
        computer.takeTurnAI(human.gameboard);
        populatePlayerBoard(); 
    }
}




