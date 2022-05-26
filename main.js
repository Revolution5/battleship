(()=>{"use strict";class i{constructor(i){this.length=i,this.hits=0,this.sunk=!1}get length(){return this._length}set length(i){this._length=i}hit(){this.hits+=1,this.isSunk()}isSunk(){this.hits==this.length&&(this.sunk=!0)}}class t{constructor(){this.board=[new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1}))),new Array(10).fill(null).map((()=>({ship:null,isHit:!1})))],this.ships=[]}placeShip(t,l,s){if(null==this.board[t][l].ship){let e=new i(s);this.ships.push(e);for(let i=l;i<l+s;i++)this.board[t][i].ship=e}}receiveAttack(i,t){null!=this.board[i][t].ship?(this.board[i][t].ship.hit(),this.board[i][t].isHit=!0):null==this.board[i][t].ship&&(this.board[i][t].isHit=!0)}allShipsSunk(){if(this.ships.every((i=>1==i.sunk)))return!0}}class l{constructor(i){this.isComputer=i,this.gameboard=new t}generateCoord(){return Math.floor(10*Math.random())}takeTurn(i,t,l){i.receiveAttack(t,l)}takeTurnAI(i){let t=0,l=0,s=!0;for(;s;)t=this.generateCoord(),l=this.generateCoord(),0==i.board[t][l].isHit&&(i.receiveAttack(t,l),s=!1)}}function s(i){for(let t=0;t<10;t++)for(let l=0;l<10;l++){let s=document.createElement("div");s.classList.add("square"+t.toString()+l.toString()),i.appendChild(s)}}new l(!1),new l(!0);let e=document.querySelector(".player-grid"),r=document.querySelector(".enemy-grid");s(e),s(r)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQU8sTUFBTUEsRUFDVEMsWUFBWUMsR0FDUkMsS0FBS0QsT0FBU0EsRUFDZEMsS0FBS0MsS0FBTyxFQUNaRCxLQUFLRSxNQUFPLEVBR1pILGFBQ0EsT0FBT0MsS0FBS0csUUFHWkosV0FBT0EsR0FDUEMsS0FBS0csUUFBVUosRUFHbkJLLE1BQ0lKLEtBQUtDLE1BQVEsRUFDYkQsS0FBS0ssU0FHVEEsU0FDT0wsS0FBS0MsTUFBUUQsS0FBS0QsU0FDakJDLEtBQUtFLE1BQU8sSUNwQmpCLE1BQU1JLEVBQ1RSLGNBQ0lFLEtBQUtPLE1BQVEsQ0FDVCxJQUFJQyxNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxNQUN4RCxJQUFJSixNQUFNLElBQUlDLEtBQUssTUFBTUMsS0FBSSxLQUFNLENBQUVDLEtBQU0sS0FBTUMsT0FBTyxPQUc1RFosS0FBS2EsTUFBUSxHQWFqQkMsVUFBVUMsRUFBTUMsRUFBTWpCLEdBQ2xCLEdBQWtDLE1BQS9CQyxLQUFLTyxNQUFNUSxHQUFNQyxHQUFNTCxLQUFjLENBQ3BDLElBQUlNLEVBQVUsSUFBSXBCLEVBQUtFLEdBQ3ZCQyxLQUFLYSxNQUFNSyxLQUFLRCxHQUVoQixJQUFJLElBQUlFLEVBQUlILEVBQU1HLEVBQUlILEVBQU9qQixFQUFRb0IsSUFDakNuQixLQUFLTyxNQUFNUSxHQUFNSSxHQUFHUixLQUFPTSxHQUt2Q0csY0FBY0wsRUFBTUMsR0FFa0IsTUFBL0JoQixLQUFLTyxNQUFNUSxHQUFNQyxHQUFNTCxNQUN0QlgsS0FBS08sTUFBTVEsR0FBTUMsR0FBTUwsS0FBS1AsTUFDNUJKLEtBQUtPLE1BQU1RLEdBQU1DLEdBQU1KLE9BQVEsR0FHSSxNQUEvQlosS0FBS08sTUFBTVEsR0FBTUMsR0FBTUwsT0FDM0JYLEtBQUtPLE1BQU1RLEdBQU1DLEdBQU1KLE9BQVEsR0FJdkNTLGVBQ0ksR0FBR3JCLEtBQUthLE1BQU1TLE9BQU1YLEdBQXFCLEdBQWJBLEVBQUtULE9BQzdCLE9BQU8sR0NyRFosTUFBTXFCLEVBQ1R6QixZQUFZMEIsR0FDUnhCLEtBQUt3QixXQUFhQSxFQUNsQnhCLEtBQUt5QixVQUFZLElBQUluQixFQUd6Qm9CLGdCQUVJLE9BQU9DLEtBQUtDLE1BQXNCLEdBQWhCRCxLQUFLRSxVQUczQkMsU0FBU0MsRUFBZ0JoQixFQUFNQyxHQUMzQmUsRUFBZVgsY0FBY0wsRUFBTUMsR0FHdkNnQixXQUFXRCxHQUNQLElBQUloQixFQUFPLEVBQ1BDLEVBQU8sRUFDUGlCLEdBQVksRUFFaEIsS0FBTUEsR0FDRmxCLEVBQU9mLEtBQUswQixnQkFDWlYsRUFBT2hCLEtBQUswQixnQkFDaUMsR0FBMUNLLEVBQWV4QixNQUFNUSxHQUFNQyxHQUFNSixRQUNoQ21CLEVBQWVYLGNBQWNMLEVBQU1DLEdBQ25DaUIsR0FBWSxJQ3JCckIsU0FBU0MsRUFBY0MsR0FDMUIsSUFBSSxJQUFJaEIsRUFBSSxFQUFHQSxFQUFJLEdBQUlBLElBQ25CLElBQUksSUFBSWlCLEVBQUksRUFBR0EsRUFBSSxHQUFJQSxJQUFLLENBQ3hCLElBQUlDLEVBQVNDLFNBQVNDLGNBQWMsT0FDcENGLEVBQU9HLFVBQVVDLElBQUksU0FBV3RCLEVBQUV1QixXQUFhTixFQUFFTSxZQUNqRFAsRUFBS1EsWUFBWU4sSUFUVCxJQUFJZCxHQUFPLEdBQ1QsSUFBSUEsR0FBTyxHQ0RqQyxJQUFJcUIsRUFBYU4sU0FBU08sY0FBYyxnQkFDcENDLEVBQVlSLFNBQVNPLGNBQWMsZUFFdkNYLEVBQWNVLEdBQ2RWLEVBQWNZLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9nYW1lQ29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9sZW5ndGg7XG4gICAgfVxuXG4gICAgc2V0IGxlbmd0aChsZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fbGVuZ3RoID0gbGVuZ3RoO1xuICAgIH1cblxuICAgIGhpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZih0aGlzLmhpdHMgPT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgeyBTaGlwIH0gZnJvbSBcIi4vc2hpcFwiO1xuXG5leHBvcnQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ib2FyZCA9IFtcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSksXG4gICAgICAgICAgICBuZXcgQXJyYXkoMTApLmZpbGwobnVsbCkubWFwKCgpID0+ICh7c2hpcDogbnVsbCwgaXNIaXQ6IGZhbHNlfSkpLFxuICAgICAgICAgICAgbmV3IEFycmF5KDEwKS5maWxsKG51bGwpLm1hcCgoKSA9PiAoe3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX0pKSxcbiAgICAgICAgICAgIG5ldyBBcnJheSgxMCkuZmlsbChudWxsKS5tYXAoKCkgPT4gKHtzaGlwOiBudWxsLCBpc0hpdDogZmFsc2V9KSlcbiAgICAgICAgXVxuXG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXVxuICAgIH1cblxuICAgIC8vIGZpbGxCb2FyZCgpIHtcbiAgICAvLyAgICAgZm9yKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAvLyAgICAgICAgIGxldCBhcnIgPSBuZXcgQXJyYXkoMTApO1xuICAgIC8vICAgICAgICAgdGhpcy5ib2FyZFtpXSA9IGFycjtcbiAgICAvLyAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgLy8gICAgICAgICAgICAgYXJyW2pdID0ge3NoaXA6IG51bGwsIGlzSGl0OiBmYWxzZX07XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICBwbGFjZVNoaXAoeFBvcywgeVBvcywgbGVuZ3RoKSB7XG4gICAgICAgIGlmKHRoaXMuYm9hcmRbeFBvc11beVBvc10uc2hpcCA9PSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgbmV3U2hpcCA9IG5ldyBTaGlwKGxlbmd0aCk7XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobmV3U2hpcCk7XG4gICAgICAgICAgICAvL2hvcml6b250YWwgc2hpcFxuICAgICAgICAgICAgZm9yKGxldCBpID0geVBvczsgaSA8IHlQb3MgKyBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9hcmRbeFBvc11baV0uc2hpcCA9IG5ld1NoaXA7ICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKHhQb3MsIHlQb3MpIHtcbiAgICAgICAgLy9pZiB0aGUgc3F1YXJlIGhhcyBhIHNoaXAgb24gaXRcbiAgICAgICAgaWYodGhpcy5ib2FyZFt4UG9zXVt5UG9zXS5zaGlwICE9IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeFBvc11beVBvc10uc2hpcC5oaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeFBvc11beVBvc10uaXNIaXQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vaWYgdGhlcmUgc3F1YXJlIGRvZXMgbm90IGhhdmUgYSBzaGlwIG9uIGl0XG4gICAgICAgIGVsc2UgaWYodGhpcy5ib2FyZFt4UG9zXVt5UG9zXS5zaGlwID09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRbeFBvc11beVBvc10uaXNIaXQgPSB0cnVlOyAgIFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYWxsU2hpcHNTdW5rKCkge1xuICAgICAgICBpZih0aGlzLnNoaXBzLmV2ZXJ5KHNoaXAgPT4gc2hpcC5zdW5rID09IHRydWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgeyBHYW1lYm9hcmQgfSBmcm9tIFwiLi9nYW1lYm9hcmRcIjtcblxuZXhwb3J0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3IoaXNDb21wdXRlcikge1xuICAgICAgICB0aGlzLmlzQ29tcHV0ZXIgPSBpc0NvbXB1dGVyO1xuICAgICAgICB0aGlzLmdhbWVib2FyZCA9IG5ldyBHYW1lYm9hcmQ7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVDb29yZCgpIHtcbiAgICAgICAgLy9yYW5kb20gbnVtYmVyIGJldHdlZW4gMCBhbmQgOVxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgIH1cblxuICAgIHRha2VUdXJuKGVuZW15R2FtZWJvYXJkLCB4UG9zLCB5UG9zKSB7XG4gICAgICAgIGVuZW15R2FtZWJvYXJkLnJlY2VpdmVBdHRhY2soeFBvcywgeVBvcyk7IFxuICAgIH1cblxuICAgIHRha2VUdXJuQUkoZW5lbXlHYW1lYm9hcmQpIHtcbiAgICAgICAgbGV0IHhQb3MgPSAwO1xuICAgICAgICBsZXQgeVBvcyA9IDA7XG4gICAgICAgIGxldCBrZWVwR29pbmcgPSB0cnVlO1xuXG4gICAgICAgIHdoaWxlKGtlZXBHb2luZykge1xuICAgICAgICAgICAgeFBvcyA9IHRoaXMuZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgeVBvcyA9IHRoaXMuZ2VuZXJhdGVDb29yZCgpO1xuICAgICAgICAgICAgaWYoZW5lbXlHYW1lYm9hcmQuYm9hcmRbeFBvc11beVBvc10uaXNIaXQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBlbmVteUdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHhQb3MsIHlQb3MpO1xuICAgICAgICAgICAgICAgIGtlZXBHb2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCB7IFBsYXllciB9IGZyb20gXCIuL3BsYXllclwiO1xuXG5leHBvcnQgbGV0IHBsYXllciA9IG5ldyBQbGF5ZXIoZmFsc2UpO1xuZXhwb3J0IGxldCBjb21wdXRlciA9IG5ldyBQbGF5ZXIodHJ1ZSk7XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlQm9hcmQoZ3JpZCkge1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHNxdWFyZS5jbGFzc0xpc3QuYWRkKFwic3F1YXJlXCIgKyBpLnRvU3RyaW5nKCkgKyBqLnRvU3RyaW5nKCkpO1xuICAgICAgICAgICAgZ3JpZC5hcHBlbmRDaGlsZChzcXVhcmUpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgcGxheWVyLCBjb21wdXRlciwgcG9wdWxhdGVCb2FyZH0gZnJvbSBcIi4vZ2FtZUNvbnRyb2xsZXJcIjtcblxubGV0IHBsYXllckdyaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllci1ncmlkXCIpO1xubGV0IGVuZW15R3JpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZW5lbXktZ3JpZFwiKTtcblxucG9wdWxhdGVCb2FyZChwbGF5ZXJHcmlkKTtcbnBvcHVsYXRlQm9hcmQoZW5lbXlHcmlkKTsiXSwibmFtZXMiOlsiU2hpcCIsImNvbnN0cnVjdG9yIiwibGVuZ3RoIiwidGhpcyIsImhpdHMiLCJzdW5rIiwiX2xlbmd0aCIsImhpdCIsImlzU3VuayIsIkdhbWVib2FyZCIsImJvYXJkIiwiQXJyYXkiLCJmaWxsIiwibWFwIiwic2hpcCIsImlzSGl0Iiwic2hpcHMiLCJwbGFjZVNoaXAiLCJ4UG9zIiwieVBvcyIsIm5ld1NoaXAiLCJwdXNoIiwiaSIsInJlY2VpdmVBdHRhY2siLCJhbGxTaGlwc1N1bmsiLCJldmVyeSIsIlBsYXllciIsImlzQ29tcHV0ZXIiLCJnYW1lYm9hcmQiLCJnZW5lcmF0ZUNvb3JkIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwidGFrZVR1cm4iLCJlbmVteUdhbWVib2FyZCIsInRha2VUdXJuQUkiLCJrZWVwR29pbmciLCJwb3B1bGF0ZUJvYXJkIiwiZ3JpZCIsImoiLCJzcXVhcmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ0b1N0cmluZyIsImFwcGVuZENoaWxkIiwicGxheWVyR3JpZCIsInF1ZXJ5U2VsZWN0b3IiLCJlbmVteUdyaWQiXSwic291cmNlUm9vdCI6IiJ9