let cnv
let jogo
let fita
let cenaAtual = 'telaInicial'
let cenas
let telaInicial

let somDoJogo;
let somDaMoeda;
let somDaVida;
let somDaVidaCheia;
let somGameOver;
let somGritoBruxa;
let somBruxaPerdeu;
// let heroi;
// let moeda;
let administradorVida;
let qtdMaxVidas = 5
let qtdVidas    = 3
let isInicio = true;
let botaoIniciar;
let botaoGerenciador;

let fontNormal, fontStrong;
let fonts = [];
let imagemInicio;
let jogoPause;
let imagemPause;
let fimJogoGota;
let imagemFimJogoGota;
let fimJogoTroll;
let imagemFimJogoTroll;
let imagemVida, imagemVidaPB;

let isLooping = true;
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
    cnvH: 800 * 0.55,
  },

];
let canvasSize = [];

const dificuldadeJogo = [
  {
    nome:   'Super Fácil',
    indice: 0,
    velocidadeInimigos: 6,
    pontosNaTroca: 40,
  },
  {
    nome:   'Fácil',
    indice: 1,
    velocidadeInimigos: 7,
    pontosNaTroca: 100,
  },
  {
    nome:   'Normal',
    indice: 2,
    velocidadeInimigos: 8,
    pontosNaTroca: 180,
  },
  {
    nome:   'Difícil',
    indice: 3,
    velocidadeInimigos: 10,
    pontosNaTroca: 300,
  },
  {
    nome:   'Muito Difícil',
    indice: 4,
    velocidadeInimigos: 14,
    pontosNaTroca: 600,
  },
  {
    nome:   'Impossível',
    indice: 5,
    velocidadeInimigos: 24,
    pontosNaTroca: 1000,
  },
]

