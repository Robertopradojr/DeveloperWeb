listanome = ["Ana",
"José",
"Rodolfo",
"Gustavo",
"Alisson",
"Guga",
"Adriano Celso",
"Olá",
"Anderson",
"Alisson"]



function carregartodosnomes(){
    lista = ''
    for (indice in listanome){
       let nome = listanome[indice]
       lista+= `<li class="list-group-item">${nome}</li>`
       console.log(lista)
   }
   document.getElementById('oi').innerHTML = lista
}
function pesquisar(){
    lista1= ''
    let s = document.getElementById('ola') 
    alert(s)
    for (indice in listanome){
        lista2=listanome[indice]
        if (listanome[indice]==s){
            lista1+=`<li class="list-group-item">${lista2}</li>`
        }
        document.getElementById('oi').innerHTML = lista1
    }

}