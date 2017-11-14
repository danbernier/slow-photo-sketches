function getURLParameter(name) {
  return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [null, ''])[1].replace(/\+/g, '%20')) || null;
}

var sketchName = getURLParameter('sketch');

if (sketchName) {
  var scriptElement = document.createElement('script');
  // script.onload = function () {
  //       //do stuff with the script
  // };
  scriptElement.src = 'sketches/' + sketchName;
  document.head.appendChild(scriptElement);
}
