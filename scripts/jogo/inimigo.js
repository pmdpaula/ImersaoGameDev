class Inimigo extends Animacao {
  constructor(inimigo) {
    super(inimigo)

    this.nome               = inimigo.nome;
    // this.nomeImagem = inimigo.nomeImagem;
    this.velocidadeOriginal = inimigo.velocidade;
    this.velocidade         = inimigo.velocidade;
    this.delay              = inimigo.delay;
    this.x                  = width  + this.delay;
  }

  move() {
    if ( canvasSize.cnvCod === 'xl-l' ) {
      this.x = this.x - ( velocidadeInimigos + this.velocidade );
    }
    else {
      this.x = this.x - ( velocidadeInimigos + this.velocidade );
// console.log(`Nome ${this.nome} > ${this.velocidade} >> ${velocidadeInimigos}`);

    }
    
// console.log(`this.velocidade: ${this.velocidade}`);

    if ( this.x < -this.largura - this.delay ) {
      this.x = width;
    }
  }
}

