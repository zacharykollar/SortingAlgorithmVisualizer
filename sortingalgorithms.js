var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var sorted = false;
var sorts = 0;
var timedelay = 150;
var defaultcolor = "hotpink";
var highlightcolor = "blue";
var comparecolor = "green";

function createArray() {
  sorted = false;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor(Math.random() * 100 + 1);
  }
}

function randArray() {
  sorted = false;
  sorts = 0;
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
    changeColGraphics(b, i);
  }
}

function changeColGraphics(col, colid) {
  col.innerHTML = arr[colid].toString();
  col.style.height = (arr[colid] * 5 + 15).toString() + "px";
}

async function bubbleSort() {
  while (sorts < arr.length - 1 && !sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - (1 + sorts); i++) {
      let compare1 = document.getElementById("col" + i.toString());
      let compare2 = document.getElementById("col" + (i + 1).toString());
      await new Promise((resolve) =>
        setTimeout(() => {
          if (arr[i] > arr[i + 1]) {
            sorted = false;
            swap(arr, i, i + 1);
          } else {
            highlight(comparecolor, compare1, compare2);
            setTimeout(() => {
              highlight(defaultcolor, compare1, compare2);
            }, timedelay);
          }
          resolve();
        }, timedelay)
      );
    }
    sorts++;
  }
  console.log("done");
}

function swap(list, first, second) {
  let a = list[first];
  list[first] = list[second];
  list[second] = a;
  doc1 = document.getElementById("col" + first.toString());
  doc2 = document.getElementById("col" + second.toString());
  console.log("highlight");
  highlight(highlightcolor, doc1, doc2);
  setTimeout(() => {
    highlight(defaultcolor, doc1, doc2);
  }, timedelay);
  changeCols();
}
function highlight(color) {
  for (let a of arguments) {
    if (a.style) {
      a.style.backgroundColor = color;
    }
  }
}
