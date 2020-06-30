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



function tooglePause() {
  isLooping = !isLooping;
  if ( isLooping ) {
    mudaJogo('jogo')
    loop();
  } 
  else {
    mudaJogo('jogoPause')
    noLoop();
  }
}




function keyPressed() {
  jogo.keyPressed()
}


