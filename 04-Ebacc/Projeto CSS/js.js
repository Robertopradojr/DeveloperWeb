var count = 0;

function mudeCor(){
    if(count%2==0){
        var a = document.getElementById('fundo')
        a.style.background = 'black'
        count++ 
    }
   
    else{
        var a = document.getElementById('fundo') 
        a.style.background = 'white'
        count++ 

    }
          
}

