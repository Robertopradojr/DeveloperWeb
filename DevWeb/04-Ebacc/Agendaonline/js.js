function clicou(){
    let tabela = document.querySelector('div.login')
    tabela.style.display = 'block'
}
function fechou(){
    let tabela = document.querySelector('div.login')
    tabela.style.display = 'none'
}
const formulario = document.getElementById('formulario')
formulario.addEventListener('submit', function(adicionar){
    adicionar.preventDefault();
    let nome = document.querySelector('input#contato').value
    let numero = document.querySelector('input#numero').value
    let lista = document.querySelector('table.tabela')

    lista.innerHTML += `<tr><td>${nome}</td> <td>${numero}</td></tr>`
    
    let zerar = document.querySelector('input#contato')
    let zerar1 = document.querySelector('input#numero')

    zerar.value = ''
    zerar1.value = ''




})