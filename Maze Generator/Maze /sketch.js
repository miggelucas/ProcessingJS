var cols, rows;
var w = 20;
var grid = [];

var current;

var stack = [];

function setup() {
  createCanvas(800, 800);
  cols = floor(width / w);
  rows = floor(height / w);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];

}

function draw() {
  background(51);
  frameRate(60);

  for (i = 0; i < grid.length; i ++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();

  var next = current.checkNeighbors();
  if (next) {
    next.visited = true;

    stack.push(current);

    removeWalls(current, next);

    current = next
  } else if (stack.length > 0) {
    current = stack.pop();

  }
}

function index(i, j) {
  if (i < 0 || j < 0 || i > cols - 1 || j > rows - 1) {
    return -1;
  }
  return i + j * cols;
}


function removeWalls(a, b) {
  var x = a.i - b.i;
  console.log(a)

  if (x === 1) {
    a.shouldDrawLeft = false;
    b.shouldDrawRight = false;

  } else if (x === -1) {
    a.shouldDrawRight = false;
    b.shouldDrawLeft = false;
  }

  var y = a.j - b.j;
   
  if (y === 1) {
    a.shouldDrawTop = false;
    b.shouldDrawBotton = false;

  } else if (y === -1) {
    a.shouldDrawBotton = false;
    b.shouldDrawTop = false;
  }


}

