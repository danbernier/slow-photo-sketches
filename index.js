var sketches;
function preload() {
  var url = 'https://api.github.com/repos/danbernier/slow-photo-sketches/contents/sketches';
  sketches = loadJSON(url);
  console.log(sketches);
}

function setup() {
  for (i in sketches) {
    var link = createA('sketch.html?sketch=' + sketches[i].name, sketches[i].name).class('sketchLink');
    link.position(50, 30 + (i * 30));
  }
}
