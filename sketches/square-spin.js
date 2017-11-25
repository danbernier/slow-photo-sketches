function setup() {
  createCanvas(displayWidth, displayHeight);
  background(0);
  noStroke();
  colorMode(HSB, 360, 100, 100);
  rectMode(CENTER);

  this.angle = 0;
}

function draw() {
  inCountdown(function(progress) {
    this.angle += 0.01;

    push();
    translate(width/2, height/2);
    rotate(this.angle);
    noStroke();
    //strokeWeight(125);
    fill(progress * 360, 100, 100);
    rect(0, 0, 600, 600);
    pop();
  });
}
