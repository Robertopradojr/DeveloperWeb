var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)

if (hora<12) {
    console.log('Bom dia')

}else if (hora<17 || hora==17){
    console.log('Good Afternoon!')


}else if (hora>17 || hora==24){
    console.log('Good Night!')

}else if (hora > 0 && hora < 6) {
    console.log('Boa Madrugada!')
}

