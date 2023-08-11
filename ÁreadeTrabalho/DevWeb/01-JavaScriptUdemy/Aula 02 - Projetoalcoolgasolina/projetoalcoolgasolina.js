function calcularMelhorPreco(){
let precoAlcool = document.getElementById('alcool').value
let precoGasolina = document.getElementById('gasolina').value

if (precoAlcool!= ""){
  if (precoGasolina!=""){
    let resultado = precoAlcool/ precoGasolina
    
    document.getElementById('resultado')
    if (resultado>= 0.7){
      alert("Melhor utilizar gasolina")
    }else{
      alert("Melhor utilizar alcool.")
  }
}
  
}
let resultado = precoAlcool/ precoGasolina
window.document.getElementById('resultados').innerHTML = `resultado é ${resultado}`
if (precoAlcool== ""&&precoGasolina==""){
  alert("Campo vazio")
}
}