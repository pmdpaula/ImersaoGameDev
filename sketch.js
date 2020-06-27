
let cnv;
    let somDoJogo;
let somColisao;
let somGameOver;
let heroi;
let pontuacao;
let moeda;
let isInicio = true;
let botaoIniciar;

let fontNormal, fontStrong;
let fonts = [];
// let inimigo;
// let inimigoGrande;
// let inimigoVoador;
// let inimigoVoador2;

let particles = [];
let mosquitos = [];
let moscas = [];
let imagemInicio;
let fimJogoGota;
let imagemFimJogoGota;
let fimJogoTroll;
let imagemFimJogoTroll;
let isLooping = true;
let Inimigos = [];
let Stuffs = [];
let distanciaDoChao = 100;
let canvasLargura = 2000;



let arrDefInimigos = [
  personagemInimigo,
  personagemInimigoGrande,
  personagemInimigoVoador,
  // personagemInimigoVoador2,
]


let arrDefStuffs = [
  stuffMoeda,
  stuffCoracao,
]




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




function centerObject(obj) {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  obj.position(x, y);
}




function defCanvasJogo() {
  let isLandscape = windowWidth > windowHeight ? true : false
  let fatorProporcao = [0.52 , 1.7]
  let bordas = isLandscape ? [50, 200] : [20, 180]
  let canvasAltura;

  if ( isLandscape ) {
    // canvasLargura = windowWidth - bordas[0]
    // canvasLargura = 2200
    canvasAltura  = canvasLargura * fatorProporcao[0] - bordas[1]
  }
  else {
    canvasAltura  = windowHeight * fatorProporcao[1] - bordas[1]
    canvasLargura = canvasAltura - bordas[0]
  }
  let canvas = createCanvas(canvasLargura, canvasAltura);

  let proporcao = isLandscape ? canvasLargura/canvasAltura : canvasAltura/canvasLargura
console.log(`isLandscape: ${isLandscape} proporção: ${proporcao}`);
console.log(`windowWidth: ${windowWidth} - windowHeight ${windowHeight}`);
console.log(`width: ${canvasLargura}  height: ${canvasAltura}`);

  return canvas;
}




function defObjetcsOnCene() {
//   distanciaDoChao = width * 0.118
// console.log(`distanciaDoChao: ${distanciaDoChao}`);

  personagemHeroi.alturaTela = height * 0.25;
  personagemHeroi.larguraTela = Math.round(personagemHeroi.alturaTela * 0.815);
  personagemHeroi.distanciaDoChao = personagemHeroi.distanciaDoChao + distanciaDoChao;

  arrDefInimigos.forEach(inimigo => {
    inimigo.alturaTela  = height * inimigo.fatorAlturaTela;
    inimigo.larguraTela = inimigo.alturaTela * inimigo.fatorLarguraTela;
    inimigo.distanciaDoChao = inimigo.distanciaDoChao + distanciaDoChao;

    if ( typeof inimigo.delay === 'object' ) inimigo.delay = random(inimigo.delay[0], inimigo.delay[1])
  })

  arrDefStuffs.forEach(stuff => {
    stuff.alturaTela  = height * stuff.fatorAlturaTela;
    stuff.larguraTela = stuff.alturaTela * stuff.fatorLarguraTela;
    stuff.distanciaDoChao = stuff.distanciaDoChao + distanciaDoChao;

    if ( typeof stuff.delay === 'object' ) stuff.delay = random(stuff.delay[0], stuff.delay[1])
  })


  telaInicio = new InicioJogo(imagemInicio, fonts, toogleInicio);
  cenario = new CenarioHalloween(20);
  cenario1 = new CenarioHalloweenPlano1(20);
  heroi   = new Personagem(personagemHeroi);
  Inimigos = arrDefInimigos.map(inimigo => {
    return new Inimigo(inimigo)
  })

  moeda = new Moeda(arrDefStuffs[0])
}





function setup() {
  cnv = defCanvasJogo();
  centerObject(cnv);

  // cnv.style('display', 'block');
  cnv.parent('sketch-holder');

  defObjetcsOnCene()

  // criaBotaoIniciar()

  // cenario = new Cenario(imagemCenario, 3);
  pontuacao = new Pontuacao();

  fimJogoGota = new FimJogo(imagemFimJogoGota);
  fimJogoTroll = new FimJogo(imagemFimJogoTroll);
  // fimJogoGota = new FimJogo(Inimigos.filter(inimigo => inimigo.nome === 'gota'; return inimigo.nome ));
  // fimJogoTroll = new FimJogo(Inimigos.find(inimigo => inimigo.nome === 'troll'; return inimigo.nome ));

  frameRate(30);     // O frameRate padrão é por volta de 30. Caso queiramos mudar, colocamos essa função.

  somDoJogo.loop();

  for( let i = 0; i < random(3,6); i++ ){
    moscas.push(mosca = new Mosca());
  }
  // for( let i = 0; i < 20; i++ ){
  //   particles.push(new Particula());
  // }
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




function toogleInicio() {
  isInicio = !isInicio;
  if ( isInicio ) {
    noLoop();
  } 
  else {
    loop();
  }
}






function keyPressed() {
  if ( key === 'ArrowUp' && isLooping ) heroi.pula();

  if ( key === ' ' ) {
    toogleLoop()
  }
    
}





function draw() {
  if ( isInicio ) {
    telaInicio.exibe()

    // botaoIniciar.draw()
    // telaInicio
  }
  else {
    cenario.exibe();
    cenario.move();

    heroi.exibe();
    heroi.aplicaGravidade();
    
    moeda.exibe()
    moeda.move()
    
    if ( heroi.estaColidindo(moeda) ) {
      // fimJogo(stuff.nome);
      somDaMoeda.play();
      console.log(`colidindo com ${moeda.nome}`);
      
      // noLoop();
      // filter(GRAY);

      pontuacao.adicionarPontosMoeda()
      moeda.pegaMoeda()
    }

    Inimigos.forEach(inimigo => {
      inimigo.exibe()
      inimigo.move()

      if ( heroi.estaColidindo(inimigo) ) {
        // fimJogo(inimigo.nome);
        somColisao.play();
        console.log(`colidindo com ${inimigo.nome}`);
        
        // noLoop();
        filter(GRAY);

        if ( inimigo.nome === 'gota' || inimigo.nome === 'gota voadora' ) {
          fimJogoGota.exibe();
        }
        else {
          fimJogoTroll.exibe()
        }
        // cenario.exibeGray();
        // heroi.exibeGray();
        // inimigo.exibe();
        // somDoJogo.pause();

      }
    })

    cenario1.exibe();
    cenario1.move();

    pontuacao.exibe();
    pontuacao.adicionarPontos()

    for( let i = 0; i < moscas.length; i++ ) {
      moscas[i].exibe();
      moscas[i].moveParticle();
    }
  }

}

