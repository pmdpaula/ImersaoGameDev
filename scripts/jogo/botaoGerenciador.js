class BotaoGerenciador {
  constructor(texto, textoOver, x, y) {
    // this.botaoGerenciador = new Clickable();
    this.texto      = texto
    this.textoOver  = textoOver
    this.x          = x
    this.y          = y
    this.botao = createButton(this.texto)
    this.botao.mousePressed(() => this._alteraCena())
    this.botao.addClass('botao-tela-inicial')

    if ( canvasSize.cnvCod === 'xl-l' ) {
      this.fontSize           = 120
      this.strokeWeight       = 4
      this.tituloPosicao      = [50, 100]
      this.subTituloPosicao   = [50, 280]
      this.historiaPosicao    = [900, 100]
      this.quadroHistoria     = [600, 500]
      this.defBotao    = {
        resize: [400, 80],
        locate: [(width / 2 - 200), height / 1.5],
        textSize: 30,
      }
    }
    else if ( canvasSize.cnvCod === 'lg-l' ) {
      this.fontSize           = 96
      this.strokeWeight       = 3
      this.tituloPosicao      = [25, 70]
      this.subTituloPosicao   = [25, 220]
      this.historiaPosicao    = [650, 85]
      this.quadroHistoria     = [600, 500]
      this.defBotao    = {
        resize: [300,70],
        locate: [(width / 2 - 150), height - 180],
        textSize: 20,
      }
    }
    else if ( canvasSize.cnvCod === 'md-l' ) {
      this.fontSize           = 72
      this.strokeWeight       = 2
      this.tituloPosicao      = [25, 60]
      this.subTituloPosicao   = [25, 170]
      this.historiaPosicao    = [400, 70]
      this.quadroHistoria     = [600, 500]
      this.defBotao    = {
        resize: [240,60],
        locate: [(width / 2 - 120), height - 160],
        textSize: 18,
      }
    }
    else if ( canvasSize.cnvCod === 'sm-l' ) {
      this.fontSize           = 66
      this.strokeWeight       = 1
      this.tituloPosicao      = [20, 60]
      this.subTituloPosicao   = [20, 150]
      this.historiaPosicao    = [420, 50]
      this.quadroHistoria     = [340, 600]
      this.defBotao    = {
        resize: [210,50],
        locate: [(width / 2 - 105), height - 130],
        textSize: 16,
      }
    }
// console.log(this.botao);

  }
  
  draw() {
    this.botao.position(this.x, this.y)
  }

  _alteraCena() {
    this.botao.remove()
console.log('BotaoPressionado');

    // cenaAtual = 'jogo'
  }
}