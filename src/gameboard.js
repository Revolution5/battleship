import { Ship } from "./ship";

export class Gameboard {
    constructor() {
        this.board = [
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false}))
        ]

        this.ships = []
    }

    resetBoard() {
        this.board = [
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false})),
            new Array(10).fill(null).map(() => ({ship: null, isHit: false}))
        ]

        this.ships = []
    }

    placeShip(xPos, yPos, length) {
        if(this.board[xPos][yPos].ship == null) {
            let newShip = new Ship(length);
            this.ships.push(newShip);
            //horizontal ship
            for(let i = yPos; i < yPos + length; i++) {
                this.board[xPos][i].ship = newShip;   
            }
        }
    }

    receiveAttack(xPos, yPos) {
        //if the square has a ship on it
        if(this.board[xPos][yPos].ship != null) {
            this.board[xPos][yPos].ship.hit();
            this.board[xPos][yPos].isHit = true;
        }
        //if there square does not have a ship on it
        else if(this.board[xPos][yPos].ship == null) {
            this.board[xPos][yPos].isHit = true;   
        }
    }

    allShipsSunk() {
        if(this.ships.every(ship => ship.sunk == true)) {
            return true;
        }
    }
}