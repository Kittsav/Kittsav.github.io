//let x = 10;
//let y = 10;
//let dim = 20;

var canvas;

function setup() {
  createCanvas(windowWidth, windowHeight);
 // canvas.position(0, 0);
  //canvas.style('z-index', '100');
  
  noStroke();
}

function draw() {
  background(102);
  
  x = x + 0.8;
  if (x > width + dim) {
    x = -dim;
  }

  for (let i = 0; i < 100; i++) {
    translate(x, height / 2 - dim / 2);
    rotate(PI / 3.0);
    fill(255);
    rect(x, y, dim, dim);
  }

}
