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
    var b = document.createElement("P");
    changeColGraphics(b, i);
    b.classList.className = "worker";
    b.id = "col" + i.toString();
    document.body.appendChild(b);
  }
}

function changeCols() {
  for (let i = 0; i < arr.length; i++) {
    var b = document.getElementById("col" + i.toString());
    changeColGraphics(b, i);
  }
}

function changeColGraphics(col, colid) {
  col.innerHTML = arr[colid].toString();
  col.style.height = (arr[colid] * 5 + 15).toString() + "px";
  //sorted = false;
}

async function bubbleSort(callback) {
  while (!sorted) {
    sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        //sorted = false;
        console.log("madeit");
        //setTimeout(()=>{(console.log("timeout"))}, 10);
        //setTimeout(()=>{callback(arr, i, i + 1)}, 250 * i);
        await swap(arr, i, i + 1);
      }
    }
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
      }
    }
  }
}

function swap(list, first, second) {
  console.log("swapp");
  setTimeout(() => {
    console.log("timeout");
    var a = list[first];
    list[first] = list[second];
    list[second] = a;
    changeCols();
  }, 100 * first);
}
