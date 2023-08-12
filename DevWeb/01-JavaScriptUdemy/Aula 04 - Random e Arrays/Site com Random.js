function fraseAleatoria(){
    let frases = ["Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado", "Imagine uma nova história para sua vida e acredite nela.", 
    "A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.", "Ser feliz sem motivo é a mais autêntica forma de felicidade.", "Não existe um caminho para a felicidade. A felicidade é o caminho.",
    "Não espere por uma crise para descobrir o que é importante em sua vida.", "Saber encontrar a alegria na alegria dos outros é o segredo da felicidade.", "A alegria de fazer o bem é a única felicidade verdadeira.",
    "Não permito que nenhuma reflexão filosófica me tire a alegria das coisas simples da vida", "Pessimismo leva à fraqueza, otimismo ao poder.O que sabemos é uma gota"]
    numero = frases.length+1
    let s = Math.floor(numero* Math.random())

    document.getElementById('frase').innerHTML = frases[s]

}




