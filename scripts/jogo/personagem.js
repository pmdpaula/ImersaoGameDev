class Personagem extends Animacao {
  constructor(imagem, spritesImagem, x, largura, altura) {
    super(imagem, spritesImagem, x, largura, altura)

    this.yInicial = height - this.altura;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.gravidade = 1.4;
    this.PulosMax = 2;
    this.Pulos = 0;
    this.somDoPulo = loadSound('sons/jump_04.wav');
    this.somDoPuloDuplo = loadSound('sons/jump_05.wav');
    this.somFalhaDoPulo = loadSound('sons/jumpfail01.wav');
    this.somDoPouso = loadSound('sons/jumpland01.mp3');
  };

  pula() {
    if ( this.Pulos < this.PulosMax ) {
      this.somDoPulo.play();
      this.velocidadeDoPulo = -22;
      this.Pulos++;
      if ( this.Pulos === 2 ) this.somDoPuloDuplo.play();
    }
    else {
      this.somFalhaDoPulo.play();
    }
  }

  aplicaGravidade() {
    this.y = this.y + this.velocidadeDoPulo;
    
    this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
    if ( this.Pulos === 1 && this.velocidadeDoPulo > 0.3 ) this.Pulos++
    
    if ( this.y > this.yInicial ) {
      this.y = this.yInicial;
      if ( this.Pulos !== 0 ) this.somDoPouso.play();
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