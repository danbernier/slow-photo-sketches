function inCountdown(drawFn) {
  background(0);

  if (timeLeft() > 0) {
    push();
    noStroke();
    fill(30, 60, 30);
    var size = map(timeLeft(), 5000, 2000, 300, 0);
    ellipse(width/2, height/2, max(0, size), max(0, size));
    pop();
  }
  else {
    var progress = (millis() - this.countdownStart - 5000) / 30000.0;
    if (progress <= 1) {
      drawFn(progress);
    }
  }
}

function startCountdown() {
  this.countdownStart = millis();
}

function timeLeft() {
  var timeSpent = 0;
  if (this.countdownStart) {
    timeSpent = millis() - this.countdownStart;
  }
  return 5000 - timeSpent;
}


function mousePressed() { // also called by touchStarted
  startCountdown();
}
