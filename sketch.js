
let cnv;
let somDoJogo;
let somColisao;
let somGameOver;
let heroi;
let pontuacao;
let moeda;
// let inimigo;
// let inimigoGrande;
// let inimigoVoador;
// let inimigoVoador2;

let particles = [];
let mosquitos = [];
let moscas = [];
let fimJogoGota;
let imagemFimJogoGota;
let fimJogoTroll;
let imagemFimJogoTroll;
let isLooping = true;
let Inimigos = [];
let Stuffs = [];




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
  let fatorProporcao = 0.7
  let bordas = isLandscape ? [15, 200] : [10, 180]
  let maxLargura = windowHeight * ( 1 + (1 - fatorProporcao) )
  let maxAltura = windowWidth * fatorProporcao;
  let canvasLargura, canvasAltura;

  if ( isLandscape ) {
    canvasLargura = windowWidth > maxLargura ? maxLargura : windowWidth
    canvasAltura  = windowHeight > maxAltura ? maxAltura : windowHeight
  }
  // canvasLargura = isLandscape ? windowWidth : 900;
  // canvasAltura  = isLandscape ? windowWidth * 0.7 : 900;
  let canvas = createCanvas(canvasLargura - bordas[0], canvasAltura - bordas[1]);

  let proporcao = isLandscape ? windowWidth/windowHeight : windowHeight/windowWidth
console.log(`isLandscape: ${isLandscape} proporção: ${proporcao}`);
console.log(`windowWidth: ${windowWidth} - windowHeight ${windowHeight}`);
console.log(`width: ${width}  height: ${height}`);

  return canvas;
}




function defObjetcsOnCene() {
  personagemHeroi.alturaTela = height * 0.25;
  personagemHeroi.larguraTela = Math.round(personagemHeroi.alturaTela * 0.815);

  arrDefInimigos.forEach(inimigo => {
    inimigo.alturaTela  = height * inimigo.fatorAlturaTela;
    inimigo.larguraTela = inimigo.alturaTela * inimigo.fatorLarguraTela;

    if ( typeof inimigo.delay === 'object' ) inimigo.delay = random(inimigo.delay[0], inimigo.delay[1])
  })

  arrDefStuffs.forEach(stuff => {
    stuff.alturaTela  = height * stuff.fatorAlturaTela;
    stuff.larguraTela = stuff.alturaTela * stuff.fatorLarguraTela;

    if ( typeof stuff.delay === 'object' ) stuff.delay = random(stuff.delay[0], stuff.delay[1])
  })

  cenario = new CenarioHalloween(20);
  heroi   = new Personagem(personagemHeroi);
  Inimigos = arrDefInimigos.map(inimigo => {
    return new Inimigo(inimigo)
  })

  moeda = new Moeda(arrDefStuffs[0])
}





function setup() {
  cnv = defCanvasJogo();

  centerObject(cnv);

  cnv.style('display', 'block');
  cnv.parent('sketch-holder');

  defObjetcsOnCene()

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








function keyPressed() {
  if ( key === 'ArrowUp' && isLooping ) heroi.pula();

  if ( key === ' ' ) {
    toogleLoop()
  }
    
}






// function fimJogo(nomeInimigo) {
//   // somColisao.play();
//   // cenario.exibeGray();
//   // heroi.exibeGray();
//   filter(GRAY);
//   // somDoJogo.pause();
  
//   Inimigos.forEach(inimigo => {
//     if ( inimigo.nome === nomeInimigo ) {
//       inimigo.exibeGray();
//     }
//     else {
//       inimigo.exibe();
//     }  
//   })
  
//   noLoop();
// }





function draw() {
  cenario.exibe();
  cenario.move();

  pontuacao.exibe();
  pontuacao.adicionarPontos()

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







  for( let i = 0; i < moscas.length; i++ ) {
    moscas[i].exibe();
    moscas[i].moveParticle();
  }

  // for( let i = 0; i < particles.length; i++ ) {
  //   particles[i].createParticle();
  //   particles[i].moveParticle();
  //   // particles[i].joinParticles(particles.slice(i));
  // }
}

