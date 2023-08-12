
    $('form').on('submit',function(e){
        e.preventDefault()
        const conteudos = $('#conteudo').val();
        console.log(conteudos)
        const linhaA= $(`<li><a href="#" onclick = "clicou()">${conteudos}</a></li>`) 
        $(linhaA).appendTo('ul')
        $('#conteudo').val('')


    })
    
      
    function clicou(){
    let a = document.querySelector('li a')
    a.style.textDecoration="line-through" 
    }
