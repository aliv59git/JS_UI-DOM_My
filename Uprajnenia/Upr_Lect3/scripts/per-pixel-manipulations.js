function invertColorButtonClick(){
  var ctx = document.getElementsByTagName('canvas')[0].getContext('2d');
  var imageData = ctx.getImgeData(0, 0, ctx.canvas.width, ctx.canvas.height);
  for (var i = 0; i < imageData.data.length; i+=4) {
    imageData.data[i] = 255 - imageData.data[i];
    imageData.data[i+1] = 255 - imageData.data[i+1];
    imageData.data[i+2] = 255 - imageData.data[i+2];
  }
  ctx.putImageData(imageData, 0, 0);
}

document.getElemenById('invert-colors-btn').addEventListener("click", invertColorButtonClick;