function centerObject(obj) {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  obj.position(x, y);
}



function windowResized() {
  // cnv = defCanvasJogo();
  centerObject(cnv);
  // defObjetcsOnCene()
}



function toogleLoop() {
  isLooping = !isLooping;
  if ( isLooping ) {
    loop();
  } 
  else {
    noLoop();
  }
}




function keyPressed() {
  jogo.keyPressed()
}


