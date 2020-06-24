let execucao = 0;

let imagemCenario;
let imagemPersonagem;
// let imagemInimigo;
let somDoJogo;
// let somDoPulo;
let somColisao;
let somGameOver;
let heroi;
let inimigo;
let particles = [];
let mosquitos = [];
let moscas = [];
let fimJogo;

let personagemHeroi = {
  imagem: null,           //** Será calculado mais a frente
  alturaTela: null,       //** Será calculado mais a frente
  larguraTela: null,      //** Será calculado mais a frente
  spritesImagem: [4, 4],  //** colunas, linhas
  matriz: [],
}

let personagemInimigo = {
  imagem: null,           //** Será calculado mais a frente
  alturaTela: null,       //** Será calculado mais a frente
  larguraTela: null,      //** Será calculado mais a frente
  spritesImagem: [4, 7],  //** colunas, linhas 
  velocidade: 8,
  matriz: [],
}


function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  imagemHeroi = loadImage('imagens/personagem/correndo.png');
  personagemHeroi.imagem = loadImage('imagens/personagem/correndo.png');
  personagemInimigo.imagem = loadImage('imagens/inimigos/gotinha.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
  // somDoPulo = loadSound('sons/jump_05.wav');
  somColisao = loadSound('sons/colisao.ogg');
  somGameOver = loadSound('sons/game-over.mp3');
}

let cnv;
let bordas;

function centerObject(obj) {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  obj.position(x, y);
}

function setup() {
  bordas = windowWidth > windowHeight ? [160, 200] : [40, 180]
  cnv = createCanvas(windowWidth - bordas[0], windowHeight - bordas[1]);
  centerObject(cnv);
  
  cnv.style('display', 'block');
  cnv.parent('sketch-holder');

  personagemHeroi.alturaTela = height * 0.25;
  personagemHeroi.larguraTela = Math.round(( (height * 0.25) * 0.815 ));

  personagemInimigo.alturaTela = height * 0.10;
  personagemInimigo.larguraTela = personagemInimigo.alturaTela;

  // cenario = new Cenario(imagemCenario, 3);
  cenario = new CenarioHalloween(20);
  heroi   = new Personagem(personagemHeroi.imagem, personagemHeroi.spritesImagem, 0, personagemHeroi.larguraTela, personagemHeroi.alturaTela);
  inimigo = new Inimigo(personagemInimigo.imagem, personagemInimigo.spritesImagem, width - personagemInimigo.larguraTela, personagemInimigo.larguraTela, personagemInimigo.alturaTela, personagemInimigo.velocidade);
  // mosquito = new Mosquito();
  // mosquito = new Mosquito(width - personagemInimigo.larguraTela, personagemInimigo.larguraTela, personagemInimigo.alturaTela, personagemInimigo.velocidade);

  fimJogo = new FimJogo();

  frameRate(28);     // O frameRate padrão é por volta de 30. Caso queiramos mudar, colocamos essa função.
  somDoJogo.loop();

  for( let i = 0; i < random(3,6); i++ ){
    moscas.push(mosca = new Mosca());
  }
  // for( let i = 0; i < 10; i++ ){
  //   mosquitos.push(mosquito = new Mosquito());
  // }

  // for( let i = 0; i < 20; i++ ){
  //   particles.push(new Particula());
  // }
}


function windowResized() {
  centerObject(cnv);
}


function keyPressed() {
  if ( key === 'ArrowUp' || key === ' '  ) {
    heroi.pula();
    // somDoPulo.play();
  }
}


function draw() {
  cenario.exibe();
  cenario.move();

  heroi.exibe();
  heroi.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  // mosquito.exibe();
  // mosquito.move();

  if ( heroi.estaColidindo(inimigo) ) {
    cenario.exibeGray();
    heroi.exibeGray();
    inimigo.exibe();
    somDoJogo.pause();
    somColisao.play();
    noLoop();
    fimJogo.exibe();
    somGameOver.play();
  }

  for( let i = 0; i < moscas.length; i++ ) {
    moscas[i].exibe();
    moscas[i].moveParticle();
  }
  // for( let i = 0; i < mosquitos.length; i++ ) {
  //   mosquitos[i].exibe();
  //   mosquitos[i].moveParticle();
  // }

  // for( let i = 0; i < particles.length; i++ ) {
  //   particles[i].createParticle();
  //   particles[i].moveParticle();
  //   // particles[i].joinParticles(particles.slice(i));
  // }
}

