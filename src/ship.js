export class Ship {
    constructor(length) {
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    get length() {
        return this._length;
    }

    set length(length) {
        this._length = length;
    }

    hit() {
        this.hits += 1;
    }

    isSunk() {
        if(this.hits == this.length) {
            this.sunk = true;
        }
    }
}
