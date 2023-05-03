let num = 60;
let mx = [];
let my = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  fill(windowWidth, windowHeight);
  for (let i = 0; i < num; i++) {
    mx.push(i);
    my.push(i);
  }
}

function draw() {
  background(255, 182, 193);

  // Cycle through the array, using a different entry on each frame.
  // Using modulo (%) like this is faster than moving all the values over.
  let which = frameCount % num;
  mx[which] = mouseX;
  my[which] = mouseY;

  for (let i = 0; i < num; i++) {
    // which+1 is the smallest (the oldest in the array)
    let index = (which + 1 + i) % num;
    ellipse(mx[index], my[index], i, i);
  }
}

// function setup() {
//   createCanvas(windowWidth, windowHeight);
// }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
