function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
	numero = Math.floor((Math.random() * 10) + 1);// entre 1 y 10
	if(numero>=9 && numero<=10)
	{
		alert("excelente" + numero);
	}
	if(numero>=4 && numero<9)
	{
		alert ("aprobado"+numero);
	}
	if(numero<4)
	{
		alert("la proxima se puede"+ numero);
	}
	

}//FIN DE LA FUNCIÓNMath.floor((Math.random() * 10) + 1);// entre 1 y 9