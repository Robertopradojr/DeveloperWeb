const formulario = document.getElementById('formulario-deposito')
    function validaNome(nomeCompleto){
       const nome = nomeCompleto.split(' ')
       return nome.length>=2
    }
formulario.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault(); //cancelara o reload do submit

    const nomeBeneficiario = document.getElementById('nome')
    const numerovalor1 = document.getElementById('valor')
    const numerovalor2 = document.getElementById('valor2')
    const mensagemsucesso = `Montante de: ${numerovalor1.value} e ${numerovalor2.value} para ${nomeBeneficiario.value}`

    formEvalido = validaNome(nomeBeneficiario.value)
    if (!formEvalido){
        alert('O nome não esta completo')
    }
    else{
        alert(mensagemsucesso)
        nomeBeneficiario.value = ''
        numerovalor1.value = ''
        numerovalor2.value = ''
        }
})

