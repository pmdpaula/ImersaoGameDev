let personagemHeroi = {
  nome: 'Hipsta',
  nomeImagem: 'imagens/personagem/correndo.png',
  nomeImagemPiscando: 'imagens/personagem/correndo_piscando.png',
  nomeImagemPiscando2: 'imagens/personagem/correndo_piscando2.png',
  // nomeImagem: 'imagens/personagem/thiago_sprite.png',
  // nomeImagemPiscando: 'imagens/personagem/thiago_sprite_p1.png',
  // nomeImagemPiscando2: 'imagens/personagem/thiago_sprite_p2.png',
  imagem: null,           //** Será calculado mais a frente
  alturaTela: null,       //** Será calculado mais a frente
  larguraTela: null,      //** Será calculado mais a frente
  posX: 0,
  distanciaDoChao: 0,
  fatorAlturaTela: 0.25,
  fatorLarguraTela: 0.815,
  spritesImagem: [4, 4],  //** colunas, linhas
  matriz: [],
}
