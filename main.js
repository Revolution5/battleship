(()=>{"use strict";class e{constructor(e){this.length=e,this.hits=0,this.sunk=!1}get length(){return this._length}set length(e){this._length=e}hit(){this.hits+=1,this.isSunk()}isSunk(){this.hits==this.length&&(this.sunk=!0)}}class t{constructor(){this.board=[new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1})))],this.ships=[]}resetBoard(){this.board=[new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1})))],this.ships=[]}placeShip(t,i,l,r){if(0==r){for(let e=i;e<i+l;e++)if(null==this.board[t][e]||null!=this.board[t][e].ship)return!1;let r=new e(l);this.ships.push(r);for(let e=i;e<i+l;e++)this.board[t][e].ship=r;return!0}if(1==r){for(let e=t;e<t+l;e++)if(null==this.board[e]||null!=this.board[e][i].ship)return!1;let r=new e(l);this.ships.push(r);for(let e=t;e<t+l;e++)this.board[e][i].ship=r;return!0}}receiveAttack(e,t){null!=this.board[e][t].ship?(this.board[e][t].ship.hit(),this.board[e][t].isHit=!0):null==this.board[e][t].ship&&(this.board[e][t].isHit=!0)}allShipsSunk(){if(this.ships.every((e=>1==e.sunk)))return!0}}class i{constructor(){this.gameboard=new t}generateCoord(){return Math.floor(10*Math.random())}takeTurn(e,t,i){e.receiveAttack(t,i)}takeTurnAI(e){let t=0,i=0,l=!0;for(;l;)t=this.generateCoord(),i=this.generateCoord(),0==e.board[t][i].isHit&&(e.receiveAttack(t,i),l=!1)}}let l=document.querySelector(".human-grid"),r=document.querySelector(".computer-grid"),a=document.querySelector(".new-round"),n=document.querySelector(".winner-text > h1");function s(){d(l);for(let e=0;e<10;e++)for(let t=0;t<10;t++)if(null==u.gameboard.board[e][t].ship&&0==u.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square"),i.setAttribute("id",e.toString()+t.toString()),l.appendChild(i)}else if(null!=u.gameboard.board[e][t].ship&&0==u.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square-ship"),i.setAttribute("id",e.toString()+t.toString()),l.appendChild(i)}else if(null==u.gameboard.board[e][t].ship&&1==u.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square-hit"),i.setAttribute("id",e.toString()+t.toString()),l.appendChild(i)}else if(null!=u.gameboard.board[e][t].ship&&1==u.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square-ship-hit"),i.setAttribute("id",e.toString()+t.toString()),l.appendChild(i)}}function o(){d(r);for(let e=0;e<10;e++)for(let t=0;t<10;t++)if(null==h.gameboard.board[e][t].ship&&0==h.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square"),i.setAttribute("id",e.toString()+t.toString()),r.appendChild(i)}else if(null!=h.gameboard.board[e][t].ship&&0==h.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square"),i.setAttribute("id",e.toString()+t.toString()),r.appendChild(i)}else if(null==h.gameboard.board[e][t].ship&&1==h.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square-hit"),i.setAttribute("id",e.toString()+t.toString()),r.appendChild(i)}else if(null!=h.gameboard.board[e][t].ship&&1==h.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square-ship-hit"),i.setAttribute("id",e.toString()+t.toString()),r.appendChild(i)}Array.from(document.querySelectorAll(".computer-grid > div")).forEach((e=>{e.addEventListener("click",c)}))}function d(e){for(;e.firstChild;)e.removeChild(e.firstChild)}a.addEventListener("click",(function(e){n.textContent="",a.style.display="none",m()}));let u=new i,h=new class extends i{generateCoord(){return Math.floor(10*Math.random())}takeTurnAI(e){let t=0,i=0,l=!0;for(;l;)t=this.generateCoord(),i=this.generateCoord(),0==e.board[t][i].isHit&&(e.receiveAttack(t,i),l=!1)}placeRandomShip(e){let t=0,i=0,l=Math.random()>.5,r=!0;for(;r;)t=this.generateCoord(),i=this.generateCoord(),this.gameboard.placeShip(t,i,e,l)&&(r=!1)}},p=document.querySelector(".new-round");function c(e){let t=e.target.id,i=t[0],l=t[1];0==h.gameboard.board[i][l].isHit&&(u.takeTurn(h.gameboard,i,l),o(),h.takeTurnAI(u.gameboard),s(),function(){let e=Array.from(document.querySelectorAll(".computer-grid > div")),t=document.querySelector(".winner-text > h1");h.gameboard.allShipsSunk()?(t.textContent="You Win!",e.forEach((e=>{e.removeEventListener("click",c)})),p.style.display="block"):u.gameboard.allShipsSunk()&&(t.textContent="You Lose!",e.forEach((e=>{e.removeEventListener("click",c)})),p.style.display="block")}())}function m(){u.gameboard.resetBoard(),h.gameboard.resetBoard(),u.gameboard.placeShip(2,3,5,!1),u.gameboard.placeShip(0,1,4,!1),u.gameboard.placeShip(4,4,3,!1),u.gameboard.placeShip(6,7,3,!1),u.gameboard.placeShip(8,1,2,!1),h.placeRandomShip(5),h.placeRandomShip(4),h.placeRandomShip(3),h.placeRandomShip(3),h.placeRandomShip(2),s(),o()}m()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sTUFBTUEsRUFDVEMsWUFBWUMsR0FDUkMsS0FBS0QsT0FBU0EsRUFDZEMsS0FBS0MsS0FBTyxFQUNaRCxLQUFLRSxNQUFPLEVBR1pILGFBQ0EsT0FBT0MsS0FBS0csUUFHWkosV0FBT0EsR0FDUEMsS0FBS0csUUFBVUosRUFHbkJLLE1BQ0lKLEtBQUtDLE1BQVEsRUFDYkQsS0FBS0ssU0FHVEEsU0FDT0wsS0FBS0MsTUFBUUQsS0FBS0QsU0FDakJDLEtBQUtFLE1BQU8sSUNwQmpCLE1BQU1JLEVBQ1RSLGNBQ0lFLEtBQUtPLE1BQVEsQ0FDVCxJQUFJQyxNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxPQUc1RFosS0FBS2EsTUFBUSxHQUdqQkMsYUFDSWQsS0FBS08sTUFBUSxDQUNULElBQUlDLE1BQU0sSUFBSUMsS0FBSyxNQUFNQyxLQUFJLEtBQU0sQ0FBRUMsS0FBTSxLQUFNQyxPQUFPLE1BQ3hELElBQUlKLE1BQU0sSUFBSUMsS0FBSyxNQUFNQyxLQUFJLEtBQU0sQ0FBRUMsS0FBTSxLQUFNQyxPQUFPLE1BQ3hELElBQUlKLE1BQU0sSUFBSUMsS0FBSyxNQUFNQyxLQUFJLEtBQU0sQ0FBRUMsS0FBTSxLQUFNQyxPQUFPLE1BQ3hELElBQUlKLE1BQU0sSUFBSUMsS0FBSyxNQUFNQyxLQUFJLEtBQU0sQ0FBRUMsS0FBTSxLQUFNQyxPQUFPLE1BQ3hELElBQUlKLE1BQU0sSUFBSUMsS0FBSyxNQUFNQyxLQUFJLEtBQU0sQ0FBRUMsS0FBTSxLQUFNQyxPQUFPLE1BQ3hELElBQUlKLE1BQU0sSUFBSUMsS0FBSyxNQUFNQyxLQUFJLEtBQU0sQ0FBRUMsS0FBTSxLQUFNQyxPQUFPLE1BQ3hELElBQUlKLE1BQU0sSUFBSUMsS0FBSyxNQUFNQyxLQUFJLEtBQU0sQ0FBRUMsS0FBTSxLQUFNQyxPQUFPLE1BQ3hELElBQUlKLE1BQU0sSUFBSUMsS0FBSyxNQUFNQyxLQUFJLEtBQU0sQ0FBRUMsS0FBTSxLQUFNQyxPQUFPLE1BQ3hELElBQUlKLE1BQU0sSUFBSUMsS0FBSyxNQUFNQyxLQUFJLEtBQU0sQ0FBRUMsS0FBTSxLQUFNQyxPQUFPLE1BQ3hELElBQUlKLE1BQU0sSUFBSUMsS0FBSyxNQUFNQyxLQUFJLEtBQU0sQ0FBRUMsS0FBTSxLQUFNQyxPQUFPLE9BRzVEWixLQUFLYSxNQUFRLEdBR2pCRSxVQUFVQyxFQUFNQyxFQUFNbEIsRUFBUW1CLEdBQzFCLEdBQWlCLEdBQWRBLEVBQXFCLENBRXBCLElBQUksSUFBSUMsRUFBSUYsRUFBTUUsRUFBSUYsRUFBT2xCLEVBQVFvQixJQUNqQyxHQUEwQkMsTUFBdkJwQixLQUFLTyxNQUFNUyxHQUFNRyxJQUErQyxNQUE1Qm5CLEtBQUtPLE1BQU1TLEdBQU1HLEdBQUdSLEtBR3ZELE9BQU8sRUFJZixJQUFJVSxFQUFVLElBQUl4QixFQUFLRSxHQUN2QkMsS0FBS2EsTUFBTVMsS0FBS0QsR0FDaEIsSUFBSSxJQUFJRixFQUFJRixFQUFNRSxFQUFJRixFQUFPbEIsRUFBUW9CLElBRWpDbkIsS0FBS08sTUFBTVMsR0FBTUcsR0FBR1IsS0FBT1UsRUFFL0IsT0FBTyxFQUVOLEdBQWlCLEdBQWRILEVBQW9CLENBRXhCLElBQUksSUFBSUMsRUFBSUgsRUFBTUcsRUFBSUgsRUFBT2pCLEVBQVFvQixJQUNqQyxHQUFvQkMsTUFBakJwQixLQUFLTyxNQUFNWSxJQUErQyxNQUE1Qm5CLEtBQUtPLE1BQU1ZLEdBQUdGLEdBQU1OLEtBR2pELE9BQU8sRUFJZixJQUFJVSxFQUFVLElBQUl4QixFQUFLRSxHQUN2QkMsS0FBS2EsTUFBTVMsS0FBS0QsR0FDaEIsSUFBSSxJQUFJRixFQUFJSCxFQUFNRyxFQUFJSCxFQUFPakIsRUFBUW9CLElBRWpDbkIsS0FBS08sTUFBTVksR0FBR0YsR0FBTU4sS0FBT1UsRUFFL0IsT0FBTyxHQUlmRSxjQUFjUCxFQUFNQyxHQUVrQixNQUEvQmpCLEtBQUtPLE1BQU1TLEdBQU1DLEdBQU1OLE1BQ3RCWCxLQUFLTyxNQUFNUyxHQUFNQyxHQUFNTixLQUFLUCxNQUM1QkosS0FBS08sTUFBTVMsR0FBTUMsR0FBTUwsT0FBUSxHQUdJLE1BQS9CWixLQUFLTyxNQUFNUyxHQUFNQyxHQUFNTixPQUMzQlgsS0FBS08sTUFBTVMsR0FBTUMsR0FBTUwsT0FBUSxHQUl2Q1ksZUFDSSxHQUFHeEIsS0FBS2EsTUFBTVksT0FBTWQsR0FBcUIsR0FBYkEsRUFBS1QsT0FDN0IsT0FBTyxHQ3hGWixNQUFNd0IsRUFDVDVCLGNBQ0lFLEtBQUsyQixVQUFZLElBQUlyQixFQUd6QnNCLGdCQUVJLE9BQU9DLEtBQUtDLE1BQXNCLEdBQWhCRCxLQUFLRSxVQUczQkMsU0FBU0MsRUFBZ0JqQixFQUFNQyxHQUMzQmdCLEVBQWVWLGNBQWNQLEVBQU1DLEdBR3ZDaUIsV0FBV0QsR0FDUCxJQUFJakIsRUFBTyxFQUNQQyxFQUFPLEVBQ1BrQixHQUFZLEVBRWhCLEtBQU1BLEdBQ0ZuQixFQUFPaEIsS0FBSzRCLGdCQUNaWCxFQUFPakIsS0FBSzRCLGdCQUNpQyxHQUExQ0ssRUFBZTFCLE1BQU1TLEdBQU1DLEdBQU1MLFFBQ2hDcUIsRUFBZVYsY0FBY1AsRUFBTUMsR0FDbkNrQixHQUFZLElDeEI1QixJQUFJQyxFQUFZQyxTQUFTQyxjQUFjLGVBQ25DQyxFQUFlRixTQUFTQyxjQUFjLGtCQUN0Q0UsRUFBV0gsU0FBU0MsY0FBYyxjQUNsQ0csRUFBYUosU0FBU0MsY0FBYyxxQkFFakMsU0FBU0ksSUFDWkMsRUFBV1AsR0FFWCxJQUFJLElBQUlqQixFQUFJLEVBQUdBLEVBQUksR0FBSUEsSUFDbkIsSUFBSSxJQUFJeUIsRUFBSSxFQUFHQSxFQUFJLEdBQUlBLElBRW5CLEdBQXVDLE1BQXBDQyxFQUFNbEIsVUFBVXBCLE1BQU1ZLEdBQUd5QixHQUFHakMsTUFBcUQsR0FBckNrQyxFQUFNbEIsVUFBVXBCLE1BQU1ZLEdBQUd5QixHQUFHaEMsTUFBZ0IsQ0FDdkYsSUFBSWtDLEVBQVNULFNBQVNVLGNBQWMsT0FDcENELEVBQU9FLFVBQVVDLElBQUksVUFDckJILEVBQU9JLGFBQWEsS0FBTS9CLEVBQUVnQyxXQUFhUCxFQUFFTyxZQUMzQ2YsRUFBVWdCLFlBQVlOLFFBR3JCLEdBQXVDLE1BQXBDRCxFQUFNbEIsVUFBVXBCLE1BQU1ZLEdBQUd5QixHQUFHakMsTUFBcUQsR0FBckNrQyxFQUFNbEIsVUFBVXBCLE1BQU1ZLEdBQUd5QixHQUFHaEMsTUFBZ0IsQ0FDNUYsSUFBSWtDLEVBQVNULFNBQVNVLGNBQWMsT0FDcENELEVBQU9FLFVBQVVDLElBQUksZUFDckJILEVBQU9JLGFBQWEsS0FBTS9CLEVBQUVnQyxXQUFhUCxFQUFFTyxZQUMzQ2YsRUFBVWdCLFlBQVlOLFFBR3JCLEdBQXVDLE1BQXBDRCxFQUFNbEIsVUFBVXBCLE1BQU1ZLEdBQUd5QixHQUFHakMsTUFBcUQsR0FBckNrQyxFQUFNbEIsVUFBVXBCLE1BQU1ZLEdBQUd5QixHQUFHaEMsTUFBZSxDQUMzRixJQUFJa0MsRUFBU1QsU0FBU1UsY0FBYyxPQUNwQ0QsRUFBT0UsVUFBVUMsSUFBSSxjQUNyQkgsRUFBT0ksYUFBYSxLQUFNL0IsRUFBRWdDLFdBQWFQLEVBQUVPLFlBQzNDZixFQUFVZ0IsWUFBWU4sUUFHckIsR0FBdUMsTUFBcENELEVBQU1sQixVQUFVcEIsTUFBTVksR0FBR3lCLEdBQUdqQyxNQUFxRCxHQUFyQ2tDLEVBQU1sQixVQUFVcEIsTUFBTVksR0FBR3lCLEdBQUdoQyxNQUFlLENBQzNGLElBQUlrQyxFQUFTVCxTQUFTVSxjQUFjLE9BQ3BDRCxFQUFPRSxVQUFVQyxJQUFJLG1CQUNyQkgsRUFBT0ksYUFBYSxLQUFNL0IsRUFBRWdDLFdBQWFQLEVBQUVPLFlBQzNDZixFQUFVZ0IsWUFBWU4sSUFNL0IsU0FBU08sSUFDWlYsRUFBV0osR0FFWCxJQUFJLElBQUlwQixFQUFJLEVBQUdBLEVBQUksR0FBSUEsSUFDbkIsSUFBSSxJQUFJeUIsRUFBSSxFQUFHQSxFQUFJLEdBQUlBLElBRW5CLEdBQTBDLE1BQXZDVSxFQUFTM0IsVUFBVXBCLE1BQU1ZLEdBQUd5QixHQUFHakMsTUFBd0QsR0FBeEMyQyxFQUFTM0IsVUFBVXBCLE1BQU1ZLEdBQUd5QixHQUFHaEMsTUFBZ0IsQ0FDN0YsSUFBSWtDLEVBQVNULFNBQVNVLGNBQWMsT0FDcENELEVBQU9FLFVBQVVDLElBQUksVUFDckJILEVBQU9JLGFBQWEsS0FBTS9CLEVBQUVnQyxXQUFhUCxFQUFFTyxZQUMzQ1osRUFBYWEsWUFBWU4sUUFJeEIsR0FBMEMsTUFBdkNRLEVBQVMzQixVQUFVcEIsTUFBTVksR0FBR3lCLEdBQUdqQyxNQUF3RCxHQUF4QzJDLEVBQVMzQixVQUFVcEIsTUFBTVksR0FBR3lCLEdBQUdoQyxNQUFnQixDQUNsRyxJQUFJa0MsRUFBU1QsU0FBU1UsY0FBYyxPQUNwQ0QsRUFBT0UsVUFBVUMsSUFBSSxVQUNyQkgsRUFBT0ksYUFBYSxLQUFNL0IsRUFBRWdDLFdBQWFQLEVBQUVPLFlBQzNDWixFQUFhYSxZQUFZTixRQUd4QixHQUEwQyxNQUF2Q1EsRUFBUzNCLFVBQVVwQixNQUFNWSxHQUFHeUIsR0FBR2pDLE1BQXdELEdBQXhDMkMsRUFBUzNCLFVBQVVwQixNQUFNWSxHQUFHeUIsR0FBR2hDLE1BQWUsQ0FDakcsSUFBSWtDLEVBQVNULFNBQVNVLGNBQWMsT0FDcENELEVBQU9FLFVBQVVDLElBQUksY0FDckJILEVBQU9JLGFBQWEsS0FBTS9CLEVBQUVnQyxXQUFhUCxFQUFFTyxZQUMzQ1osRUFBYWEsWUFBWU4sUUFHeEIsR0FBMEMsTUFBdkNRLEVBQVMzQixVQUFVcEIsTUFBTVksR0FBR3lCLEdBQUdqQyxNQUF3RCxHQUF4QzJDLEVBQVMzQixVQUFVcEIsTUFBTVksR0FBR3lCLEdBQUdoQyxNQUFlLENBQ2pHLElBQUlrQyxFQUFTVCxTQUFTVSxjQUFjLE9BQ3BDRCxFQUFPRSxVQUFVQyxJQUFJLG1CQUNyQkgsRUFBT0ksYUFBYSxLQUFNL0IsRUFBRWdDLFdBQWFQLEVBQUVPLFlBQzNDWixFQUFhYSxZQUFZTixHQUtmdEMsTUFBTStDLEtBQUtsQixTQUFTbUIsaUJBQWlCLHlCQUUzQ0MsU0FBUVgsSUFDcEJBLEVBQU9ZLGlCQUFpQixRQUFTQyxNQUl6QyxTQUFTaEIsRUFBV3BDLEdBQ2hCLEtBQU1BLEVBQU1xRCxZQUNSckQsRUFBTXNELFlBQVl0RCxFQUFNcUQsWUFJaENwQixFQUFTa0IsaUJBQWlCLFNBQVMsU0FBU0ksR0FDeENyQixFQUFXc0IsWUFBYyxHQUN6QnZCLEVBQVN3QixNQUFNQyxRQUFVLE9BQ3pCQyxPQzdGRyxJQUFJckIsRUFBUSxJQUFJbkIsRUFDWjRCLEVBQVcsSUNIZixjQUFpQjVCLEVBRXBCRSxnQkFFSSxPQUFPQyxLQUFLQyxNQUFzQixHQUFoQkQsS0FBS0UsVUFHM0JHLFdBQVdELEdBQ1AsSUFBSWpCLEVBQU8sRUFDUEMsRUFBTyxFQUNQa0IsR0FBWSxFQUVoQixLQUFNQSxHQUNGbkIsRUFBT2hCLEtBQUs0QixnQkFDWlgsRUFBT2pCLEtBQUs0QixnQkFDaUMsR0FBMUNLLEVBQWUxQixNQUFNUyxHQUFNQyxHQUFNTCxRQUNoQ3FCLEVBQWVWLGNBQWNQLEVBQU1DLEdBQ25Da0IsR0FBWSxHQUt4QmdDLGdCQUFnQnBFLEdBQ1osSUFBSWlCLEVBQU8sRUFDUEMsRUFBTyxFQUNQQyxFQUFhVyxLQUFLRSxTQUFXLEdBQzdCSSxHQUFZLEVBRWhCLEtBQU1BLEdBQ0ZuQixFQUFPaEIsS0FBSzRCLGdCQUNaWCxFQUFPakIsS0FBSzRCLGdCQUNUNUIsS0FBSzJCLFVBQVVaLFVBQVVDLEVBQU1DLEVBQU1sQixFQUFRbUIsS0FDNUNpQixHQUFZLEtENUJ4QixFQUFXRSxTQUFTQyxjQUFjLGNBRS9CLFNBQVNxQixFQUFhRyxHQUN6QixJQUFJTSxFQUFVTixFQUFFTyxPQUFPQyxHQUNuQkMsRUFBSUgsRUFBUSxHQUNaSSxFQUFJSixFQUFRLEdBQzJCLEdBQXhDZCxFQUFTM0IsVUFBVXBCLE1BQU1nRSxHQUFHQyxHQUFHNUQsUUFDOUJpQyxFQUFNYixTQUFTc0IsRUFBUzNCLFVBQVc0QyxFQUFHQyxHQUN0Q25CLElBQ0FDLEVBQVNwQixXQUFXVyxFQUFNbEIsV0FDMUJlLElBS1IsV0FDSSxJQUFJK0IsRUFBa0JqRSxNQUFNK0MsS0FBS2xCLFNBQVNtQixpQkFBaUIseUJBQ3ZEZixFQUFhSixTQUFTQyxjQUFjLHFCQUVyQ2dCLEVBQVMzQixVQUFVSCxnQkFDbEJpQixFQUFXc0IsWUFBYyxXQUN6QlUsRUFBZ0JoQixTQUFRWCxJQUNwQkEsRUFBTzRCLG9CQUFvQixRQUFTZixNQUV4QyxFQUFTSyxNQUFNQyxRQUFVLFNBRXJCcEIsRUFBTWxCLFVBQVVILGlCQUNwQmlCLEVBQVdzQixZQUFjLFlBQ3pCVSxFQUFnQmhCLFNBQVFYLElBQ3BCQSxFQUFPNEIsb0JBQW9CLFFBQVNmLE1BRXhDLEVBQVNLLE1BQU1DLFFBQVUsU0FwQnpCVSxJQXdCRCxTQUFTVCxJQUNackIsRUFBTWxCLFVBQVViLGFBQ2hCd0MsRUFBUzNCLFVBQVViLGFBRW5CK0IsRUFBTWxCLFVBQVVaLFVBQVUsRUFBRSxFQUFFLEdBQUUsR0FDaEM4QixFQUFNbEIsVUFBVVosVUFBVSxFQUFFLEVBQUUsR0FBRSxHQUNoQzhCLEVBQU1sQixVQUFVWixVQUFVLEVBQUUsRUFBRSxHQUFFLEdBQ2hDOEIsRUFBTWxCLFVBQVVaLFVBQVUsRUFBRSxFQUFFLEdBQUUsR0FDaEM4QixFQUFNbEIsVUFBVVosVUFBVSxFQUFFLEVBQUUsR0FBRSxHQUVoQ3VDLEVBQVNhLGdCQUFnQixHQUN6QmIsRUFBU2EsZ0JBQWdCLEdBQ3pCYixFQUFTYSxnQkFBZ0IsR0FDekJiLEVBQVNhLGdCQUFnQixHQUN6QmIsRUFBU2EsZ0JBQWdCLEdBRXpCekIsSUFDQVcsSUV4REphLEsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2FpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZ2V0IGxlbmd0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbiAgICB9XG5cbiAgICBzZXQgbGVuZ3RoKGxlbmd0aCkge1xuICAgICAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGg7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG5cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmKHRoaXMuaGl0cyA9PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCB7IFNoaXAgfSBmcm9tIFwiLi9zaGlwXCI7XG5cbmV4cG9ydCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmJvYXJkID0gW1xuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKVxuICAgICAgICBdXG5cbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdXG4gICAgfVxuXG4gICAgcmVzZXRCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSlcbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxuICAgIH1cblxuICAgIHBsYWNlU2hpcCh4UG9zLCB5UG9zLCBsZW5ndGgsIGlzVmVydGljYWwpIHsgIFxuICAgICAgICBpZihpc1ZlcnRpY2FsID09IGZhbHNlKSB7XG4gICAgICAgICAgICAvL2hvcml6b250YWwgc2hpcFxuICAgICAgICAgICAgZm9yKGxldCBpID0geVBvczsgaSA8IHlQb3MgKyBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbeFBvc11baV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMuYm9hcmRbeFBvc11baV0uc2hpcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgQUxMIHRoZSBzcG90cyBhcmUgZ29vZCBiZWZvcmUgcHV0dGluZyBkb3duIHRoZSBzaGlwXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgYW55IG9mIHRoZSBzcG90cyBoYXZlIGJlZW4gdGFrZW4gYnkgYW5vdGhlciBzaGlwLCB3ZSBjYW5ub3QgcHV0IGEgbmV3IHNoaXAgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vbWFrZSB0aGUgc2hpcCBcbiAgICAgICAgICAgIGxldCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHlQb3M7IGkgPCB5UG9zICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvL3dlIGtub3cgdGhlIHNwb3RzIGhhdmUgYmVlbiBjaGVja2VkLCBzbyB3ZSBjYW4gcHV0IHRoZSBzaGlwIGluIHRob3NlIHNwb3RzXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFt4UG9zXVtpXS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoaXNWZXJ0aWNhbCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvL3ZlcnRpY2FsIHNoaXBcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHhQb3M7IGkgPCB4UG9zICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW2ldID09IHVuZGVmaW5lZCB8fCB0aGlzLmJvYXJkW2ldW3lQb3NdLnNoaXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIEFMTCB0aGUgc3BvdHMgYXJlIGdvb2QgYmVmb3JlIHB1dHRpbmcgZG93biB0aGUgc2hpcFxuICAgICAgICAgICAgICAgICAgICAvL2lmIGFueSBvZiB0aGUgc3BvdHMgaGF2ZSBiZWVuIHRha2VuIGJ5IGFub3RoZXIgc2hpcCwgd2UgY2Fubm90IHB1dCBhIG5ldyBzaGlwIHRoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL21ha2UgdGhlIHNoaXAgXG4gICAgICAgICAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB4UG9zOyBpIDwgeFBvcyArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy93ZSBrbm93IHRoZSBzcG90cyBoYXZlIGJlZW4gY2hlY2tlZCwgc28gd2UgY2FuIHB1dCB0aGUgc2hpcCBpbiB0aG9zZSBzcG90c1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbaV1beVBvc10uc2hpcCA9IG5ld1NoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soeFBvcywgeVBvcykge1xuICAgICAgICAvL2lmIHRoZSBzcXVhcmUgaGFzIGEgc2hpcCBvbiBpdFxuICAgICAgICBpZih0aGlzLmJvYXJkW3hQb3NdW3lQb3NdLnNoaXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4UG9zXVt5UG9zXS5zaGlwLmhpdCgpO1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4UG9zXVt5UG9zXS5pc0hpdCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy9pZiB0aGVyZSBzcXVhcmUgZG9lcyBub3QgaGF2ZSBhIHNoaXAgb24gaXRcbiAgICAgICAgZWxzZSBpZih0aGlzLmJvYXJkW3hQb3NdW3lQb3NdLnNoaXAgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5ib2FyZFt4UG9zXVt5UG9zXS5pc0hpdCA9IHRydWU7ICAgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhbGxTaGlwc1N1bmsoKSB7XG4gICAgICAgIGlmKHRoaXMuc2hpcHMuZXZlcnkoc2hpcCA9PiBzaGlwLnN1bmsgPT0gdHJ1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IEdhbWVib2FyZCB9IGZyb20gXCIuL2dhbWVib2FyZFwiO1xuXG5leHBvcnQgY2xhc3MgUGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQ29vcmQoKSB7XG4gICAgICAgIC8vcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgYW5kIDlcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG5cbiAgICB0YWtlVHVybihlbmVteUdhbWVib2FyZCwgeFBvcywgeVBvcykge1xuICAgICAgICBlbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHhQb3MsIHlQb3MpOyBcbiAgICB9XG5cbiAgICB0YWtlVHVybkFJKGVuZW15R2FtZWJvYXJkKSB7XG4gICAgICAgIGxldCB4UG9zID0gMDtcbiAgICAgICAgbGV0IHlQb3MgPSAwO1xuICAgICAgICBsZXQga2VlcEdvaW5nID0gdHJ1ZTtcblxuICAgICAgICB3aGlsZShrZWVwR29pbmcpIHtcbiAgICAgICAgICAgIHhQb3MgPSB0aGlzLmdlbmVyYXRlQ29vcmQoKTtcbiAgICAgICAgICAgIHlQb3MgPSB0aGlzLmdlbmVyYXRlQ29vcmQoKTtcbiAgICAgICAgICAgIGlmKGVuZW15R2FtZWJvYXJkLmJvYXJkW3hQb3NdW3lQb3NdLmlzSGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZW5lbXlHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4UG9zLCB5UG9zKTtcbiAgICAgICAgICAgICAgICBrZWVwR29pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBodW1hbiwgY29tcHV0ZXIsIGNsaWNrSGFuZGxlciwgc3RhcnRHYW1lIH0gZnJvbSBcIi4vZ2FtZUNvbnRyb2xsZXJcIjtcblxubGV0IGh1bWFuR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtYW4tZ3JpZFwiKTtcbmxldCBjb21wdXRlckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbXB1dGVyLWdyaWRcIik7XG5sZXQgbmV3Um91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1yb3VuZFwiKTtcbmxldCB3aW5uZXJUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5uZXItdGV4dCA+IGgxXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVQbGF5ZXJCb2FyZCgpIHtcbiAgICBjbGVhckJvYXJkKGh1bWFuR3JpZCk7XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgMTA7IGorKykge1xuICAgICAgICAgICAgLy9ubyBzaGlwIG5vIGhpdFxuICAgICAgICAgICAgaWYoaHVtYW4uZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLnNoaXAgPT0gbnVsbCAmJiBodW1hbi5nYW1lYm9hcmQuYm9hcmRbaV1bal0uaXNIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZVwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaS50b1N0cmluZygpICsgai50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBodW1hbkdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTsgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8veWVzIHNoaXAgbm8gaGl0XG4gICAgICAgICAgICBlbHNlIGlmKGh1bWFuLmdhbWVib2FyZC5ib2FyZFtpXVtqXS5zaGlwICE9IG51bGwgJiYgaHVtYW4uZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmlzSGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmUtc2hpcFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaS50b1N0cmluZygpICsgai50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBodW1hbkdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vbm8gc2hpcCB5ZXMgaGl0XG4gICAgICAgICAgICBlbHNlIGlmKGh1bWFuLmdhbWVib2FyZC5ib2FyZFtpXVtqXS5zaGlwID09IG51bGwgJiYgaHVtYW4uZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmlzSGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZS1oaXRcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgaHVtYW5HcmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3llcyBzaGlwIHllcyBoaXRcbiAgICAgICAgICAgIGVsc2UgaWYoaHVtYW4uZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLnNoaXAgIT0gbnVsbCAmJiBodW1hbi5nYW1lYm9hcmQuYm9hcmRbaV1bal0uaXNIaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlLXNoaXAtaGl0XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGh1bWFuR3JpZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVFbmVteUJvYXJkKCkge1xuICAgIGNsZWFyQm9hcmQoY29tcHV0ZXJHcmlkKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAvL25vIHNoaXAgbm8gaGl0XG4gICAgICAgICAgICBpZihjb21wdXRlci5nYW1lYm9hcmQuYm9hcmRbaV1bal0uc2hpcCA9PSBudWxsICYmIGNvbXB1dGVyLmdhbWVib2FyZC5ib2FyZFtpXVtqXS5pc0hpdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyR3JpZC5hcHBlbmRDaGlsZChzcXVhcmUpOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy95ZXMgc2hpcCBubyBoaXQgXG4gICAgICAgICAgICAvL2NvbXB1dGVyIHNoaXAgbXVzdCBiZSBpbnZpc2libGUgdG8gdGhlIGh1bWFuIHBsYXllciBiZWZvcmUgYmVpbmcgaGl0XG4gICAgICAgICAgICBlbHNlIGlmKGNvbXB1dGVyLmdhbWVib2FyZC5ib2FyZFtpXVtqXS5zaGlwICE9IG51bGwgJiYgY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmlzSGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXJHcmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9ubyBzaGlwIHllcyBoaXRcbiAgICAgICAgICAgIGVsc2UgaWYoY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLnNoaXAgPT0gbnVsbCAmJiBjb21wdXRlci5nYW1lYm9hcmQuYm9hcmRbaV1bal0uaXNIaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlLWhpdFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaS50b1N0cmluZygpICsgai50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBjb21wdXRlckdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3llcyBzaGlwIHllcyBoaXRcbiAgICAgICAgICAgIGVsc2UgaWYoY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLnNoaXAgIT0gbnVsbCAmJiBjb21wdXRlci5nYW1lYm9hcmQuYm9hcmRbaV1bal0uaXNIaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlLXNoaXAtaGl0XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyR3JpZC5hcHBlbmRDaGlsZChzcXVhcmUpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBjb21wdXRlclNxdWFyZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItZ3JpZCA+IGRpdlwiKSk7XG5cbiAgICBjb21wdXRlclNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICBzcXVhcmUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gY2xlYXJCb2FyZChib2FyZCkge1xuICAgIHdoaWxlKGJvYXJkLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgYm9hcmQucmVtb3ZlQ2hpbGQoYm9hcmQuZmlyc3RDaGlsZCk7XG4gICAgfVxufVxuXG5uZXdSb3VuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgIG5ld1JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBzdGFydEdhbWUoKTtcbn0pIiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBBSSB9IGZyb20gXCIuL2FpXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZUVuZW15Qm9hcmQsIHBvcHVsYXRlUGxheWVyQm9hcmQgfSBmcm9tIFwiLi9kb21cIjtcblxuZXhwb3J0IGxldCBodW1hbiA9IG5ldyBQbGF5ZXIoKTtcbmV4cG9ydCBsZXQgY29tcHV0ZXIgPSBuZXcgQUkoKTtcbmxldCBuZXdSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXJvdW5kXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xpY2tIYW5kbGVyKGUpIHtcbiAgICBsZXQgY2xpY2tlZCA9IGUudGFyZ2V0LmlkO1xuICAgIGxldCB4ID0gY2xpY2tlZFswXTtcbiAgICBsZXQgeSA9IGNsaWNrZWRbMV07XG4gICAgaWYoY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkW3hdW3ldLmlzSGl0ID09IGZhbHNlKSB7XG4gICAgICAgIGh1bWFuLnRha2VUdXJuKGNvbXB1dGVyLmdhbWVib2FyZCwgeCwgeSlcbiAgICAgICAgcG9wdWxhdGVFbmVteUJvYXJkKCk7XG4gICAgICAgIGNvbXB1dGVyLnRha2VUdXJuQUkoaHVtYW4uZ2FtZWJvYXJkKTtcbiAgICAgICAgcG9wdWxhdGVQbGF5ZXJCb2FyZCgpOyBcbiAgICAgICAgY2hlY2tGb3JXaW4oKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yV2luKCkge1xuICAgIGxldCBjb21wdXRlclNxdWFyZXMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuY29tcHV0ZXItZ3JpZCA+IGRpdlwiKSk7XG4gICAgbGV0IHdpbm5lclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci10ZXh0ID4gaDFcIik7XG5cbiAgICBpZihjb21wdXRlci5nYW1lYm9hcmQuYWxsU2hpcHNTdW5rKCkpIHtcbiAgICAgICAgd2lubmVyVGV4dC50ZXh0Q29udGVudCA9IFwiWW91IFdpbiFcIlxuICAgICAgICBjb21wdXRlclNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICB9KVxuICAgICAgICBuZXdSb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbiAgICBlbHNlIGlmKGh1bWFuLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgTG9zZSFcIlxuICAgICAgICBjb21wdXRlclNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgc3F1YXJlLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgICAgICB9KVxuICAgICAgICBuZXdSb3VuZC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0YXJ0R2FtZSgpIHtcbiAgICBodW1hbi5nYW1lYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgIGNvbXB1dGVyLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG5cbiAgICBodW1hbi5nYW1lYm9hcmQucGxhY2VTaGlwKDIsMyw1LGZhbHNlKTtcbiAgICBodW1hbi5nYW1lYm9hcmQucGxhY2VTaGlwKDAsMSw0LGZhbHNlKTtcbiAgICBodW1hbi5nYW1lYm9hcmQucGxhY2VTaGlwKDQsNCwzLGZhbHNlKTtcbiAgICBodW1hbi5nYW1lYm9hcmQucGxhY2VTaGlwKDYsNywzLGZhbHNlKTtcbiAgICBodW1hbi5nYW1lYm9hcmQucGxhY2VTaGlwKDgsMSwyLGZhbHNlKTtcblxuICAgIGNvbXB1dGVyLnBsYWNlUmFuZG9tU2hpcCg1KTtcbiAgICBjb21wdXRlci5wbGFjZVJhbmRvbVNoaXAoNCk7XG4gICAgY29tcHV0ZXIucGxhY2VSYW5kb21TaGlwKDMpO1xuICAgIGNvbXB1dGVyLnBsYWNlUmFuZG9tU2hpcCgzKTtcbiAgICBjb21wdXRlci5wbGFjZVJhbmRvbVNoaXAoMik7XG4gICAgXG4gICAgcG9wdWxhdGVQbGF5ZXJCb2FyZCgpO1xuICAgIHBvcHVsYXRlRW5lbXlCb2FyZCgpO1xufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgY2xhc3MgQUkgZXh0ZW5kcyBQbGF5ZXIge1xuXG4gICAgZ2VuZXJhdGVDb29yZCgpIHtcbiAgICAgICAgLy9yYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgOVxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cblxuICAgIHRha2VUdXJuQUkoZW5lbXlHYW1lYm9hcmQpIHtcbiAgICAgICAgbGV0IHhQb3MgPSAwO1xuICAgICAgICBsZXQgeVBvcyA9IDA7XG4gICAgICAgIGxldCBrZWVwR29pbmcgPSB0cnVlO1xuXG4gICAgICAgIHdoaWxlKGtlZXBHb2luZykge1xuICAgICAgICAgICAgeFBvcyA9IHRoaXMuZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgeVBvcyA9IHRoaXMuZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgaWYoZW5lbXlHYW1lYm9hcmQuYm9hcmRbeFBvc11beVBvc10uaXNIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHhQb3MsIHlQb3MpO1xuICAgICAgICAgICAgICAgIGtlZXBHb2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcGxhY2VSYW5kb21TaGlwKGxlbmd0aCkge1xuICAgICAgICBsZXQgeFBvcyA9IDBcbiAgICAgICAgbGV0IHlQb3MgPSAwXG4gICAgICAgIGxldCBpc1ZlcnRpY2FsID0gTWF0aC5yYW5kb20oKSA+IDAuNSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgbGV0IGtlZXBHb2luZyA9IHRydWU7XG5cbiAgICAgICAgd2hpbGUoa2VlcEdvaW5nKSB7XG4gICAgICAgICAgICB4UG9zID0gdGhpcy5nZW5lcmF0ZUNvb3JkKCk7XG4gICAgICAgICAgICB5UG9zID0gdGhpcy5nZW5lcmF0ZUNvb3JkKCk7XG4gICAgICAgICAgICBpZih0aGlzLmdhbWVib2FyZC5wbGFjZVNoaXAoeFBvcywgeVBvcywgbGVuZ3RoLCBpc1ZlcnRpY2FsKSkge1xuICAgICAgICAgICAgICAgIGtlZXBHb2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgIH1cbn0iLCJpbXBvcnQgeyBzdGFydEdhbWUgfSBmcm9tIFwiLi9nYW1lQ29udHJvbGxlclwiO1xuXG5zdGFydEdhbWUoKTsiXSwibmFtZXMiOlsiU2hpcCIsImNvbnN0cnVjdG9yIiwibGVuZ3RoIiwidGhpcyIsImhpdHMiLCJzdW5rIiwiX2xlbmd0aCIsImhpdCIsImlzU3VuayIsIkdhbWVib2FyZCIsImJvYXJkIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwic2hpcCIsImlzSGl0Iiwic2hpcHMiLCJyZXNldEJvYXJkIiwicGxhY2VTaGlwIiwieFBvcyIsInlQb3MiLCJpc1ZlcnRpY2FsIiwiaSIsInVuZGVmaW5lZCIsIm5ld1NoaXAiLCJwdXNoIiwicmVjZWl2ZUF0dGFjayIsImFsbFNoaXBzU3VuayIsImV2ZXJ5IiwiUGxheWVyIiwiZ2FtZWJvYXJkIiwiZ2VuZXJhdGVDb29yZCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInRha2VUdXJuIiwiZW5lbXlHYW1lYm9hcmQiLCJ0YWtlVHVybkFJIiwia2VlcEdvaW5nIiwiaHVtYW5HcmlkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29tcHV0ZXJHcmlkIiwibmV3Um91bmQiLCJ3aW5uZXJUZXh0IiwicG9wdWxhdGVQbGF5ZXJCb2FyZCIsImNsZWFyQm9hcmQiLCJqIiwiaHVtYW4iLCJzcXVhcmUiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0QXR0cmlidXRlIiwidG9TdHJpbmciLCJhcHBlbmRDaGlsZCIsInBvcHVsYXRlRW5lbXlCb2FyZCIsImNvbXB1dGVyIiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsaWNrSGFuZGxlciIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsImUiLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiZGlzcGxheSIsInN0YXJ0R2FtZSIsInBsYWNlUmFuZG9tU2hpcCIsImNsaWNrZWQiLCJ0YXJnZXQiLCJpZCIsIngiLCJ5IiwiY29tcHV0ZXJTcXVhcmVzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrRm9yV2luIl0sInNvdXJjZVJvb3QiOiIifQ==