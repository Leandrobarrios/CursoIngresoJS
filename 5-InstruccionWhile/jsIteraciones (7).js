function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';

	while(respuesta=='si')
	{
	contador++;//a la variable contador le suma uno mas
	numeroIngresado= prompt("ingrese el numero");
	console.log(contador);
	numeroIngresado=parseInt(numeroIngresado);
	acumulador=(acumulador+numeroIngresado);
	respuesta=prompt("desea continuar , si o no ?")


	}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN