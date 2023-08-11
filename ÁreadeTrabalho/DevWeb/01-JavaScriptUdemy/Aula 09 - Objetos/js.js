
const somar = (a,b) => console.log(a+b)
  somar(1,2)
const exibir = n => console.log(n)

exibir("Olá")
//Procedural
//Funcões que manipulam dados
function verificarDisponibilidade(q,o){
  let res = q-o
  console.log("Disponíveis: " + res)
}
let quartos = 20
let ocupados = 10
verificarDisponibilidade(quartos,ocupados)

const hotel = {
  quartos:20, ocupados:10,
  verificarDisponibilidade:function(){
    let res = this.quartos-this.ocupados
    console.log("Disponíveis: " + res)
  }
}

hotel.verificarDisponibilidade()
//hotel.ocupados = 5 tem como manipulas também só gera um pouco mais de código

const hi = {
    ocupados: 20, disponiveis:30, piscinas:0,
    verificar:function(){
      let res = this.ocupados - this.disponiveis
      return "Disponivel: " + res
    }
  }
  hi.verificar()
  
  hotel.quartos = 25
  hotel['quartos'] = 30
  hotel.piscinas = 3
  console.log(hotel.piscinas)
  delete hotel.piscinas
  console.log(hotel.piscinas)
  
  
  
  
  
  
  
  
  const cama = new Object()
  cama.lencol = 4
  cama.travesseiro = 2
  cama.verificarcondicoes = function(){
    let res = this.lencol - this.travesseiro
    return "Disponivel: " + res
  }
  cama.verificarcondicoes()
  
  
  
  
  
  
  class Casa {
    constructor(){
      this.quartos = 20
      this.ocupados = 10
    }
    verificarDisponibilidade(){
      let res = this.quartos - this.ocupados
      return "Disponível: " + res
    }
  }
  const casa = new Casa()
  casa.verificarDisponibilidade()