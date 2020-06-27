class Moeda extends Animacao {
  constructor(moeda) {
    super(moeda)

    this.nome       = moeda.nome;
    // this.nomeImagem = moeda.nomeImagem;
    this.velocidade = moeda.velocidade;
    this.delay      = moeda.delay;
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


  pegaMoeda() {
    this.x = -150
  }
}

