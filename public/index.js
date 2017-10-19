var app = function() {
  var canvas = document.getElementById('main-canvas');
  var context = canvas.getContext("2d");
  var mouseDrawing;

  onMouseDownPress = function(event) {
    mouseDrawing = true;
    context.moveTo(event.x, event.y)
    context.beginPath();
  }

  canvas.addEventListener('mousedown', onMouseDownPress)

  onMouseMove = function(event) {
    if(mouseDrawing) {

      context.lineTo(event.x, event.y)
      context.stroke();
    }
  }

  canvas.addEventListener('mousemove', onMouseMove)

  onMouseRelease = function(event) {
    mouseDrawing = false;
  }

  canvas.addEventListener('mouseup', onMouseRelease)




  var changeColour = function() {
    context.strokeStyle = this.value;
  }
  var colourPicker = document.querySelector("#input-colour");
  colourPicker.addEventListener("change", changeColour);



  var clearCanvas = function(){
    context.clearRect(0, 0, canvas.width, canvas.height);
  }
  var clearButton = document.querySelector("#clearButton");
  clearButton.addEventListener("click", clearCanvas);

  var defaultBrushSize = function(){
    context.lineWidth = 1;
  }

  var defaultBrush = document.querySelector("#default-brush");
  defaultBrush.addEventListener("click", defaultBrushSize)

  var obliterateBrushSize = function(){
    context.lineWidth = 200;
  }

  var obliterateBrush = document.querySelector("#obliterate-brush");
  obliterateBrush.addEventListener("click", obliterateBrushSize)



  var smallBrushSize = function() {
    context.lineWidth = 10;
  }
  var smallBrush = document.querySelector("#sml-brush");
  smallBrush.addEventListener("click", smallBrushSize)

  var mediumBrushSize = function() {
    context.lineWidth = 15;
  }
  var mediumBrush = document.querySelector("#med-brush");
  mediumBrush.addEventListener("click", mediumBrushSize)

}
  // context.fillStyle = "salmon";
  // context.fillRect(10, 10, 100, 50);
  //
  // context.strokeStyle = "blue";
  //
  // context.beginPath();
  // context.moveTo(100, 100);
  // context.lineTo(100, 200);
  // context.closePath();
  // context.stroke();
  //
  // context.beginPath();
  // context.moveTo(200, 200);
  // context.lineTo(200, 300);
  // context.lineTo(100, 300);
  // context.closePath();
  // context.stroke();
  // context.fill();
  //
  // context.beginPath();
  // context.arc(400, 300, 50, 0, 1.5 * Math.PI);
  // context.stroke();
  // context.fill();
  //
  //
  //
  //
  //
  // var img = document.createElement('img')
  // img.src = "http://emojis.slackmojis.com/emojis/images/1457563042/312/doge.png"
  //
  // var drawDoge = function() {
  //   context.drawImage(img, 200, 200, 90, 90);
  // }
  //
  // img.addEventListener("load", drawDoge);
  //

  //
  // var drawCircle = function(x, y) {
  //   context.beginPath();
  //   context.arc(x, y, 50, 0, 2 * Math.PI);
  //   context.stroke();
  //   // context.fill();
  // }
  //
  // canvas.addEventListener('mousemove', function(event) {
  //   drawCircle(event.x, event.y);
  // })


window.addEventListener("load", app);
