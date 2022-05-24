import { Gameboard } from "../gameboard";
import { Ship } from "../ship";

test("place a ship at specific coordinates", () => {
    let testGameboard = new Gameboard;
    testGameboard.placeShip(0,1,4);
    expect(testGameboard.board[0][1]).not.toBe("");
})