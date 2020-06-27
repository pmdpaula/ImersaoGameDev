class Inimigo extends Animacao {
  constructor(inimigo) {
    super(inimigo)

    this.nome       = inimigo.nome;
    // this.nomeImagem = inimigo.nomeImagem;
    this.velocidade = inimigo.velocidade;
    this.delay      = inimigo.delay;
    this.x          = width  + this.delay;
  }

  move() {
    if ( width > 1400 ) {
      this.x = this.x - 12;
    }
    else {
      this.x = this.x - this.velocidade;
    }
    
// console.log(`this.velocidade: ${this.velocidade}`);

    if ( this.x < -this.largura - this.delay ) {
      this.x = width;
    }
  }
}

