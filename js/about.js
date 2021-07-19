const canvasAbout = document.getElementById('CanvasAboutPage');

var ctx = canvasAbout.getContext("2d");
var img = new Image();
img.src = 'https://media-exp1.licdn.com/dms/image/C4D03AQGkLfG1RHTGoQ/profile-displayphoto-shrink_800_800/0/1623459660489?e=1631750400&v=beta&t=GQmL6BFoM9fyjCmOhz2t0KxLtqjgBRj_mW6J3VHC1hA'

window.onload = function() {
    ctx.drawImage(img, 0, 0, 800, 700, 0, 0,400,350 );
  };

