let x = 0;
let y = 0;

let spacing = 10;

function setup() {
  createCanvas(800, 800);
  background(0);
}

function draw() {

  frameRate(120);

  stroke(255);
  if (random(1) < 0.8) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }

  x = x + spacing
  if (x > width) {
    x = 0;
    y = y + spacing;
  }
   
}
