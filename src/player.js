import { Gameboard } from "./gameboard";

export class Player {
    constructor() {
        this.gameboard = new Gameboard;
    }
    
    takeTurn(enemyGameboard, xPos, yPos) {
        enemyGameboard.receiveAttack(xPos, yPos); 
    }
}