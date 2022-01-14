<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="sortingstyle.css" rel="stylesheet" type="text/css" />
    <script src="sortingalgorithms.js"></script>
    <title>Sorting Algorithm Visualizer</title>
  </head>
  <body onload="loadVisuals()">
    <h1>Sorting Algorithm Visualizer</h1>
    <h2>Select an Algorithm</h2>
    <button onclick="randArray()">Randomize</button>
    <button onclick="bubbleSort()">BubbleSort</button>
    <button onclick="loopHandler(insertionSort())">InsertionSort</button>
    <button onclick="selectionSort()">SelectionSort</button>
    <button onclick="quickSort()">QuickSort</button>
    <button onclick="binarySearch(arr)">Click to Search</button>
    <input id="searchval" type="number" />
    <h2>Values</h2>
  </body>
</html>