
let imagemCenario;
let imagemPersonagem;
let somDoJogo;
let personagem;
let particles = [];

function preload() {
  imagemCenario = loadImage('imagens/cenario/floresta.png');
  // imagemCenario = loadImage('imagens/cenario/montanhas01.jpg');
  imagemPersonagem = loadImage('imagens/personagem/correndo.png');
  somDoJogo = loadSound('sons/trilha_jogo.mp3');
}


function setup() {
  createCanvas(windowWidth, windowHeight);

  cenario = new Cenario(imagemCenario, 3);
  personagem = new Personagem(imagemPersonagem);
  frameRate(28);     // O graRate padrão é por volta de 30. Caso queiramos mudar, colocamos essa função.
  somDoJogo.loop();

  for( let i = 0; i < 20; i++ ){
    particles.push(new Particle());
  }
}

function draw() {
  cenario.exibe();
  cenario.move();
  personagem.exibe();

  for( let i = 0; i < particles.length; i++ ) {
    particles[i].createParticle();
    particles[i].moveParticle();
    // particles[i].joinParticles(particles.slice(i));
  }

  // circle(mouseX, mouseY, 40);
}

