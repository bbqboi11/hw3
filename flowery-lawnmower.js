function setup() {
  createCanvas(400, 200);
  colorMode(RGB);
}

var x = 0;
var h = 10;
var cx;
var cy;

function draw() {
  cx = x + random(-10, 10);
  cy = height - 10 - random(h);
  stroke(random(50,112), 163, 90);
  line(x, height - 10, cx, cy);
  noStroke();

  x = x + 10;

  if (x > width) {
    x = random(10);
    h = h + 3;
  }
  if (h > 100) {
    fill(random(147,255), 111, 173);
    circle(cx,cy,random(10,20))
  }
  if (mouseIsPressed) {
    fill(44, 136, 150);
    rect(0, 0, width, height - 15);
    h = 10;
  }

  fill(40, 100, 60);
  rect(0, height - 10, width, 10);
}
