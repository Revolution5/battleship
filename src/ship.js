export class Ship {
    constructor(length) {
        this.length = length;
    }

    get length() {
        return this._length;
    }

    set length(length) {
        this._length = length;
    }
}
