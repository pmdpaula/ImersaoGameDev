
function preload() {
  fonts[0] = loadFont('fonts/OctoberMoon-deql.ttf')
  fonts[1] = loadFont('fonts/OctoberTwilight-Ooe6.ttf')
  // imagemCenario = loadImage('imagens/cenario/floresta.png');
  // imagemHeroi = loadImage(personagemHeroi.nomeImagem);
  personagemHeroi.imagem = loadImage(personagemHeroi.nomeImagem);

  arrDefInimigos.forEach(inimigo => {
    inimigo.imagem = loadImage(inimigo.nomeImagem);
  })

  arrDefStuffs.forEach(stuff => {
    stuff.imagem = loadImage(stuff.nomeImagem);
  })

  // imagemGameOverGota = loadImage('imagens/inimigos/gotinha-voadora.png');
  imagemInicio = loadImage('imagens/assets/telaInicial.png')
  imagemFimJogoGota = loadImage('imagens/assets/gameover_gota.png')
  imagemFimJogoTroll = loadImage('imagens/assets/gameover_troll.png')
  somDoJogo = loadSound('sons/trilha_jogo02.wav');
  somColisao = loadSound('sons/colisao.ogg');
  somGameOver = loadSound('sons/game-over.mp3');
  somDaMoeda = loadSound('sons/moedas.flac')
}



function defCanvasJogo() {
  let isLandscape = windowWidth > windowHeight ? true : false
  isLandscape = true

  if ( isLandscape ) {
    if ( windowWidth >= canvasSizes[0].cnvW ) {
      canvasSize = canvasSizes[0]
      posicaoDoChao = 100
    }
    else if ( windowWidth >= canvasSizes[1].cnvW && windowWidth < canvasSizes[0].cnvW ) {
      canvasSize = canvasSizes[1]
      posicaoDoChao = 84
    }
    else if ( windowWidth >= canvasSizes[2].cnvW && windowWidth < canvasSizes[1].cnvW ) {
      canvasSize = canvasSizes[2]
      posicaoDoChao = 62
    }
    else {
      canvasSize = canvasSizes[3]
      posicaoDoChao = 62
    }
  }
  let canvas = createCanvas(canvasSize.cnvW, canvasSize.cnvH);

  // let proporcao = isLandscape ? canvasSize.cnvW/canvasSize.cnvH : canvasSize.cnvH/canvasSize.cnvW
// console.log(`isLandscape: ${isLandscape} proporção: ${proporcao}`);
// console.log(`windowWidth: ${windowWidth} - windowHeight ${windowHeight}`);
// console.log(`width: ${canvasSize.cnvW}  height: ${canvasSize.cnvH} - ${canvasSize.cnvCod}`);
  return canvas;
}






