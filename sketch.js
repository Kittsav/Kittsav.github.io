
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0, 10);
  stroke('white');
  fill('white');
  strokeWeight(20);
  if (mouseIsPressed === false) {
    ellipse(mouseX, mouseY, 5, 5);
  }
}