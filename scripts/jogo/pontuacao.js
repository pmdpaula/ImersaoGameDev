class Pontuacao {
  constructor() {
    this.pontos = 0;
  }

  exibe() {
    textAlign(RIGHT)
    fill('#ddd')
    textSize(50)
    text(parseInt(this.pontos) , width - 30, 50)
  }

  adicionarPontos() {
    this.pontos += 0.05
  }

  adicionarPontosMoeda() {
    this.pontos += 10
  }

}