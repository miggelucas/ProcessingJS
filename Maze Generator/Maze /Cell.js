

function Cell(i, j) {

  this.i = i;
  this.j = j;

  this.shouldDrawTop = true;
  this.shouldDrawRight = true;
  this.shouldDrawBotton = true;
  this.shouldDrawLeft = true;

  this.visited = false

  this.checkNeighbors = function () {
    var neighbors = [];

    var top = grid[index(this.i, this.j - 1 )];
    var right = grid[index(this.i + 1, this.j)];
    var botton = grid[index(this.i, this.j + 1)];
    var left = grid[index(this.i - 1, this.j)];

    if (top && !top.visited) {
      neighbors.push(top);
    }

    if (right && !right.visited) {
      neighbors.push(right);
    }

    if (botton && !botton.visited) {
      neighbors.push(botton);
    }

    if (left && !left.visited) {
      neighbors.push(left);
    }

    if (neighbors.length > 0) {
      var r = floor(random(0, neighbors.length))
      return neighbors[r]
    } else {
      return undefined
    }

  }

  this.highlight = function() {
    var x = this.i * w;
    var y = this.j * w;

    noStroke();
    fill(0, 0, 255, 100);
    rect(x, y, w, w);
  }

  this.show = function () {
    var xBeginPoint = this.i * w;
    var yBeginPoint = this.j * w;

    var xEndPoint = xBeginPoint + w;
    var yEndPoint = yBeginPoint + w;

    stroke(255);
    // draw a rectangle
    // top
    if (this.shouldDrawTop) {
      line(xBeginPoint, yBeginPoint, xEndPoint, yBeginPoint);
    }
    // right
    if (this.shouldDrawRight) {
      line(xEndPoint, yBeginPoint, xEndPoint, yEndPoint);
    }
    // botton
    if (this.shouldDrawBotton) {
      line(xEndPoint, yEndPoint, xBeginPoint, yEndPoint);
    }
    // left
    if (this.shouldDrawLeft) {
      line(xBeginPoint, yEndPoint, xBeginPoint, yBeginPoint);
    }

    if (this.visited) {
      noStroke();
      fill(255, 0, 255, 100);
      rect(xBeginPoint, yBeginPoint, w, w);
    }


  };

}
