class Vida extends Animacao {
  constructor(vida) {
    super(vida)

    this.nome       = vida.nome;
    // this.nomeImagem = vida.nomeImagem;
    this.velocidade = vida.velocidade;
    this.delay      = vida.delay;
    this.x          = width  + this.delay;
  }

  move() {
    if ( width > 1400 ) {
      this.x = this.x - 12;
    }
    else {
      this.x = this.x - this.velocidade;
    }
    

    if ( this.x < -this.largura - this.delay ) {
      this.x = width;
    }
  }


  pegaVida() {
    this.x = -150
  }
}

