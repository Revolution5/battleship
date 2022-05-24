import { Ship } from "./ship";

export class Gameboard {
    constructor() {
        this.board = [
            //10 x 10 grid
            //0,    1,    2,    3,    4,    5,    6,    7,    8,    9
            [null, null, null, null, null, null, null, null, null, null],//0
            [null, null, null, null, null, null, null, null, null, null],//1
            [null, null, null, null, null, null, null, null, null, null],//2
            [null, null, null, null, null, null, null, null, null, null],//3
            [null, null, null, null, null, null, null, null, null, null],//4
            [null, null, null, null, null, null, null, null, null, null],//5
            [null, null, null, null, null, null, null, null, null, null],//6
            [null, null, null, null, null, null, null, null, null, null],//7
            [null, null, null, null, null, null, null, null, null, null],//8
            [null, null, null, null, null, null, null, null, null, null] //9
        ]
    }

    placeShip(xPos, yPos, length) {
        if(this.board[xPos][yPos] == null) {
           this.board[xPos][yPos] = new Ship(length); 
        }
        
    }

    receiveAttack(xPos, yPos) {

    }
}