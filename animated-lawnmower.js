function setup() {
  createCanvas(400, 200);
  colorMode(RGB);
  background(44, 136, 150);
}

var x = 0;
var h = 10;
var cx;
var cy;
var mx = 0;
var click = false;

function draw() {
  cx = x + random(-10, 10);
  cy = height - 10 - random(h);
  stroke(random(50, 112), 163, 90);
  line(x, height - 10, cx, cy);
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }
  
  //flowers
  if (h > 100) {
    fill(random(147, 255), 111, 173);
    circle(cx, cy, random(10, 20))
  }
  
  //start the mower
  if (click) {
    fill(44, 136, 150);
    rect(0, 0, mx, height - 15);
    h = 10;
    mx = mx + 5

  }
  
  //Stopping the mower
  if (mx > width) {
    mx = 0
    click = false
  }
  fill(40, 100, 60);
  rect(0, height - 10, width, 10);
}

function mouseClicked() {
  click = true;
}
