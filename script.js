let rows = 5;
let columns = 5;

let currTile;
let otherTile;

let turns = 0;

window.onload = function () {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("img");
      tile.src = "./images/zblank.jpg";

      //Drag Functionality
      tile.addEventListener("dragstart", dragStart); //click on Image to drag
      tile.addEventListener("dragover", dragOver); //drag an image
      tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
      tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
      tile.addEventListener("drop", dragDrop); // drop an image onto another one
      tile.addEventListener("dragend", dragEnd); //after you complete
      document.getElementById("board").append(tile);
    }
  }
};

let pieces = [];
for (let i = 1; i <= rows * columns; i++) {
  pieces.push(i.toString());
}

for (let i = 0; i < pieces.length; i++) {
  let tile = document.createElement("img");
  tile.src = "./images/image_part_0" + pieces[i] + ".jpg";

  //Drag Functionality
  tile.addEventListener("dragstart", dragStart); //click on Image to drag
  tile.addEventListener("dragover", dragOver); //drag an image
  tile.addEventListener("dragenter", dragEnter); //dragging an image into another one
  tile.addEventListener("dragleave", dragLeave); //dragging an image away from another one
  tile.addEventListener("drop", dragDrop); // drop an image onto another one
  tile.addEventListener("dragend", dragEnd); //after you complete
  document.getElementById("pieces").append(tile);
}

function dragStart() {
  currTile = this;
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  e.preventDefault();
}
function dragLeave() {}
function dragDrop(params) {
  otherTile = this;
}
function dragEnd() {
  if (currTile.src.includes("zblank")) {
    return;
  }
  let currImg = currTile.src;
  let otherImg = otherTile.src;

  currTile.src = otherImg;
  otherTile.src = currImg;

  turns += 1;
  document.getElementById("turns").innerText = turns;
}
