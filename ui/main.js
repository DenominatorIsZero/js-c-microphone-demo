const FRAMERATE = 60;

// create and set up canvas
function setup() {
  createCanvas(200, 200);
  frameRate(FRAMERATE);
}

// called FRAMERATE times a second
function draw() {
  // black background
  background(0);
  // circle white circle depending on microphones running mean (microphone_process.js)
  ellipse(100, 100, 500 * running_mean, 500 * running_mean);
}
