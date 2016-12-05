function Mostrar()
{

	var contador=0;
	// declarar variables
	var minimo;
	var maximo;
	var respuesta='si';

	while(respuesta!='no')
{
	contador++;//a la variable contador le suma uno mas
	numeroIngresado= prompt("ingrese el numero");
	numeroIngresado=parseInt(numeroIngresado);// tomo el texto q tomo por prompt y lo paso a numero
	if(contador==1)
	{
	maximo=numeroIngresado;
	minimo=numeroIngresado;
	}

	else
	{
		if(numeroIngresado<maximo)
		{

		minimo=numeroIngresado
		}
		if (numeroIngresado>maximo)
		{
		maximo = numeroIngresado;
		}

	}
	respuesta=prompt("desea continuar , si o no ?")
}


document.getElementById('maximo').value;
document.getElementById('minimo').value;
}//FIN DE LA FUNCIÓN