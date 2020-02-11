var x = 230;
var y = 220;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  noStroke();

  // draw pipe
  fill(163, 150, 139);
  rect(0, 200, x, 20);

  // draw drip
  fill(50, 149, 168);
  ellipse(x, y, 10);
  if (mouseIsPressed)
  y=220

  
  // down 3 pixels each frame, but maybe should be accelerating?
  y = y + 3

  // if invisible for a full “height” amount…
  if (y > height*2) {
    // reset
    y = 220;
  }
}
