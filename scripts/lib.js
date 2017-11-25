function osc(options) {
  var theta = options.theta || 0;
  var dTheta = options.dTheta || 0.1;
  var amp = options.amp || 1;
  var phase = options.phase || 0;
  return function() {
    theta += dTheta;
    var angle = theta + phase;
    return {
      x: cos(angle) * amp,
      y: sin(angle) * amp,
      rotations: Math.floor(theta / Math.PI / 2.0)
    };
  }
}
