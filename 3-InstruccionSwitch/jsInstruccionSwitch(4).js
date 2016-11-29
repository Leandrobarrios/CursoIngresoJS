function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
switch (mesDelAño)
{
case "Enero":
case "Marzo":
case "Mayo":
case "Julio":
case "Agosto":
case "Octubre":
case "Diciembre":
	alert ("si tiene 31 dias");
	break;
case "Febrero":
	alert("si tiene 28 dias");
	break;
default :
	alert("si tiene 30 dias");
	break;



}	



}//FIN DE LA FUNCIÓN