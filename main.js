(()=>{"use strict";class e{constructor(e){this.length=e,this.hits=0,this.sunk=!1}get length(){return this._length}set length(e){this._length=e}hit(){this.hits+=1,this.isSunk()}isSunk(){this.hits==this.length&&(this.sunk=!0)}}class t{constructor(){this.board=[new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1})))],this.ships=[]}resetBoard(){this.board=[new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1})))],this.ships=[]}placeShip(t,i,r,l){if(0==l){for(let e=i;e<i+r;e++)if(null==this.board[t][e]||null!=this.board[t][e].ship)return!1;let l=new e(r);this.ships.push(l);for(let e=i;e<i+r;e++)this.board[t][e].ship=l;return!0}if(1==l){for(let e=t;e<t+r;e++)if(null==this.board[e]||null!=this.board[e][i].ship)return!1;let l=new e(r);this.ships.push(l);for(let e=t;e<t+r;e++)this.board[e][i].ship=l;return!0}}receiveAttack(e,t){null!=this.board[e][t].ship?(this.board[e][t].ship.hit(),this.board[e][t].isHit=!0):null==this.board[e][t].ship&&(this.board[e][t].isHit=!0)}allShipsSunk(){if(this.ships.every((e=>1==e.sunk)))return!0}}class i{constructor(){this.gameboard=new t}generateCoord(){return Math.floor(10*Math.random())}takeTurn(e,t,i){e.receiveAttack(t,i)}takeTurnAI(e){let t=0,i=0,r=!0;for(;r;)t=this.generateCoord(),i=this.generateCoord(),0==e.board[t][i].isHit&&(e.receiveAttack(t,i),r=!1)}}let r=document.querySelector(".human-grid"),l=document.querySelector(".computer-grid"),a=document.querySelector(".new-round"),n=document.querySelector(".winner-text > h1");function s(){d(r);for(let e=0;e<10;e++)for(let t=0;t<10;t++)if(null==h.gameboard.board[e][t].ship&&0==h.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square"),i.setAttribute("id",e.toString()+t.toString()),r.appendChild(i)}else if(null!=h.gameboard.board[e][t].ship&&0==h.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square-ship"),i.setAttribute("id",e.toString()+t.toString()),r.appendChild(i)}else if(null==h.gameboard.board[e][t].ship&&1==h.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square-hit"),i.setAttribute("id",e.toString()+t.toString()),r.appendChild(i)}else if(null!=h.gameboard.board[e][t].ship&&1==h.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square-ship-hit"),i.setAttribute("id",e.toString()+t.toString()),r.appendChild(i)}}function o(){d(l);for(let e=0;e<10;e++)for(let t=0;t<10;t++)if(null==p.gameboard.board[e][t].ship&&0==p.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square"),i.setAttribute("id",e.toString()+t.toString()),l.appendChild(i)}else if(null!=p.gameboard.board[e][t].ship&&0==p.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square-ship"),i.setAttribute("id",e.toString()+t.toString()),l.appendChild(i)}else if(null==p.gameboard.board[e][t].ship&&1==p.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square-hit"),i.setAttribute("id",e.toString()+t.toString()),l.appendChild(i)}else if(null!=p.gameboard.board[e][t].ship&&1==p.gameboard.board[e][t].isHit){let i=document.createElement("div");i.classList.add("square-ship-hit"),i.setAttribute("id",e.toString()+t.toString()),l.appendChild(i)}Array.from(document.querySelectorAll(".computer-grid > div")).forEach((e=>{e.addEventListener("click",m)}))}function d(e){for(;e.firstChild;)e.removeChild(e.firstChild)}function u(e,t){s(),d(l);let i=document.querySelectorAll(".human-grid > .square");n.textContent="Place your "+e+"!",i.forEach((e=>{e.addEventListener("click",(function(e){let i=e.target.id,r=Number(i[0]),l=Number(i[1]);h.gameboard.placeShip(r,l,t,!1)&&(s(),document.querySelector(".human-label").textContent="YOU",document.querySelector(".computer-label").textContent="YOUR ENEMY",document.querySelector(".winner-text > h1").textContent="",p.placeRandomShip(5),p.placeRandomShip(4),p.placeRandomShip(3),p.placeRandomShip(3),p.placeRandomShip(2),o())}))}))}a.addEventListener("click",(function(e){h.gameboard.resetBoard(),p.gameboard.resetBoard(),n.textContent="",a.style.display="none",u("Carrier",5)}));let h=new i,p=new class extends i{generateCoord(){return Math.floor(10*Math.random())}takeTurnAI(e){let t=0,i=0,r=!0;for(;r;)t=this.generateCoord(),i=this.generateCoord(),0==e.board[t][i].isHit&&(e.receiveAttack(t,i),r=!1)}placeRandomShip(e){let t=0,i=0,r=Math.random()>.5,l=!0;for(;l;)t=this.generateCoord(),i=this.generateCoord(),this.gameboard.placeShip(t,i,e,r)&&(l=!1)}},c=document.querySelector(".new-round");function m(e){let t=e.target.id,i=Number(t[0]),r=Number(t[1]);0==p.gameboard.board[i][r].isHit&&(h.takeTurn(p.gameboard,i,r),o(),p.takeTurnAI(h.gameboard),s(),function(){let e=Array.from(document.querySelectorAll(".computer-grid > div")),t=document.querySelector(".winner-text > h1");p.gameboard.allShipsSunk()?(t.textContent="You Win!",e.forEach((e=>{e.removeEventListener("click",m)})),c.style.display="block"):h.gameboard.allShipsSunk()&&(t.textContent="You Lose!",e.forEach((e=>{e.removeEventListener("click",m)})),c.style.display="block")}())}u("Carrier",5)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxjQUFjLGNBRy9CLFNBQVNxQixFQUFhTyxHQUN6QixJQUFJQyxFQUFVRCxFQUFFRSxPQUFPQyxHQUNuQkMsRUFBSUMsT0FBT0osRUFBUSxJQUNuQkssRUFBSUQsT0FBT0osRUFBUSxJQUNvQixHQUF4Q2IsRUFBUzNCLFVBQVVwQixNQUFNK0QsR0FBR0UsR0FBRzVELFFBQzlCaUMsRUFBTWIsU0FBU3NCLEVBQVMzQixVQUFXMkMsRUFBR0UsR0FDdENuQixJQUNBQyxFQUFTcEIsV0FBV1csRUFBTWxCLFdBQzFCZSxJQUtSLFdBQ0ksSUFBSWtDLEVBQWtCcEUsTUFBTStDLEtBQUtsQixTQUFTbUIsaUJBQWlCLHlCQUN2RGYsRUFBYUosU0FBU0MsY0FBYyxxQkFFckNnQixFQUFTM0IsVUFBVUgsZ0JBQ2xCaUIsRUFBV3dCLFlBQWMsV0FDekJXLEVBQWdCbkIsU0FBUVgsSUFDcEJBLEVBQU8rQixvQkFBb0IsUUFBU2xCLE1BRXhDLEVBQVNlLE1BQU1DLFFBQVUsU0FFckI5QixFQUFNbEIsVUFBVUgsaUJBQ3BCaUIsRUFBV3dCLFlBQWMsWUFDekJXLEVBQWdCbkIsU0FBUVgsSUFDcEJBLEVBQU8rQixvQkFBb0IsUUFBU2xCLE1BRXhDLEVBQVNlLE1BQU1DLFFBQVUsU0FwQnpCRyxJRWZSaEIsRUFBZ0IsVUFBVyxJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zaGlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZ2FtZUNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9haS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0IGxlbmd0aChsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZih0aGlzLmhpdHMgPT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSlcbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxuICAgIH1cblxuICAgIHJlc2V0Qm9hcmQoKSB7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBbXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpXG4gICAgICAgIF1cblxuICAgICAgICB0aGlzLnNoaXBzID0gW11cbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoeFBvcywgeVBvcywgbGVuZ3RoLCBpc1ZlcnRpY2FsKSB7ICBcbiAgICAgICAgaWYoaXNWZXJ0aWNhbCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgLy9ob3Jpem9udGFsIHNoaXBcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHlQb3M7IGkgPCB5UG9zICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvYXJkW3hQb3NdW2ldID09IHVuZGVmaW5lZCB8fCB0aGlzLmJvYXJkW3hQb3NdW2ldLnNoaXAgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAvL2NoZWNrIGlmIEFMTCB0aGUgc3BvdHMgYXJlIGdvb2QgYmVmb3JlIHB1dHRpbmcgZG93biB0aGUgc2hpcFxuICAgICAgICAgICAgICAgICAgICAvL2lmIGFueSBvZiB0aGUgc3BvdHMgaGF2ZSBiZWVuIHRha2VuIGJ5IGFub3RoZXIgc2hpcCwgd2UgY2Fubm90IHB1dCBhIG5ldyBzaGlwIHRoZXJlXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL21ha2UgdGhlIHNoaXAgXG4gICAgICAgICAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSB5UG9zOyBpIDwgeVBvcyArIGxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy93ZSBrbm93IHRoZSBzcG90cyBoYXZlIGJlZW4gY2hlY2tlZCwgc28gd2UgY2FuIHB1dCB0aGUgc2hpcCBpbiB0aG9zZSBzcG90c1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeFBvc11baV0uc2hpcCA9IG5ld1NoaXA7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihpc1ZlcnRpY2FsID09IHRydWUpIHtcbiAgICAgICAgICAgIC8vdmVydGljYWwgc2hpcFxuICAgICAgICAgICAgZm9yKGxldCBpID0geFBvczsgaSA8IHhQb3MgKyBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuYm9hcmRbaV0gPT0gdW5kZWZpbmVkIHx8IHRoaXMuYm9hcmRbaV1beVBvc10uc2hpcCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vY2hlY2sgaWYgQUxMIHRoZSBzcG90cyBhcmUgZ29vZCBiZWZvcmUgcHV0dGluZyBkb3duIHRoZSBzaGlwXG4gICAgICAgICAgICAgICAgICAgIC8vaWYgYW55IG9mIHRoZSBzcG90cyBoYXZlIGJlZW4gdGFrZW4gYnkgYW5vdGhlciBzaGlwLCB3ZSBjYW5ub3QgcHV0IGEgbmV3IHNoaXAgdGhlcmVcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vbWFrZSB0aGUgc2hpcCBcbiAgICAgICAgICAgIGxldCBuZXdTaGlwID0gbmV3IFNoaXAobGVuZ3RoKTtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChuZXdTaGlwKTtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHhQb3M7IGkgPCB4UG9zICsgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvL3dlIGtub3cgdGhlIHNwb3RzIGhhdmUgYmVlbiBjaGVja2VkLCBzbyB3ZSBjYW4gcHV0IHRoZSBzaGlwIGluIHRob3NlIHNwb3RzXG4gICAgICAgICAgICAgICAgdGhpcy5ib2FyZFtpXVt5UG9zXS5zaGlwID0gbmV3U2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayh4UG9zLCB5UG9zKSB7XG4gICAgICAgIC8vaWYgdGhlIHNxdWFyZSBoYXMgYSBzaGlwIG9uIGl0XG4gICAgICAgIGlmKHRoaXMuYm9hcmRbeFBvc11beVBvc10uc2hpcCAhPSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hQb3NdW3lQb3NdLnNoaXAuaGl0KCk7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hQb3NdW3lQb3NdLmlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvL2lmIHRoZXJlIHNxdWFyZSBkb2VzIG5vdCBoYXZlIGEgc2hpcCBvbiBpdFxuICAgICAgICBlbHNlIGlmKHRoaXMuYm9hcmRbeFBvc11beVBvc10uc2hpcCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmJvYXJkW3hQb3NdW3lQb3NdLmlzSGl0ID0gdHJ1ZTsgICBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFsbFNoaXBzU3VuaygpIHtcbiAgICAgICAgaWYodGhpcy5zaGlwcy5ldmVyeShzaGlwID0+IHNoaXAuc3VuayA9PSB0cnVlKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IHsgR2FtZWJvYXJkIH0gZnJvbSBcIi4vZ2FtZWJvYXJkXCI7XG5cbmV4cG9ydCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDb29yZCgpIHtcbiAgICAgICAgLy9yYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgOVxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cblxuICAgIHRha2VUdXJuKGVuZW15R2FtZWJvYXJkLCB4UG9zLCB5UG9zKSB7XG4gICAgICAgIGVuZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeFBvcywgeVBvcyk7IFxuICAgIH1cblxuICAgIHRha2VUdXJuQUkoZW5lbXlHYW1lYm9hcmQpIHtcbiAgICAgICAgbGV0IHhQb3MgPSAwO1xuICAgICAgICBsZXQgeVBvcyA9IDA7XG4gICAgICAgIGxldCBrZWVwR29pbmcgPSB0cnVlO1xuXG4gICAgICAgIHdoaWxlKGtlZXBHb2luZykge1xuICAgICAgICAgICAgeFBvcyA9IHRoaXMuZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgeVBvcyA9IHRoaXMuZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgaWYoZW5lbXlHYW1lYm9hcmQuYm9hcmRbeFBvc11beVBvc10uaXNIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHhQb3MsIHlQb3MpO1xuICAgICAgICAgICAgICAgIGtlZXBHb2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IGh1bWFuLCBjb21wdXRlciwgY2xpY2tIYW5kbGVyLCBzdGFydEdhbWUgfSBmcm9tIFwiLi9nYW1lQ29udHJvbGxlclwiO1xuXG5sZXQgaHVtYW5HcmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1hbi1ncmlkXCIpO1xubGV0IGNvbXB1dGVyR3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItZ3JpZFwiKTtcbmxldCBuZXdSb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXJvdW5kXCIpO1xubGV0IHdpbm5lclRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci10ZXh0ID4gaDFcIik7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZVBsYXllckJvYXJkKCkge1xuICAgIGNsZWFyQm9hcmQoaHVtYW5HcmlkKTtcblxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAvL25vIHNoaXAgbm8gaGl0XG4gICAgICAgICAgICBpZihodW1hbi5nYW1lYm9hcmQuYm9hcmRbaV1bal0uc2hpcCA9PSBudWxsICYmIGh1bWFuLmdhbWVib2FyZC5ib2FyZFtpXVtqXS5pc0hpdCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGh1bWFuR3JpZC5hcHBlbmRDaGlsZChzcXVhcmUpOyAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy95ZXMgc2hpcCBubyBoaXRcbiAgICAgICAgICAgIGVsc2UgaWYoaHVtYW4uZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLnNoaXAgIT0gbnVsbCAmJiBodW1hbi5nYW1lYm9hcmQuYm9hcmRbaV1bal0uaXNIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZS1zaGlwXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGh1bWFuR3JpZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9ubyBzaGlwIHllcyBoaXRcbiAgICAgICAgICAgIGVsc2UgaWYoaHVtYW4uZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLnNoaXAgPT0gbnVsbCAmJiBodW1hbi5nYW1lYm9hcmQuYm9hcmRbaV1bal0uaXNIaXQgPT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlLWhpdFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaS50b1N0cmluZygpICsgai50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBodW1hbkdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8veWVzIHNoaXAgeWVzIGhpdFxuICAgICAgICAgICAgZWxzZSBpZihodW1hbi5nYW1lYm9hcmQuYm9hcmRbaV1bal0uc2hpcCAhPSBudWxsICYmIGh1bWFuLmdhbWVib2FyZC5ib2FyZFtpXVtqXS5pc0hpdCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmUtc2hpcC1oaXRcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgaHVtYW5HcmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZUVuZW15Qm9hcmQoKSB7XG4gICAgY2xlYXJCb2FyZChjb21wdXRlckdyaWQpO1xuXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIC8vbm8gc2hpcCBubyBoaXRcbiAgICAgICAgICAgIGlmKGNvbXB1dGVyLmdhbWVib2FyZC5ib2FyZFtpXVtqXS5zaGlwID09IG51bGwgJiYgY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmlzSGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLmNsYXNzTGlzdC5hZGQoXCJzcXVhcmVcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXJHcmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL3llcyBzaGlwIG5vIGhpdCBcbiAgICAgICAgICAgIC8vY29tcHV0ZXIgc2hpcCBtdXN0IGJlIGludmlzaWJsZSB0byB0aGUgaHVtYW4gcGxheWVyIGJlZm9yZSBiZWluZyBoaXRcbiAgICAgICAgICAgIGVsc2UgaWYoY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLnNoaXAgIT0gbnVsbCAmJiBjb21wdXRlci5nYW1lYm9hcmQuYm9hcmRbaV1bal0uaXNIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZS1zaGlwXCIpO1xuICAgICAgICAgICAgICAgIHNxdWFyZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgICAgIGNvbXB1dGVyR3JpZC5hcHBlbmRDaGlsZChzcXVhcmUpOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vbm8gc2hpcCB5ZXMgaGl0XG4gICAgICAgICAgICBlbHNlIGlmKGNvbXB1dGVyLmdhbWVib2FyZC5ib2FyZFtpXVtqXS5zaGlwID09IG51bGwgJiYgY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmlzSGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZS1oaXRcIik7XG4gICAgICAgICAgICAgICAgc3F1YXJlLnNldEF0dHJpYnV0ZShcImlkXCIsIGkudG9TdHJpbmcoKSArIGoudG9TdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgY29tcHV0ZXJHcmlkLmFwcGVuZENoaWxkKHNxdWFyZSk7IFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy95ZXMgc2hpcCB5ZXMgaGl0XG4gICAgICAgICAgICBlbHNlIGlmKGNvbXB1dGVyLmdhbWVib2FyZC5ib2FyZFtpXVtqXS5zaGlwICE9IG51bGwgJiYgY29tcHV0ZXIuZ2FtZWJvYXJkLmJvYXJkW2ldW2pdLmlzSGl0ID09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuY2xhc3NMaXN0LmFkZChcInNxdWFyZS1zaGlwLWhpdFwiKTtcbiAgICAgICAgICAgICAgICBzcXVhcmUuc2V0QXR0cmlidXRlKFwiaWRcIiwgaS50b1N0cmluZygpICsgai50b1N0cmluZygpKTtcbiAgICAgICAgICAgICAgICBjb21wdXRlckdyaWQuYXBwZW5kQ2hpbGQoc3F1YXJlKTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsZXQgY29tcHV0ZXJTcXVhcmVzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmNvbXB1dGVyLWdyaWQgPiBkaXZcIikpO1xuXG4gICAgY29tcHV0ZXJTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIpO1xuICAgIH0pXG59XG5cbmZ1bmN0aW9uIGNsZWFyQm9hcmQoYm9hcmQpIHtcbiAgICB3aGlsZShib2FyZC5maXJzdENoaWxkKSB7XG4gICAgICAgIGJvYXJkLnJlbW92ZUNoaWxkKGJvYXJkLmZpcnN0Q2hpbGQpO1xuICAgIH1cbn1cblxubmV3Um91bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBodW1hbi5nYW1lYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgIGNvbXB1dGVyLmdhbWVib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgd2lubmVyVGV4dC50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgbmV3Um91bmQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIHBsYWNlUGxheWVyU2hpcChcIkNhcnJpZXJcIiwgNSk7XG59KVxuXG5leHBvcnQgZnVuY3Rpb24gcGxhY2VQbGF5ZXJTaGlwKHNoaXBOYW1lLCBsZW5ndGgpIHtcbiAgICBwb3B1bGF0ZVBsYXllckJvYXJkKCk7XG4gICAgY2xlYXJCb2FyZChjb21wdXRlckdyaWQpO1xuICAgIGxldCBodW1hblNxdWFyZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmh1bWFuLWdyaWQgPiAuc3F1YXJlXCIpO1xuICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBcIlBsYWNlIHlvdXIgXCIgKyBzaGlwTmFtZSArIFwiIVwiO1xuXG4gICAgaHVtYW5TcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgc3F1YXJlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBsZXQgY2xpY2tlZCA9IGUudGFyZ2V0LmlkO1xuICAgICAgICAgICAgbGV0IHggPSBOdW1iZXIoY2xpY2tlZFswXSk7XG4gICAgICAgICAgICBsZXQgeSA9IE51bWJlcihjbGlja2VkWzFdKTtcbiAgICAgICAgICAgIGlmKGh1bWFuLmdhbWVib2FyZC5wbGFjZVNoaXAoeCwgeSwgbGVuZ3RoLCBmYWxzZSkpIHtcbiAgICAgICAgICAgICAgIHBvcHVsYXRlUGxheWVyQm9hcmQoKTtcbiAgICAgICAgICAgICAgIHN0YXJ0R2FtZSgpOyBcbiAgICAgICAgICAgIH0gICAgICAgXG4gICAgICAgIH0pXG4gICAgfSkgICAgXG59IiwiaW1wb3J0IHsgUGxheWVyIH0gZnJvbSBcIi4vcGxheWVyXCI7XG5pbXBvcnQgeyBBSSB9IGZyb20gXCIuL2FpXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZUVuZW15Qm9hcmQsIHBvcHVsYXRlUGxheWVyQm9hcmQsIHBsYWNlUGxheWVyU2hpcCB9IGZyb20gXCIuL2RvbVwiO1xuXG5leHBvcnQgbGV0IGh1bWFuID0gbmV3IFBsYXllcigpO1xuZXhwb3J0IGxldCBjb21wdXRlciA9IG5ldyBBSSgpO1xubGV0IG5ld1JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctcm91bmRcIik7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIGNsaWNrSGFuZGxlcihlKSB7XG4gICAgbGV0IGNsaWNrZWQgPSBlLnRhcmdldC5pZDtcbiAgICBsZXQgeCA9IE51bWJlcihjbGlja2VkWzBdKTtcbiAgICBsZXQgeSA9IE51bWJlcihjbGlja2VkWzFdKTtcbiAgICBpZihjb21wdXRlci5nYW1lYm9hcmQuYm9hcmRbeF1beV0uaXNIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgaHVtYW4udGFrZVR1cm4oY29tcHV0ZXIuZ2FtZWJvYXJkLCB4LCB5KVxuICAgICAgICBwb3B1bGF0ZUVuZW15Qm9hcmQoKTtcbiAgICAgICAgY29tcHV0ZXIudGFrZVR1cm5BSShodW1hbi5nYW1lYm9hcmQpO1xuICAgICAgICBwb3B1bGF0ZVBsYXllckJvYXJkKCk7IFxuICAgICAgICBjaGVja0ZvcldpbigpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tGb3JXaW4oKSB7XG4gICAgbGV0IGNvbXB1dGVyU3F1YXJlcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jb21wdXRlci1ncmlkID4gZGl2XCIpKTtcbiAgICBsZXQgd2lubmVyVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2lubmVyLXRleHQgPiBoMVwiKTtcblxuICAgIGlmKGNvbXB1dGVyLmdhbWVib2FyZC5hbGxTaGlwc1N1bmsoKSkge1xuICAgICAgICB3aW5uZXJUZXh0LnRleHRDb250ZW50ID0gXCJZb3UgV2luIVwiXG4gICAgICAgIGNvbXB1dGVyU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgIH0pXG4gICAgICAgIG5ld1JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxuICAgIGVsc2UgaWYoaHVtYW4uZ2FtZWJvYXJkLmFsbFNoaXBzU3VuaygpKSB7XG4gICAgICAgIHdpbm5lclRleHQudGV4dENvbnRlbnQgPSBcIllvdSBMb3NlIVwiXG4gICAgICAgIGNvbXB1dGVyU3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBzcXVhcmUucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XG4gICAgICAgIH0pXG4gICAgICAgIG5ld1JvdW5kLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRHYW1lKCkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtYW4tbGFiZWxcIikudGV4dENvbnRlbnQgPSBcIllPVVwiO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29tcHV0ZXItbGFiZWxcIikudGV4dENvbnRlbnQgPSBcIllPVVIgRU5FTVlcIjtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbm5lci10ZXh0ID4gaDFcIikudGV4dENvbnRlbnQgPSBcIlwiO1xuXG4gICAgXG4gICAgLy8gaHVtYW4uZ2FtZWJvYXJkLnBsYWNlU2hpcCgyLDMsNSxmYWxzZSk7XG4gICAgLy8gaHVtYW4uZ2FtZWJvYXJkLnBsYWNlU2hpcCgwLDEsNSxmYWxzZSk7XG4gICAgLy8gaHVtYW4uZ2FtZWJvYXJkLnBsYWNlU2hpcCg0LDQsMyxmYWxzZSk7XG4gICAgLy8gaHVtYW4uZ2FtZWJvYXJkLnBsYWNlU2hpcCg2LDcsMyxmYWxzZSk7XG4gICAgLy8gaHVtYW4uZ2FtZWJvYXJkLnBsYWNlU2hpcCg4LDEsMixmYWxzZSk7XG5cbiAgICBjb21wdXRlci5wbGFjZVJhbmRvbVNoaXAoNSk7XG4gICAgY29tcHV0ZXIucGxhY2VSYW5kb21TaGlwKDQpO1xuICAgIGNvbXB1dGVyLnBsYWNlUmFuZG9tU2hpcCgzKTtcbiAgICBjb21wdXRlci5wbGFjZVJhbmRvbVNoaXAoMyk7XG4gICAgY29tcHV0ZXIucGxhY2VSYW5kb21TaGlwKDIpO1xuICAgIFxuICAgIC8vIHBvcHVsYXRlUGxheWVyQm9hcmQoKTtcbiAgICBwb3B1bGF0ZUVuZW15Qm9hcmQoKTtcbn0iLCJpbXBvcnQgeyBQbGF5ZXIgfSBmcm9tIFwiLi9wbGF5ZXJcIjtcblxuZXhwb3J0IGNsYXNzIEFJIGV4dGVuZHMgUGxheWVyIHtcblxuICAgIGdlbmVyYXRlQ29vcmQoKSB7XG4gICAgICAgIC8vcmFuZG9tIG51bWJlciBiZXR3ZWVuIDAgYW5kIDlcbiAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICB9XG5cbiAgICB0YWtlVHVybkFJKGVuZW15R2FtZWJvYXJkKSB7XG4gICAgICAgIGxldCB4UG9zID0gMDtcbiAgICAgICAgbGV0IHlQb3MgPSAwO1xuICAgICAgICBsZXQga2VlcEdvaW5nID0gdHJ1ZTtcblxuICAgICAgICB3aGlsZShrZWVwR29pbmcpIHtcbiAgICAgICAgICAgIHhQb3MgPSB0aGlzLmdlbmVyYXRlQ29vcmQoKTtcbiAgICAgICAgICAgIHlQb3MgPSB0aGlzLmdlbmVyYXRlQ29vcmQoKTtcbiAgICAgICAgICAgIGlmKGVuZW15R2FtZWJvYXJkLmJvYXJkW3hQb3NdW3lQb3NdLmlzSGl0ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgZW5lbXlHYW1lYm9hcmQucmVjZWl2ZUF0dGFjayh4UG9zLCB5UG9zKTtcbiAgICAgICAgICAgICAgICBrZWVwR29pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYWNlUmFuZG9tU2hpcChsZW5ndGgpIHtcbiAgICAgICAgbGV0IHhQb3MgPSAwXG4gICAgICAgIGxldCB5UG9zID0gMFxuICAgICAgICBsZXQgaXNWZXJ0aWNhbCA9IE1hdGgucmFuZG9tKCkgPiAwLjUgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgIGxldCBrZWVwR29pbmcgPSB0cnVlO1xuXG4gICAgICAgIHdoaWxlKGtlZXBHb2luZykge1xuICAgICAgICAgICAgeFBvcyA9IHRoaXMuZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgeVBvcyA9IHRoaXMuZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgaWYodGhpcy5nYW1lYm9hcmQucGxhY2VTaGlwKHhQb3MsIHlQb3MsIGxlbmd0aCwgaXNWZXJ0aWNhbCkpIHtcbiAgICAgICAgICAgICAgICBrZWVwR29pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICB9XG59IiwiaW1wb3J0IHsgc3RhcnRHYW1lIH0gZnJvbSBcIi4vZ2FtZUNvbnRyb2xsZXJcIjtcbmltcG9ydCB7IHBsYWNlUGxheWVyU2hpcCB9IGZyb20gXCIuL2RvbVwiO1xuXG5wbGFjZVBsYXllclNoaXAoXCJDYXJyaWVyXCIsIDUpO1xuLy9wbGFjZVBsYXllclNoaXAoXCJCYXR0bGVzaGlwXCIsIDQpO1xuLy9wbGFjZVBsYXllclNoaXAoXCJDcnVpc2VyXCIsIDMpO1xuLy9wbGFjZVBsYXllclNoaXAoXCJTdWJtYXJpbmVcIiwgMyk7XG4vL3BsYWNlUGxheWVyU2hpcChcIkRlc3Ryb3llclwiLCAyKTtcbi8vc3RhcnRHYW1lKCk7Il0sIm5hbWVzIjpbIlNoaXAiLCJjb25zdHJ1Y3RvciIsImxlbmd0aCIsInRoaXMiLCJoaXRzIiwic3VuayIsIl9sZW5ndGgiLCJoaXQiLCJpc1N1bmsiLCJHYW1lYm9hcmQiLCJib2FyZCIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInNoaXAiLCJpc0hpdCIsInNoaXBzIiwicmVzZXRCb2FyZCIsInBsYWNlU2hpcCIsInhQb3MiLCJ5UG9zIiwiaXNWZXJ0aWNhbCIsImkiLCJ1bmRlZmluZWQiLCJuZXdTaGlwIiwicHVzaCIsInJlY2VpdmVBdHRhY2siLCJhbGxTaGlwc1N1bmsiLCJldmVyeSIsIlBsYXllciIsImdhbWVib2FyZCIsImdlbmVyYXRlQ29vcmQiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJ0YWtlVHVybiIsImVuZW15R2FtZWJvYXJkIiwidGFrZVR1cm5BSSIsImtlZXBHb2luZyIsImh1bWFuR3JpZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvbXB1dGVyR3JpZCIsIm5ld1JvdW5kIiwid2lubmVyVGV4dCIsInBvcHVsYXRlUGxheWVyQm9hcmQiLCJjbGVhckJvYXJkIiwiaiIsImh1bWFuIiwic3F1YXJlIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInNldEF0dHJpYnV0ZSIsInRvU3RyaW5nIiwiYXBwZW5kQ2hpbGQiLCJwb3B1bGF0ZUVuZW15Qm9hcmQiLCJjb21wdXRlciIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGlja0hhbmRsZXIiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwbGFjZVBsYXllclNoaXAiLCJzaGlwTmFtZSIsImh1bWFuU3F1YXJlcyIsInRleHRDb250ZW50IiwiZSIsImNsaWNrZWQiLCJ0YXJnZXQiLCJpZCIsIngiLCJOdW1iZXIiLCJ5IiwicGxhY2VSYW5kb21TaGlwIiwic3R5bGUiLCJkaXNwbGF5IiwiY29tcHV0ZXJTcXVhcmVzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNoZWNrRm9yV2luIl0sInNvdXJjZVJvb3QiOiIifQ==