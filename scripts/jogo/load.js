
function preload() {
  fonts[0] = loadFont('fonts/OctoberMoon-deql.ttf')
  fonts[1] = loadFont('fonts/OctoberTwilight-Ooe6.ttf')
  // imagemCenario = loadImage('imagens/cenario/floresta.png');
  // imagemHeroi = loadImage(personagemHeroi.nomeImagem);
  personagemHeroi.imagem = loadImage(personagemHeroi.nomeImagem);
  personagemHeroi.imagemPiscando = loadImage(personagemHeroi.nomeImagemPiscando);
  personagemHeroi.imagemPiscando2 = loadImage(personagemHeroi.nomeImagemPiscando2);
  // personagemHeroi.imagem = loadImage(personagemHeroi.nomeImagem);

  arrDefInimigos.forEach(inimigo => {
    inimigo.imagem = loadImage(inimigo.nomeImagem);
  })

  arrDefStuffs.forEach(stuff => {
    stuff.imagem = loadImage(stuff.nomeImagem);
  })

  fita = loadJSON('fita/fita.json')
  imagemInicio = loadImage('imagens/assets/telaInicial.png')
  imagemPause = loadImage('imagens/assets/game_pause.png')
  imagemFimJogoGota = loadImage('imagens/assets/gameover_gota.png')
  imagemFimJogoTroll = loadImage('imagens/assets/gameover_troll.png')
  imagemVida = loadImage('imagens/assets/vida.png')
  imagemVidaPB = loadImage('imagens/assets/vidapb.png')

  somDoJogo = loadSound('sons/trilha_jogo02.wav');
  somGritoBruxa = loadSound('sons/gritobruxa.ogg');
  somGameOver = loadSound('sons/game-over.mp3');
  somDaMoeda = loadSound('sons/moedas.flac')
  somDaVida = loadSound('sons/003_ill-do-my-best.wav')
  somDaVidaCheia = loadSound('sons/002_power-meter-full.wav')
  somBruxaPerdeu = loadSound('sons/003_we-lost.wav')
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
      posicaoDoChao = 50
    }
  }

  // posicaoDoChao = (parseInt(height / 8.5))
  let canvas = createCanvas(canvasSize.cnvW, canvasSize.cnvH);

  // let proporcao = isLandscape ? canvasSize.cnvW/canvasSize.cnvH : canvasSize.cnvH/canvasSize.cnvW
// console.log(`isLandscape: ${isLandscape} proporção: ${proporcao}`);
// console.log(`windowWidth: ${windowWidth} - windowHeight ${windowHeight}`);
// console.log(`width: ${canvasSize.cnvW}  height: ${canvasSize.cnvH} - ${canvasSize.cnvCod}`);
// console.log(posicaoDoChao);

  return canvas;
}






