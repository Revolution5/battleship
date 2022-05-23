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

test("positions array is filled correctly", () => {
    let testShip = new Ship(4);
    expect(testShip.positions[0]).toBe(false);
    expect(testShip.positions[1]).toBe(false);
    expect(testShip.positions[2]).toBe(false);
    expect(testShip.positions[3]).toBe(false);
})

test("hitting a ship", () => {
    let testShip = new Ship(4);
    testShip.hit(3);
    expect(testShip.positions[3]).toBe(true);
})

test("sinking a ship", () => {
    let testShip = new Ship(4);
    testShip.hit(0);
    testShip.hit(1);
    testShip.hit(2);
    testShip.hit(3);
    testShip.isSunk();
    expect(testShip.sunk).toBe(true);
})