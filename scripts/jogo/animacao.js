class Animacao {
  constructor(personagem) {

    this.matriz           = null;
    this.spritesImagem    = personagem.spritesImagem;
    // this.imagem           = loadImage(personagem.NomeImagem);
    this.imagem           = personagem.imagem;
    this.imagemPiscando   = personagem.imagemPiscando;
    this.largura          = personagem.larguraTela;
    this.altura           = personagem.alturaTela;
    this.x                = personagem.posX;
    this.distanciaDoChao  = personagem.distanciaDoChao;
    this.y                = height - this.altura - this.distanciaDoChao;
    this.larguraSprite    = this.imagem.width / this.spritesImagem[0];
    this.alturaSprite     = this.imagem.height / this.spritesImagem[1];

    this.frameAtual       = 0;

  }

  exibe() {
    this.criaMatriz();

    image(this.imagem,
          this.x,
          this.y,
          this.largura,
          this.altura,
          this.matriz[this.frameAtual][0],
          this.matriz[this.frameAtual][1],
          this.larguraSprite,
          this.alturaSprite
    );
    
    this.anima();
  }


  exibe2(imagem) {
    this.criaMatriz();

    image(imagem,
          this.x,
          this.y,
          this.largura,
          this.altura,
          this.matriz[this.frameAtual][0],
          this.matriz[this.frameAtual][1],
          this.larguraSprite,
          this.alturaSprite
    );
    
    this.anima();

  }


  exibeGray() {
    filter(GRAY);
  }

  dilateImage() {
    this.criaMatriz();

    image(this.imagem,
          this.x,
          this.y,
          this.largura,
          this.altura,
          this.matriz[this.frameAtual][0],
          this.matriz[this.frameAtual][1],
          this.larguraSprite,
          this.alturaSprite
    );
    filter(DILATE);
  }

  anima() {
    this.frameAtual >= this.matriz.length - 1 ? this.frameAtual = 0 : this.frameAtual++
  }

  
  criaMatriz() {
    let totalQuadros = this.spritesImagem[0] * this.spritesImagem[1];
    this.matriz = [[0, 0]];
  
    for ( let y = 0; y < totalQuadros; y = y + this.spritesImagem[0]) {
      if ( y !== 0 ) this.matriz.push([ 0, (this.matriz[y-1][1] + this.alturaSprite) ])
      
      for ( let x = 1; x < this.spritesImagem[0] ; x++) {
        this.matriz.push([ (this.matriz[x-1][0] + this.larguraSprite), this.matriz[y][1] ])
      }      
    }
  }

}