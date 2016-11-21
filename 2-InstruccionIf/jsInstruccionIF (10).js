function Mostrar()
{

//CONSIGO UN NUMERO RAMDON ENTRE EL 1 y el 10

	//Genero el número RANDOM entre 1 y 10 
	var numero;

	numero = Math.random();//0.56

	numero = numero*10;// multiplicado por 10 seria un 5.6

	numero = Math.round(numero);
	//VALIDAR QUE NUMERO ES Y MOSTRAR UN MENSAJE DE ACUERDO A LA NOTA QUE SACO

//CONSIGO UN NUMERO RAMDON ENTRE EL 1 y el 10
	if(numero>=9 && numero<=10)
	{
		alert ("excelente"+numero);
	}
	if(numero>=4 && numero<9)
	{
		alert("aprobado"+numero);
	}

	if(numero<4)
	{
	alert("la proxima se puede"+numero);
	}

}//FIN DE LA FUNCIÓN