function setup() {
  createCanvas(1200, 720);
  rectMode(CENTER);
  background(0);
  fill(255, 0, 0);
  noStroke();
}

function draw() {
  inCountdown(function(progress) {
    // Say we want a row of red cubes. How about 10 of them, over 30 seconds?
    // Then we should display about 1 every 3 seconds.

    if (progress <= 1) {
      var inSquareProgress = progress % (1.0 / 10);
      if (inSquareProgress > 0.035 && inSquareProgress < 0.065) {
        rect(width/2, height/2, 450, 450);
      }
      else {
        background(0);
      }
    }
  });
}
