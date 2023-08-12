$(document).ready(function(){
    console.log(document.querySelector('header button'));
    console.log($('header button'))

    document.querySelector('header button').addEventListener('click', function(){
    })
    $('header button').click(function(){
        $('form').slideDown();//jquery é bem mais simples os codigos.
   
    })
    $('#Cancelar').click(function(){
        $('form').slideUp();
})
})
   /* $('form').on('submit', function(e){
        e.preventDefault();
    })
})
*/