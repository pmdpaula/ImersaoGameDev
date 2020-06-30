class AdministradorVida {
  constructor(qtdMaxVidas, vidasInicial, cor) {
    this.qtdMaxVidas  = qtdMaxVidas
    this.vidasInicial = vidasInicial
    this.vidasAtual   = this.vidasInicial

    this.largura  = height * 0.08
    this.altura   = this.largura
  }

  draw() {
    // this.drawMaxLifes()
    let margem = this.largura + 6
    let x, y
    for ( let i = 0; i < this.qtdMaxVidas; i++ ) {
      x = width / 12 * 11.3 - (margem * i + 1)
      y = height - posicaoDoChao + (posicaoDoChao * 0.15)

      image(imagemVidaPB, x, y, this.largura, this.altura)
    }

    for ( let i = 0; i < this.vidasAtual; i++ ) {
      x = width / 12 * 11.3 - (margem * i + 1)
      y = height - posicaoDoChao + (posicaoDoChao * 0.15)

      image(imagemVida, x, y, this.largura, this.altura)
    }
  }

  ganhaVida() {
    if ( this.vidasAtual < this.qtdMaxVidas ) {
      this.vidasAtual++
    }
  }

  perdeVida() {
    this.vidasAtual--
  }

  drawMaxLifes() {
    // let x = width / 12 * 11.3 - ((this.largura + 6) * i + 1)
    stroke('darkred')
    strokeWeight(3)
    fill('white')
    textSize(26)
    text(this.textoVida , width / 12 * 9 , height - posicaoDoChao + (posicaoDoChao * 0.6) )
    strokeWeight(0)
  }
}