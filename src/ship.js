export class Ship {
    constructor(length) {
        this.length = length;
        this.positions = [];
        this.sunk = false;
        for(let i = 0; i < this.length; i++) {
            //fill the array with booleans initally set to false
            //tracks the specific position that each ship has been hit in
            let isHit = false;
            this.positions.push(isHit);
        }
    }

    get length() {
        return this._length;
    }

    set length(length) {
        this._length = length;
    }

    hit(position) {
        this.positions[position] = true;
    }

    isSunk() {
        //if every position in the array is true(aka has been hit), the ship has been sunk
        if(this.positions.every(element => element == true)) {
            this.sunk = true;
        }
    }
}
