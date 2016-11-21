function Mostrar()
{
//tomo la edad  

var edad;
edad = document.getElementById('edad').value;
/*if (edad>18)
{
alert ( "es mayor de edad");
}
if (edad>13 && edad<17)
{
	alert ("adolescente");
}
if (edad<13)
{
	alert ("niño");
}*/

if (edad <13)
{
alert ("menor")
}
else
{
	if(edad>17)
	{
		alert ("mayor");
	}
	else
	{
		alert ("adolescente");
	}
}
}//FIN DE LA FUNCIÓN