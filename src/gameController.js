import { Player } from "./player";

export let player = new Player(false);
export let computer = new Player(true);


export function populateBoard(grid) {
    for(let i = 0; i < 10; i++) {
        for(let j = 0; j < 10; j++) {
            let square = document.createElement("div");
            square.classList.add("square" + i.toString() + j.toString());
            grid.appendChild(square);
        }
    }
}
