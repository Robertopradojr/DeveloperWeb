//modelo, entidade, caracteristicas e ações.
//modelo é a class, entidade são as contancias que declaro podem ter varias, caracteristas individuais, e ações que determino a partir de uma ação.
class Carro {
    constructor (){
      this.marca = "Volkswagen",
      this.modelo = "Gol",
      this.cor = "prata",
      this.placa = "Roi-3434"
    }
  }
    const carro = new Carro () //const é unico estou criando uma identidade dessa constância.
    carro.modelo = "Golf"
    console.log(carro.modelo,carro.marca)