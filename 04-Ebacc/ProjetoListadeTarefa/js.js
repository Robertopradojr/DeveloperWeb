$(document).ready(function(){


    $('form').on('submit',function(e){
        e.preventDefault()
        const conteudos = $('#conteudo').val();
        console.log(conteudos)
        const linhaA= $(`<li>${conteudos}</li>`) 
        $(linhaA).appendTo('ul')  
        $("li").click(function(){
            $(this).addClass("riscado")
        })
        $('#conteudo').val('')
    })
        
       

   

})      
   