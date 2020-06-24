class Personagem extends Animacao {
  constructor(imagem, spritesImagem, x, largura, altura) {
    super(imagem, spritesImagem, x, largura, altura)

    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 1.4;
    this.PulosMax = 2;
    this.Pulos = 0;
  };

  pula() {
    if ( this.Pulos < this.PulosMax ) {
      this.velocidadeDoPulo = -22;
      this.Pulos++;
    }
    else {
      console.log("Pulou demais");
      
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;

    if ( this.y > this.yInicial ) {
      this.y = this.yInicial;
      this.Pulos = 0;
    }
  }

  estaColidindo(inimigo) {
    // noFill();
    const precisao = 0.7
    // rect(this.x,
    //   this.y,
    //   this.largura * precisao,
    //   this.altura * 0.8);
    // rect(
    //   inimigo.x,
    //   inimigo.y,
    //   inimigo.largura * precisao,
    //   inimigo.altura * precisao
    // );
    const colisao = collideRectRect(
      this.x,
      this.y,
      this.largura * precisao,
      this.altura * 0.8,
      inimigo.x,
      inimigo.y,
      inimigo.largura * precisao,
      inimigo.altura * precisao
    );
    
    return colisao;
  }
}