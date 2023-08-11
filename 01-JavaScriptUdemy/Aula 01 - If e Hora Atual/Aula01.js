var hora = new Date()
		var agora = hora.getHours()
		var saudar
		
			if (agora<12) {
    			saudar = "Bom dia"

			}else if (agora<17 || agora==17){
    			saudar = "Boa tarde"


			}else if (agora>17 || agora==24){
    			saudar = "Boa noite"

			}else if (agora > 0 && agora < 6) {
    			saudar = "Boa Madrugada!" 
    	}
    	window.document.getElementById('oi').innerHTML = `Te desejo uma ${saudar}`