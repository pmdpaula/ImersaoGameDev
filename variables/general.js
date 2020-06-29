let cnv;
let jogo;
let cenaAtual = 'telaInicial';
let cenas
let telaInicial

let somDoJogo;
let somColisao;
let somGameOver;
// let heroi;
// let pontuacao;
// let moeda;
let isInicio = true;
let botaoIniciar;
let botaoGerenciador;

// let cenario, cenario1;

let fontNormal, fontStrong;
let fonts = [];
// let inimigo;
// let inimigoGrande;
// let inimigoVoador;
// let inimigoVoador2;

// let particles = [];
// let mosquitos = [];
// let moscas = [];
// let mosca;
let imagemInicio;
let fimJogoGota;
let imagemFimJogoGota;
let fimJogoTroll;
let imagemFimJogoTroll;
let isLooping = true;
// let inimigos = [];
let stuffs = [];
let posicaoDoChao = 100;
let canvasSizes = [
  {
    cnvCod: 'xl-l',
    cnvW:   1600,
    cnvH: 1600 * 0.55,
  },
  
  {
    cnvCod: 'lg-l',
    cnvW:   1300,
    cnvH: 1300 * 0.55,
  },

  {
    cnvCod: 'md-l',
    cnvW:   1000,
    cnvH: 1000 * 0.55,
  },

  {
    cnvCod: 'sm-l',
    cnvW:   800,
    cnvH: 800 * 0.7,
  },

];
let canvasSize = [];

const dificuldadeJogo = [
  {
    nome:   'Super Fácil',
    indice: 0,
    velocidadeInimigos: 6,
    pontosNaTroca: 20,
  },
  {
    nome:   'Fácil',
    indice: 1,
    velocidadeInimigos: 8,
    pontosNaTroca: 40,
  },
  {
    nome:   'Normal',
    indice: 2,
    velocidadeInimigos: 10,
    pontosNaTroca: 55,
  },
  {
    nome:   'Difícil',
    indice: 3,
    velocidadeInimigos: 12,
    pontosNaTroca: 70,
  },
  {
    nome:   'Muito Difícil',
    indice: 4,
    velocidadeInimigos: 16,
    pontosNaTroca: 100,
  },
  {
    nome:   'Impossível',
    indice: 5,
    velocidadeInimigos: 24,
    pontosNaTroca: 120,
  },
]

