import { player, computer, populateBoard} from "./gameController";

let playerGrid = document.querySelector(".player-grid");
let enemyGrid = document.querySelector(".enemy-grid");

populateBoard(playerGrid);
populateBoard(enemyGrid);