let personagemInimigo = {
  nome: 'gota',
  nomeImagem: 'imagens/inimigos/gotinha.png',
  imagem: null,           //** Será calculado mais a frente
  alturaTela: null,       //** Será calculado mais a frente
  larguraTela: null,      //** Será calculado mais a frente
  posX: 0,
  distanciaDoChao: 0,
  fatorAlturaTela: 0.1,
  fatorLarguraTela: 1,
  spritesImagem: [4, 7],  //** colunas, linhas 
  velocidade: 8,
  matriz: [],
  delay: 10,
}

let personagemInimigoGrande = {
  nome: 'troll',
  nomeImagem: 'imagens/inimigos/troll.png',
  imagem: null,           //** Será calculado mais a frente
  alturaTela: null,       //** Será calculado mais a frente
  larguraTela: null,      //** Será calculado mais a frente
  posX: 0,
  distanciaDoChao: -58,
  fatorAlturaTela: 0.4,
  fatorLarguraTela: 1,
  spritesImagem: [5, 6],  //** colunas, linhas 
  velocidade: 8,
  matriz: [],
  delay: 500,
}

let personagemInimigoVoador = {
  nome: 'gota voadora',
  nomeImagem: 'imagens/inimigos/gotinha-voadora.png',
  imagem: null,           //** Será calculado mais a frente
  alturaTela: null,       //** Será calculado mais a frente
  larguraTela: null,      //** Será calculado mais a frente
  posX: 0,
  distanciaDoChao: 240,
  fatorAlturaTela: 0.15,
  fatorLarguraTela: 1.25,
  spritesImagem: [3, 6],  //** colunas, linhas 
  velocidade: 8,
  matriz: [],
  delay: [900, 1400],
}

let personagemInimigoVoador2 = {
  nome: 'gota voadora alta',
  nomeImagem: 'imagens/inimigos/gotinha-voadora.png',
  imagem: null,           //** Será calculado mais a frente
  alturaTela: null,       //** Será calculado mais a frente
  larguraTela: null,      //** Será calculado mais a frente
  posX: 0,
  distanciaDoChao: 320,
  fatorAlturaTela: 0.15,
  fatorLarguraTela: 1.25,
  spritesImagem: [3, 6],  //** colunas, linhas 
  velocidade: 14,
  matriz: [],
  delay: [1500, 2000],
}


// export { personagemInimigo, personagemInimigoGrande, personagemInimigoVoador, personagemInimigoVoador2 }