class Personagem {
  constructor(imagem) {
    this.imagem = imagem
    this.altura = height * 0.25;
    this.largura = Math.round((this.altura * (1 - 0.2272) ));
    this.larguraQuadroPersonagem = 220;
    this.alturaQuadroPersonagem = 270;
    this.matriz = [[0, 0]];
    // O 16 abaixo é quantidade de quadros tem a imagem do personagem para animá-lo.
    // A imagem tem 4 linhas e 4 colunas
    // O x começa do 1 pq a cada volta no y um valor é adicionado a matriz.
    for ( let y = 0; y < 16; y = y + 4) {
      if ( y !== 0 ) this.matriz.push([ 0, (this.matriz[y-1][1] + this.alturaQuadroPersonagem) ])
      
      for ( let x = 1; x < 4 ; x++) {
        this.matriz.push([ (this.matriz[x-1][0] + this.larguraQuadroPersonagem), this.matriz[y][1] ])
      }      
    }

      // [0,0],
      // [220,0],
      // [440,0],
      // [660,0],
      // [0,270],
      // [220,270],
      // [440,270],
      // [660,270],
      // [0,540],
      // [220,540],
      // [440,540],
      // [660,540],
      // [0, 810],
      // [220, 810],
      // [440, 810],
      // [660, 810]

    this.frameAtual = 0
  };

  exibe() {
    image(this.imagem,
          0,
          height - this.altura,
          this.largura,
          this.altura,
          this.matriz[this.frameAtual][0],
          this.matriz[this.frameAtual][1],
          220,
          270
    );

    // setInterval(() => {
    // }, 2200)
    this.anima();
  }

  anima() {
    this.frameAtual++

    if ( this.frameAtual >= this.matriz.length - 1 ) this.frameAtual = 0

  }

}