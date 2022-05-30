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

    placeShip(xPos, yPos, length, isVertical) {  
        if(isVertical == false) {
            //horizontal ship
            for(let i = yPos; i < yPos + length; i++) {
                if(this.board[xPos][i] == undefined || this.board[xPos][i].ship != null) {
                    //check if ALL the spots are good before putting down the ship
                    //if any of the spots have been taken by another ship, we cannot put a new ship there
                    return false;
                }
            }
            //make the ship 
            let newShip = new Ship(length);
            this.ships.push(newShip);
            for(let i = yPos; i < yPos + length; i++) {
                //we know the spots have been checked, so we can put the ship in those spots
                this.board[xPos][i].ship = newShip;
            }
            return true;
        }
        else if(isVertical == true) {
            //vertical ship
            for(let i = xPos; i < xPos + length; i++) {
                if(this.board[i][yPos] == undefined || this.board[i][yPos].ship != null) {
                    //check if ALL the spots are good before putting down the ship
                    //if any of the spots have been taken by another ship, we cannot put a new ship there
                    return false;
                }
            }
            //make the ship 
            let newShip = new Ship(length);
            this.ships.push(newShip);
            for(let i = xPos; i < xPos + length; i++) {
                //we know the spots have been checked, so we can put the ship in those spots
                this.board[i][yPos].ship = newShip;
            }
            return true;
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