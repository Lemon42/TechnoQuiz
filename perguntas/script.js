
	 	function checked(){
			
            // validacao
            for (var x = 0; x < 2; x++)
            {
                if (document.formPergunta[x].radio[0].checked == false && document.formPergunta[x].radio[1].checked == false && document.formPergunta[x].radio[2].checked == false && document.formPergunta[x].radio[3].checked == false)
                    {
                        alert('Você não respondeu todas as questões!!! Por favor responda . . .');
                        return false;
                    }
            }
       
            // contagem de acertos
            var acertos = 0;
            
			for(var x = 1; x <= 10; x++)
			{
				if (document.getElementById("r" + x).checked == true)
				{
					acertos = acertos+1;
				}
			}

  			sessionStorage.setItem("variavel", acertos);
			open('fim.html','fim','status=no,Width=700px,Height=600px');
			
			// Mudando a cor das respostas
			for(var i = 1; i <= 10; i++) 
			{
				document.getElementById("resposta" + i).style.color = "#00FF7F"; 
			}
			
			// Travando as respostas erradas
			for(var c = 1; c <= 30; c++)
			{
				document.getElementById("input" + c).disabled = true;
			}
			
			// Travando as respostas certas
			for(var q = 1; q <= 10; q++)
			{
				document.getElementById("r" + q).disabled = true;
			}

			return false;
        }