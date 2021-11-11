var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function createArray() {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100 + 1);
  }
}

function loadVisuals() {
  createArray();
  for (let i = 0; i < arr.length; i++) {
    var b = document.createElement("p");
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
  col.innerHTML = arr[colid.toString()];
  col.style.minHeight = arr[colid].toString() * 5 + "px";
}
