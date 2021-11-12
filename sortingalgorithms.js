var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function createArray() {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100 + 1);
  }
}

function loadVisuals() {
  createArray();
  for (let i = 0; i < arr.length; i++) {
    var b = document.createElement("P");
    changeColGraphics(b, i);
    b.classList.className = "worker";
    b.id = "col" + i.toString();
    document.body.appendChild(b);
  }
}

function changeCols() {
  createArray();
  for (let i = 0; i < arr.length; i++) {
    var b = document.getElementById("col" + i.toString());
    changeColGraphics(b, i);
  }
}

function changeColGraphics(col, colid) {
  col.innerHTML = arr[colid].toString();
  console.log((arr[colid]*5).toString()+"px");
  col.style.height = (arr[colid] * 5).toString() + "px";
}
