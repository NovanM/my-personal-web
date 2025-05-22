const canvasAbout = document.getElementById('CanvasAboutPage');

var ctx = canvasAbout.getContext("2d");
var img = new Image();
img.src = 'img/programmer.jpeg';

window.onload = function() {
    ctx.drawImage(img, 0, 0, canvasAbout.width, canvasAbout.height);
  };

