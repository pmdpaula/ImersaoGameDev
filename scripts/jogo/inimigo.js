class Inimigo extends Animacao {
  constructor(imagem, spritesImagem, x, largura, altura, velocidade) {
    super(imagem, spritesImagem, x, largura, altura)
    
    this.velocidade = velocidade;
  }

  move() {
    this.x = this.x - this.velocidade;

    if ( this.x < -this.largura ) {
      this.x = width;
    }
  }
}