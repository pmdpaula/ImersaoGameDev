class CenarioHalloweenPlano1 {
  constructor( velocidade) {
    this.arrImagem = [
      // loadImage('imagens/cenario/halloween/1.png'),
      // loadImage('imagens/cenario/halloween/2.png'),
      // loadImage('imagens/cenario/halloween/3.png'),
      loadImage('imagens/cenario/halloween/4.png'),
      // loadImage('imagens/cenario/halloween/5.png')
    ]
    this.velocidade = velocidade < 6 ? 6 : velocidade;
    this.arrVelocidade = velocidade - (velocidade - 4)
    // this.arrVelocidade = [ 1, 2, 3, 4, 5 ]
    this.x1 = 0
    this.x2 = width
  }

  exibe() {
    for ( let i in this.arrImagem ) {
      image(this.arrImagem[i], this.x1, 0, width, height);
      image(this.arrImagem[i], this.x2, 0, width, height);
    }
  }

  exibeGray() {
    for ( let i in this.arrImagem ) {
      image(this.arrImagem[i], this.x1, 0, width, height);
      filter(GRAY);
      image(this.arrImagem[i], this.x2, 0, width, height);
      filter(GRAY);
    }
  }

  move() {
    for ( let i in this.arrImagem ) {
        this.x1 = this.x1 - this.arrVelocidade;
        this.x2 = this.x2 - this.arrVelocidade;
    
        if ( this.x1 < -width ) {
          this.x1 = width;
        }
    
        if ( this.x2 < -width ) {
          this.x2 = width;
        }
    }
  }

}