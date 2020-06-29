
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




function defObjetcsOnCene() {

  personagemHeroi.alturaTela = height * 0.25;
  personagemHeroi.larguraTela = Math.round(personagemHeroi.alturaTela * 0.815);
  personagemHeroi.distanciaDoChao = personagemHeroi.distanciaDoChao + posicaoDoChao;

  arrDefInimigos.forEach(inimigo => {
    inimigo.alturaTela      = height * inimigo.fatorAlturaTela;
    inimigo.larguraTela     = inimigo.alturaTela * inimigo.fatorLarguraTela;
    inimigo.velocidade      = inimigo.velocidade + velocidadeInimigos

    if ( canvasSize.cnvCod === 'xl-l' ) {
      inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao;
    }
    else if ( canvasSize.cnvCod === 'lg-l' ) {
      inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao + 4;
    }
    else if ( canvasSize.cnvCod === 'md-l' ) {
      if ( inimigo.nome === 'troll' ) {
        inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao + 24 ;
      }
      else if ( inimigo.nome === 'gota voadora' )  {
        inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao - 28 ;
      }
      else {
        inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao + 8;
      }  
    }
    else if ( canvasSize.cnvCod === 'sm-l' ) {
      if ( inimigo.nome === 'troll' ) {
        inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao + 24 ;
      }
      else if ( inimigo.nome === 'gota voadora' )  {
        inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao - 28 ;
      }
      else {
        inimigo.distanciaDoChao = inimigo.distanciaDoChao + posicaoDoChao + 8;
      }
    
    }

    if ( typeof inimigo.delay === 'object' ) inimigo.delay = random(inimigo.delay[0], inimigo.delay[1])
    // console.log(inimigo );

  })



  arrDefStuffs.forEach(stuff => {
    if ( canvasSize.cnvCod === 'xl-l' ) {
      stuff.alturaTela  = height * stuff.fatorAlturaTela;
      stuff.larguraTela = stuff.alturaTela * stuff.fatorLarguraTela;
      stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao;
  
      if ( typeof stuff.delay === 'object' ) stuff.delay = random(stuff.delay[0], stuff.delay[1])
    }
    if ( canvasSize.cnvCod === 'lg-l' ) {
      stuff.alturaTela  = height * stuff.fatorAlturaTela;
      stuff.larguraTela = stuff.alturaTela * stuff.fatorLarguraTela;
      stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao - 30;
  
      if ( typeof stuff.delay === 'object' ) stuff.delay = random(stuff.delay[0], stuff.delay[1])
    }
    if ( canvasSize.cnvCod === 'md-l' ) {
      stuff.alturaTela  = height * stuff.fatorAlturaTela;
      stuff.larguraTela = stuff.alturaTela * stuff.fatorLarguraTela;
      stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao - 90;
  
      if ( typeof stuff.delay === 'object' ) stuff.delay = random(stuff.delay[0], stuff.delay[1])
    }
    if ( canvasSize.cnvCod === 'sm-l' ) {
      stuff.alturaTela  = height * stuff.fatorAlturaTela;
      stuff.larguraTela = stuff.alturaTela * stuff.fatorLarguraTela;
      stuff.distanciaDoChao = stuff.distanciaDoChao + posicaoDoChao - 120;
  
      if ( typeof stuff.delay === 'object' ) stuff.delay = random(stuff.delay[0], stuff.delay[1])
    }

  })


  telaInicio = new InicioJogo(imagemInicio, fonts);
  cenario = new CenarioHalloween(20);
  cenario1 = new CenarioHalloweenPlano1(20);
  heroi   = new Personagem(personagemHeroi);
  inimigos = arrDefInimigos.map(inimigo => {
    return new Inimigo(inimigo)
  })

  moeda = new Moeda(arrDefStuffs[0])
}


