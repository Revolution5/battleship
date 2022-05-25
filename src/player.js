import { Gameboard } from "./gameboard";

export class Player {
    constructor(isComputer) {
        this.isComputer = isComputer;
        this.gameboard = new Gameboard;
    }

    generateCoord() {
        //random number between 0 and 9
        return Math.floor(Math.random() * 10);
    }

    takeTurn(enemyGameboard, xPos, yPos) {
        enemyGameboard.receiveAttack(xPos, yPos); 
    }

    takeTurnAI(enemyGameboard) {
        let xPos = 0;
        let yPos = 0;
        let keepGoing = true;

        while(keepGoing) {
            xPos = this.generateCoord();
            yPos = this.generateCoord();
            if(enemyGameboard.board[xPos][yPos].isHit == false) {
                enemyGameboard.receiveAttack(xPos, yPos);
                keepGoing = false;
            }
        }
    }
}