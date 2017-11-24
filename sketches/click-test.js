function setup() {
  createCanvas(1200, 720);
  this.drawCircle = false;
}

function draw() {
  if (this.drawCircle) {
    fill(90, 200, 90);
    ellipse(width * 0.5, height * 0.5, 600, 600);
  }
}

function mouseClicked() {
  this.drawCircle = !this.drawCircle;
}
