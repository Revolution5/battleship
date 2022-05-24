import { Ship } from "../ship";

test("ship returns length", () => {
    let testShip = new Ship(4);
    expect(testShip.length).toBe(4);
})

test("set ship length", () => {
    let testShip = new Ship(4);
    testShip.length = 5;
    expect(testShip.length).toBe(5);
})



test("hitting a ship", () => {
    let testShip = new Ship(4);
    testShip.hit();
    expect(testShip.hits).toBe(1);
})

test("sinking a ship", () => {
    let testShip = new Ship(4);
    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.isSunk();
    expect(testShip.sunk).toBe(true);
})