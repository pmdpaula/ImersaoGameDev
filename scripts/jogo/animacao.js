class Animacao {
  constructor(imagem, spritesImagem, x, largura, altura) {
    this.matriz        = null;
    this.spritesImagem = spritesImagem;
    this.imagem        = imagem;
    this.largura       = largura;
    this.altura        = altura;
    this.x             = x;
    this.y             = height - this.altura;
    this.larguraSprite = this.imagem.width / this.spritesImagem[0];
    this.alturaSprite  = this.imagem.height / this.spritesImagem[1];

    this.frameAtual    = 0;
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

  exibeGray() {
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