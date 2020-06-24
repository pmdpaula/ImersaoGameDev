let execucao = 0;

let imagemCenario;
let imagemPersonagem;
// let imagemInimigo;
let somDoJogo;
let somDoPulo;
let somColisao;
let somGameOver;
let heroi;
let inimigo;
let particles = [];

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
  somDoPulo = loadSound('sons/jump_05.wav');
  somColisao = loadSound('sons/colisao.ogg');
  somGameOver = loadSound('sons/game-over.mp3');
}


function setup() {
  if ( execucao === 0 ) {
    createCanvas(windowWidth, windowHeight - 100);

    personagemHeroi.alturaTela = height * 0.25;
    personagemHeroi.larguraTela = Math.round(( (height * 0.25) * 0.815 ));

    personagemInimigo.alturaTela = height * 0.10;
    personagemInimigo.larguraTela = personagemInimigo.alturaTela;

    cenario = new Cenario(imagemCenario, 3);
    heroi   = new Personagem(personagemHeroi.imagem, personagemHeroi.spritesImagem, 0, personagemHeroi.larguraTela, personagemHeroi.alturaTela);
    inimigo = new Inimigo(personagemInimigo.imagem, personagemInimigo.spritesImagem, width - personagemInimigo.larguraTela, personagemInimigo.larguraTela, personagemInimigo.alturaTela, personagemInimigo.velocidade);

    frameRate(28);     // O frameRate padrão é por volta de 30. Caso queiramos mudar, colocamos essa função.
    somDoJogo.loop();
  
    for( let i = 0; i < 20; i++ ){
      particles.push(new Particula());
    }

    execucao++
  }
  else {
    resizeCanvas(windowWidth, windowHeight - 100);
  }
}


function keyPressed() {
  if ( key === 'ArrowUp' || key === ' '  ) {
    heroi.pula();
    somDoPulo.play();
  }
}


function draw() {
  cenario.exibe();
  cenario.move();

  heroi.exibe();
  heroi.aplicaGravidade();

  inimigo.exibe();
  inimigo.move();

  if ( heroi.estaColidindo(inimigo) ) {
    somColisao.play();
    somDoJogo.pause();
    noLoop();
    somGameOver.play();
  }
  
  for( let i = 0; i < particles.length; i++ ) {
    particles[i].createParticle();
    particles[i].moveParticle();
    // particles[i].joinParticles(particles.slice(i));
  }
}

