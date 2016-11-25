/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numerosecreto;// variables globales 
var contadorintentos;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	
	contadorintentos=0;
	numerosecreto=numero = Math.floor((Math.random() * 100) + 1);// entre 1 y 100
		//alert(numeroSecreto );
	 
	

}

function verificar()
{
	var numeroingresado;


	contadorintentos =contadorintentos + 1; 
	console.log("el contador"+ contadorintentos);
	document.getElementById('intentos').value=contadorintentos;
	numeroingresado=document.getElementById('numero').value;	

	
	if (numeroingresado==numerosecreto)
	{
	alert ("gano");
		if(contadorintentos>10)
		{
			alert("afortunado en el amor");
		}
		if(contadorintentos>5&&contadorintentos<11)
		{
			alert("usted esta en la media");
		}
		if(contadorintentos==5)
		{
			alert("esto es suerte");

		}
		if(contadorintentos==4)
		{
			alert("escelente tecnica");
			
		}
		if(contadorintentos>3&&contadorintentos<4)
		{
			alert("esto es suerte");

		}
		if(contadorintentos>1&&contadorintentos<3)
		{
			alert("excelente percepción”");

		}
		if(contadorintentos==1)
		{
			alert("usted es un Psíquico”");
		}

	}	
		else
		{
		 	if(numerosecreto>numeroingresado)
			{
			alert("falta");
			}
			else
			{	
			alert("te pasaste");
			}
		}
		

}