class Personagem extends Animacao {
  constructor(heroi) {
    super(heroi)

    this.nome   = heroi.nome;
    this.yInicial = height - heroi.alturaTela - heroi.distanciaDoChao;
    this.distanciaDoChao = heroi.distanciaDoChao;
    this.y = this.yInicial;
    this.velocidadeDoPulo = 0;
    this.PulosMax = 2;
    this.Pulos = 0;
    this.somDoPulo = loadSound('sons/jump_04.wav');
    this.somDoPuloDuplo = loadSound('sons/jump_05.wav');
    this.somFalhaDoPulo = loadSound('sons/jumpfail01.wav');
    this.somDoPouso = loadSound('sons/jumpland01.mp3');

    if ( canvasSize.cnvCod === 'xl-l' ) {
      this.alturaDoPulo = -26;
      this.gravidade =  1.3;  
    }
    else if ( canvasSize.cnvCod === 'lg-l' ) {
      this.alturaDoPulo = -22;
      this.gravidade =  1.08;  
    }
    else if ( canvasSize.cnvCod === 'md-l' ) {
      this.alturaDoPulo = -20;
      this.gravidade =  1.15;  
    }
    else if ( canvasSize.cnvCod === 'sm-l' ) {
      this.alturaDoPulo = -19;
      this.gravidade =  1.02;  
    }


  };


  pula() {
    if ( this.Pulos < this.PulosMax ) {
      this.somDoPulo.play();
      this.velocidadeDoPulo = this.alturaDoPulo
      // if ( width > 1200 ) {
        
      // }
      // else if ( width <= 1200 && width > 1000) {
      //   this.velocidadeDoPulo = this.alturaDoPulo + 4
      // }
      // else {
      //   this.velocidadeDoPulo = this.alturaDoPulo + 8
      // }

// console.log(`this.velocidadeDoPulo: ${this.velocidadeDoPulo}`);

      this.Pulos++;
      if ( this.Pulos === 2 ) this.somDoPuloDuplo.play();
    }
    else {
      this.somFalhaDoPulo.play();
    }
  }


  aplicaGravidade() {
    if ( this.velocidadeDoPulo !== 0 ) {
      this.y = this.y + this.velocidadeDoPulo;
      
      this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade;
      if ( this.Pulos === 1 && this.velocidadeDoPulo > 0.3 ) this.Pulos++
      
      if ( this.y > this.yInicial ) {
        this.y = this.yInicial;
        if ( this.Pulos !== 0 ) this.somDoPouso.play();
        this.velocidadeDoPulo = 0;
        this.Pulos = 0;
      }
    }
  }

  estaColidindo(inimigo) {
    stroke('#fae');
    strokeWeight(4);
    noFill();
    const precisao = 0.75
    rect(
      this.x + (this.largura * (1 - precisao)), // x
      this.y + (this.altura * (1 - precisao)),  // y
      this.largura * precisao,                  // largura
      this.altura * precisao,                   // altura
      // 40,
      // 40,
      // 15,
      // 15,
    );
    rect(
      inimigo.x + (inimigo.largura * (1 - precisao)),
      inimigo.y + (inimigo.altura * (1 - precisao)),
      inimigo.largura * precisao,
      inimigo.altura * precisao,
      // 40,
      // 40,
      // 15,
      // 15,
    );


    const colisao = collideRectRect(
      this.x + (this.largura * (1 - precisao)),
      this.y + (this.altura * (1 - precisao)),
      this.largura * precisao,
      this.altura * precisao,
      // 40,
      // 40,
      // 15,
      // 15,
      inimigo.x + (inimigo.largura * (1 - precisao)),
      inimigo.y + (inimigo.altura * (1 - precisao)),
      inimigo.largura * precisao,
      inimigo.altura * precisao,
      // 40,
      // 40,
      // 15,
      // 15,
    );
    
    return colisao;
  }
}