function login(){
    let j = window.document.getElementById('formulario')
    j.innerHTML =  `<li><form></li>`
    j.innerHTML =   `<li><input type="text" id="name" placeholder="Digite seu nome"></li>`
    j.innerHTML+=   `<li><input type="email" id="email" placeholder="Digite seu e-mail"></li>`
    j.innerHTML+= ` <li><input type="password" id="password" placeholder="Digite sua senha"></li>`    
    j.innerHTML+=   `<li><textarea placeholder="Sua mensagem"></textarea></li></form>`  
    j.innerHTML+=   `<li><input type="button" id= "entrar" value="Entrar"> </button></li>`
    j.innerHTML+=   `<li><input type="button" id= "cancelar" onclick = "cancelar()" value="Cancelar"> </button></li></form>` 
}
function cancelar(){
    let cancela = window.document.getElementById('formulario')
    cancela.innerHTML = `<button id= "botaologin"type="button" onclick="login()"><img src="./imagens/png-transparent-female-avatar-girl-face-woman-user-flat-classy-users-icon.png">`
}

function start(){
    var h = window.document.getElementById('nome1')
    var i = window.document.getElementById('capsula')
    h.innerHTML = 'Start'
}
function saiu(){
    var h = window.document.getElementById('nome1')
    h.innerHTML = 'Camelot'
}

