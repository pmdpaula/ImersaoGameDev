class CenarioHalloween {
  constructor( velocidade) {
    this.arrImagem = [
      loadImage('imagens/cenario/halloween/1.png'),
      loadImage('imagens/cenario/halloween/2.png'),
      loadImage('imagens/cenario/halloween/3.png'),
      loadImage('imagens/cenario/halloween/4.png'),
      loadImage('imagens/cenario/halloween/5.png')
    ]
    this.velocidade = velocidade < 6 ? 6 : velocidade;
    this.arrVelocidade = [ velocidade - (velocidade - 1), velocidade - (velocidade - 2), velocidade - (velocidade - 3), velocidade - (velocidade - 4), velocidade - (velocidade - 5), ]
    // this.arrVelocidade = [ 1, 2, 3, 4, 5 ]
    this.x1 = [0, 0, 0, 0, 0];
    this.x2 = [width, width, width, width, width];
  }

  exibe() {
    for ( let i in this.arrImagem ) {
      image(this.arrImagem[i], this.x1[i], 0, width, height);
      image(this.arrImagem[i], this.x2[i], 0, width, height);
    }
  }

  exibeGray() {
    for ( let i in this.arrImagem ) {
      image(this.arrImagem[i], this.x1[i], 0, width, height);
      filter(GRAY);
      image(this.arrImagem[i], this.x2[i], 0, width, height);
      filter(GRAY);
    }
  }

  move() {
    for ( let i in this.arrImagem ) {
      this.x1[i] = this.x1[i] - this.arrVelocidade[i];
      this.x2[i] = this.x2[i] - this.arrVelocidade[i];
  
      if ( this.x1[i] < -width ) {
        this.x1[i] = width;
      }
  
      if ( this.x2[i] < -width ) {
        this.x2[i] = width;
      }
    }
  }

}