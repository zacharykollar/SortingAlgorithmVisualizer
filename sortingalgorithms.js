var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var sorted = false;
function createArray() {
  sorted = false;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100 + 1);
  }
}

function randArray() {
  sorted = false;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100 + 1);
  }
  changeCols();
}

function loadVisuals() {
  createArray();
  for (let i = 0; i < arr.length; i++) {
    let b = document.createElement("P");
    changeColGraphics(b, i);
    b.classList.className = "worker";
    b.id = "col" + i.toString();
    document.body.appendChild(b);
  }
}

function changeCols() {
  for (let i = 0; i < arr.length; i++) {
    let b = document.getElementById("col" + i.toString());
    let temp = document.getElementById("col" + i.toString());
    changeColGraphics(b, i);
  }
}

function changeColGraphics(col, colid) {
  console.log("timeout");
  col.innerHTML = arr[colid].toString();
  col.style.height = (arr[colid] * 5 + 15).toString() + "px";
}

function bubbleSort() {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      swap(arr, i, i + 1);
    }
  }
}

function swap(list, first, second) {
  console.log("swapp" + first.toString());
  setTimeout(() => {
    let a = list[first];
    list[first] = list[second];
    list[second] = a;
    doc1 = document.getElementById("col" + first.toString());
    doc2 = document.getElementById("col" + second.toString());
    highlight(doc1, doc2);
    setTimeout(() => {
      dehighlight(doc1, doc2);
    }, 1000);
    changeCols();
  }, 1000 * first);
}
function highlight() {
  console.log("high");
  for (let a of arguments) {
    a.style.color = "blue";
  }
}
function dehighlight() {
  console.log("high");
  for (let a of arguments) {
    a.style.color = "black";
  }
}
