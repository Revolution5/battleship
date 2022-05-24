import { Ship } from "./ship";

export class Gameboard {
    constructor() {
        this.board = [
            new Array(10).fill(null).map(() => ({ship: null, hit: false})),
            new Array(10).fill(null).map(() => ({ship: null, hit: false})),
            new Array(10).fill(null).map(() => ({ship: null, hit: false})),
            new Array(10).fill(null).map(() => ({ship: null, hit: false})),
            new Array(10).fill(null).map(() => ({ship: null, hit: false})),
            new Array(10).fill(null).map(() => ({ship: null, hit: false})),
            new Array(10).fill(null).map(() => ({ship: null, hit: false})),
            new Array(10).fill(null).map(() => ({ship: null, hit: false})),
            new Array(10).fill(null).map(() => ({ship: null, hit: false})),
            new Array(10).fill(null).map(() => ({ship: null, hit: false}))
        ]
    }

    // fillBoard() {
    //     for(let i = 0; i < 10; i++) {
    //         let arr = new Array(10);
    //         this.board[i] = arr;
    //         for(let j = 0; j < 10; j++) {
    //             arr[j] = {ship: null, hit: false};
    //         }
    //     }
    // }

    placeShip(xPos, yPos, length) {
        if(this.board[xPos][yPos].ship == null) {
            let newShip = new Ship(length);
            //horizontal ship
            for(let i = yPos; i < yPos + length; i++) {
                this.board[xPos][i].ship = newShip;   
            }
        }
    }

    receiveAttack(xPos, yPos) {

    }
}