function Mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	
	var respuesta='si';


	while(respuesta=='si')
	{

	contador++;//a la variable contador le suma uno mas
	numeroIngresado= prompt("ingrese el numero");
	numeroIngresado=parseInt(numeroIngresado);// tomo el texto q tomo por prompt y lo paso a numero
	if(numeroIngresado<0)
	{
	negativo=negativo*numeroIngresado;
	}
	else
	{
	positivo=positivo+numeroIngresado;
	}
	respuesta=prompt("desea continuar , si o no ?")
	}





document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN