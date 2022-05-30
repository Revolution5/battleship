import { Player } from "./player";

export class AI extends Player {

    generateCoord() {
        //random number between 0 and 9
        return Math.floor(Math.random() * 10);
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

    placeRandomShip(length) {
        let xPos = 0
        let yPos = 0
        let keepGoing = true;

        while(keepGoing) {
            xPos = this.generateCoord();
            yPos = this.generateCoord();
            if(this.gameboard.placeShip(xPos, yPos, length)) {
                keepGoing = false;
            }
        }
        
    }
}