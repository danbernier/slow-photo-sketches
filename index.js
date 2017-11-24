var sketches;
function preload() {
  // https://developer.github.com/v3/repos/contents/
  // https://stackoverflow.com/questions/25022016/get-all-file-names-from-a-github-repo-through-the-github-api#25023044
  // https://developer.github.com/v3/
  var url = 'https://api.github.com/repos/danbernier/slow-photo-sketches/contents/sketches';
  sketches = loadJSON(url);
}

function setup() {
  for (i in sketches) {
    var link = createA('sketch.html?sketch=' + sketches[i].name, sketches[i].name).class('sketchLink');
    link.position(50, 30 + (i * 80));
  }
}
