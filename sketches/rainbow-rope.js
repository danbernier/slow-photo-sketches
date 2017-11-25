function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  noStroke();
  colorMode(HSB, 360, 100, 100);
}

function draw() {
  inCountdown(function(progress) {
    var hue = progress * 360;
    fill(hue, 100, 100);
    rect(0, 0, width, height);
  });
}
