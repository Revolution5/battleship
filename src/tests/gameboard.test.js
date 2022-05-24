import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

test("place a ship at specific coordinates", () => {
    let testGameboard = new Gameboard;
    testGameboard.placeShip(0,1,4);
    expect(testGameboard.board[0][1].ship).toEqual({"_length": 4, "hits": 0, "sunk": false});
    expect(testGameboard.board[0][1].hit).toBe(false);
    expect(testGameboard.board[0][2].ship).toEqual({"_length": 4, "hits": 0, "sunk": false});
    expect(testGameboard.board[0][3].ship).toEqual({"_length": 4, "hits": 0, "sunk": false});
    expect(testGameboard.board[0][4].ship).toEqual({"_length": 4, "hits": 0, "sunk": false});
    expect(testGameboard.board[0][5].ship).toBe(null);
    expect(testGameboard.board[9][9].ship).toBe(null);
    expect(testGameboard.board[0][1].ship).toEqual(testGameboard.board[0][2].ship)
})

test("recieve a hit on a square that has a ship in it", () => {
    let testGameboard = new Gameboard;
    testGameboard.placeShip(0,1,4);
    testGameboard.receiveAttack(0,1);
    expect(testGameboard.board[0][1].ship.hits).toBe(1);
    expect(testGameboard.board[0][2].ship.hits).toBe(1);
    expect(testGameboard.board[0][3].ship.hits).toBe(1);
    expect(testGameboard.board[0][4].ship.hits).toBe(1);
    expect(testGameboard.board[0][1].hit).toBe(true);
})

test("recieve a hit on a square with no ship", () => {
    let testGameboard = new Gameboard;
    testGameboard.placeShip(0,1,4);
    testGameboard.receiveAttack(2,3);
    expect(testGameboard.board[2][3].hit).toBe(true);
    
    expect(testGameboard.board[0][1].ship.hits).toBe(0);
    expect(testGameboard.board[0][1].hit).toBe(false);
})