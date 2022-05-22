import { Ship } from "../ship";

test("ship returns length", () => {
    let testShip = new Ship(4);
    expect(testShip.length).toBe(4);
})