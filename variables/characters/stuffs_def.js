let stuffMoeda = {
  nome: 'moeda',
  nomeImagem: 'imagens/assets/moeda.png',
  imagem: null,           //** Será calculado mais a frente
  alturaTela: null,       //** Será calculado mais a frente
  larguraTela: null,      //** Será calculado mais a frente
  posX: 0,
  distanciaDoChao: 360,
  fatorAlturaTela: 0.1,
  fatorLarguraTela: 1,
  spritesImagem: [5, 2],  //** colunas, linhas 
  velocidade: 4,
  matriz: [],
  delay: 300,
}



let stuffVida = {
  nome: 'vida',
  nomeImagem: 'imagens/assets/coracao.png',
  imagem: null,           //** Será calculado mais a frente
  alturaTela: null,       //** Será calculado mais a frente
  larguraTela: null,      //** Será calculado mais a frente
  posX: 3000,
  distanciaDoChao: 500,
  fatorAlturaTela: 0.08,
  fatorLarguraTela: 1,
  spritesImagem: [4, 2],  //** colunas, linhas 
  velocidade: 16,
  matriz: [],
  delay: 1500,
}

