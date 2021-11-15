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
   // setTimeout(() => {
      let b = document.getElementById("col" + i.toString());
      changeColGraphics(b, i);
   // }, 1500 * i);
  }
}

function changeColGraphics(col, colid) {
  //setTimeout(() => {
  console.log("timeout");
  col.innerHTML = arr[colid].toString();
  col.style.height = (arr[colid] * 5 + 15).toString() + "px";
  //}, 100 * colid);
  //bubbleSort();
  //sorted = false;
}

function bubbleSort(callback) {
  //while (!sorted) {
  //  sorted = true;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        //sorted = false;
        console.log("madeit");
        //setTimeout(()=>{callback(arr, i, i + 1)}, 250 * i);
         swap(arr, i, i + 1);
      }
    }
    /*for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
      }
    }
  }*/
}

function swap(list, first, second) {
  console.log("swapp" + first.toString());

  setTimeout(() => {
  //console.log("timeout");
  let a = list[first];
  list[first] = list[second];
  list[second] = a;
  changeCols();
  }, 1000 * first);
}
function highlight(){
  
}
