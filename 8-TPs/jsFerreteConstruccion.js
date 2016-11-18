/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las
 medidas que nos ingresen.
*/

function Rectangulo () 
{   var largo;
	var ancho;
	var superficie
	var alambre;

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;

	largo = parseInt (largo);
	ancho = parseInt (ancho);
	superficie = largo * ancho;
	alambre = superficie * 3;
	alert ("la cantidad de alambre a comprar es :" + alambre);
}


function Circulo () 
{
	var radio;
	var superficie;
	var alambre;

	radio = document.getElementById('Radio').value;
	radio = parseInt(radio);
	superficie = (3.14 * radio * radio);
	alambre = (superficie * 3);

	alert ("la cantidad de alambre a comprar es" + alambre);
}

function Materiales () 
{
	var largo;
	var ancho;
	var contrapisocemento;
	var contrapisocal; 

	largo = document.getElementById('Largo').value;
	ancho = document.getElementById('Ancho').value;

	largo = parseInt(largo);
	ancho = parseInt(ancho);

	contrapisocemento = (largo * ancho)* 2;
	contrapisocal = (largo * ancho)*3;
	alert ("para los datos ingresados se necesitan " + contrapisocemento + " de cemento y " +contrapisocal +" de cal");


 
}