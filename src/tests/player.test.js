import { Player } from "../player";

test("create AI player", () => {
    let testAI = new Player(true);
    expect(testAI.isComputer).toBe(true);
})

test("Player attacks AI gameboard and hits a ship", () => {
    let testPlayer = new Player(false);
    let testAI = new Player(true);
    testAI.gameboard.placeShip(0,1,4);
    testPlayer.takeTurn(testAI.gameboard, 0, 1);
    expect(testAI.gameboard.board[0][1].isHit).toBe(true);
    expect(testAI.gameboard.board[0][1].ship).toEqual({"_length": 4, "hits": 1, "sunk": false});
})

test("AI attacks player gameboard", () => {
    let testPlayer = new Player(false);
    let testAI = new Player(true);
    testAI.takeTurnAI(testPlayer.gameboard);
    let flatArr = testPlayer.gameboard.board.flat();

    expect(flatArr).toContainEqual({"isHit": true, "ship": null});
})