class PauseJogo {
  constructor(imagemPause) {
    this.imagemPause = imagemPause;
    this.altura = null;
    this.largura = null;
    this.x = 0;
    this.y = 0;
    this.fator = width > height ? width * 0.001 : height * 0.0015
  }

  draw() {
    // filter(GRAY);
    
    this.largura = this.imagemPause.width  * this.fator
    this.altura  = this.imagemPause.height * this.fator
    
    
    image(this.imagemPause,
      this.x = width / 2 - (this.largura / 2),
      this.y = height / 2 - (this.altura / 2) - 100,
      this.largura,
      this.altura,
    );
    
      // noLoop();
    
  }

}