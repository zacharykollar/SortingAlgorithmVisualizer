var arr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var sorted = false;
var sorts = 0;
var timedelay = 750;
var defaultcolor = "hotpink";
var highlightcolor = "blue";
var comparecolor = "green";
//var searchval = document.getElementById("searchval");

//these are the algorithms
function binarySearch(array) {
  if (document.getElementById("searchval").value != null) {
    console.log("exists");
  } else {
    console.log("nonexistant");
  }
  let x = searchval.value;
  console.log(x.toString() + ":start");
  if (sorted) {
    let start = 0,
      end = array.length - 1;
    // Iterate while start not meets end
    while (start <= end) {
      // Find the mid index

      let mid = Math.floor((start + end) / 2);
      highlight(comparecolor, mid);
      console.log(x.toString() + ":" + arr[mid].toString());
      // If element is present at mid, return True
      if (arr[mid] == x) {
        console.log("Found at: " + mid.toString() + ":" + x);
        highlight(
          highlightcolor,
          document.getElementById("col" + mid.toString())
        );
        setTimeout(() => {
          removeHighlights();
        }, timedelay);

        return;
      }
      // Else look in left or right half accordingly
      else if (arr[mid] < x) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    console.log(x.toString() + " Does not Exist");
  } else {
    console.log("Sort before searching");
    setTimeout(() => {
      removeHighlights();
    }, timedelay);
  }
}

//to use, call this function from a button and from the end of the function you want to loop with that function as a parameter.
async function loopHandler(func) {
  if (!sorted) {
    func;
  }
}

//functions properly
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

//handler active; loopHandler(func)
async function insertionSort() {
  let br = false;
  let inserts = 1;
  if (sorted) {
    console.log("already sorted");
    return;
  }
  for (let i = inserts; i < arr.length - 1; i++) {
    //check for number of sorted elements
    if (arr[i] >= arr[i - 1] || i == 0) {
      inserts++;
    } else {
      break;
    }
  }
  doc1 = document.getElementById("col" + inserts.toString());
  let element = arr[inserts];
  highlight(highlightcolor, doc1);
  console.log(element);
  console.log(inserts);
  await new Promise((resolve) =>
    setTimeout(() => {
      for (let i = 0; i < inserts; i++) {
        if (element <= arr[i]) {
          for (let a = inserts; a > i; a--) {
            arr[a] = arr[a - 1];
          }
          arr[i] = element;
          highlight(
            comparecolor,
            document.getElementById("col" + i.toString())
          );
          setTimeout(() => {}, timedelay);
          br = true;
        }
        resolve();
        if (br) {
          break;
        }
      }
    }, timedelay)
  );
  if (inserts == arr.length - 1) {
    sorted = true;
  }
  inserts++;
  removeHighlights();
  changeCols();
  loopHandler(insertionSort());
}

//start at bottom, pull up vals until you find one that is lower swap them
async function selectionSort() {
  for (let i = 0; i < arr.length - 1; i++) {
    //select moveable
    removeHighlights();
    highlight(highlightcolor, i);
    setTimeout(() => {
      for (let a = i; a < arr.length; a++) {
        //select inner
        //highlight(highlightcolor, a)
        if (arr[a] < arr[i]) {
          setTimeout(() => {
            console.log("here");
          }, timedelay);
          swap(arr, a, i);
        }
        //highlight(defaultcolor, a);
      }
    }, timedelay * i);
  }
  sorted = true;
}

//here down are tool functions/generics
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

function removeHighlights() {
  for (let i = 0; i < arr.length; i++) {
    highlight(defaultcolor, document.getElementById("col" + i.toString()));
  }
}

function highlight(color) {
  for (let a of arguments) {
    if (a.style) {
      a.style.backgroundColor = color;
    }
  }
}
