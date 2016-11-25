/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numerosecreto;// variables globales 
var contadorintentos;// variables globales

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

if (numeroingresado==numerosecreto){
	alert ("gano");
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