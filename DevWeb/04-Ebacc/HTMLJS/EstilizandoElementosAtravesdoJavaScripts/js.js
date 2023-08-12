const formulario = document.getElementById('formulario-deposito')
const nomeBeneficiario = document.getElementById('nome')
let formEvalido = false;
    function validaNome(nomeCompleto){
       const nome = nomeCompleto.split(' ')
       return nome.length>=2
    }
formulario.addEventListener('submit', function(e) {
  
    e.preventDefault(); //cancelara o reload do submit


    const numerovalor1 = document.getElementById('valor')
    const numerovalor2 = document.getElementById('valor2')
    const mensagemsucesso = `<p style= "color:black">Montante de: <b>${numerovalor1.value}</b> e <b>${numerovalor2.value}</b> para <b>${nomeBeneficiario.value}</b></p>`

    if (!formEvalido){
        let s = document.querySelector('p.oi')
        s.style.display = 'block'
        s.innerHTML = `O nome precisa ser completo`
        s.style.border = '1px solid gray'
    }
    else{
        document.getElementById('oi').innerHTML = mensagemsucesso
        nomeBeneficiario.value = ''
        numerovalor1.value = ''
        numerovalor2.value = ''
        }
})
// nomeBeneficiario.addEventListener('change', function(e) { informação sobre o que esta sendo digitado no campo sempre que sai dele mas não em tempo real.

//})
    nomeBeneficiario.addEventListener('keyup', function(e) { 
        console.log(e.target.value);//para saber os valores digitados;
        formEvalido = validaNome(e.target.value)//quando coloco target consigo ver os valores e caracteres
    if (!formEvalido){
        //nomeBeneficiario.style.border = '1px solid gray'
        nomeBeneficiario.classList.add('error') // para adicionar a classe css
        let p = document.querySelector('p.oi')
        p.style.display = 'block'        
        p.innerHTML =`O nome precisa ser completo`
    }
    else{
        document.querySelector('p.oi').style.display = 'none'
        nomeBeneficiario.classList.remove('error')//para remover a classe do css
    }

    });
