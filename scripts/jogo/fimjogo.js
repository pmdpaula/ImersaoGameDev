class FimJogo {
  constructor(imagemFim) {
    this.imagemFim = imagemFim;
    this.altura = null;
    this.largura = null;
    this.x = 0;
    this.y = 0;
    this.fator = width > height ? width * 0.001 : height * 0.0015

  }

  exibe() {
    this.largura = this.imagemFim.width  * this.fator
    this.altura  = this.imagemFim.height * this.fator


    image(this.imagemFim,
      this.x = width / 2 - (this.largura / 2),
      this.y = height / 2 - (this.altura / 2),
      this.largura,
      this.altura,
      );
  }
}