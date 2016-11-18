/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{

	var convercion;
	var temperatura;

	temperatura = document.getElementById('Temperatura').value;
	temperatura = parseInt (temperatura);
	convercion = (temperatura -32)/1.8;
	alert (temperatura +  " grados de Fahrenheit son " + convercion + " centígrados");




}

function CentigradosFahrenheit () 
{
	var convercion;
	var temperatura;

	temperatura = document.getElementById('Temperatura').value;
	temperatura = parseInt (temperatura);
	convercion =  32 + temperatura * 1.8;
	alert (temperatura +  " grados centígrados son " + convercion + " Fahrenheit");
}
