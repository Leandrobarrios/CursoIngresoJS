function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");


while (numero<0 || numero>10)
{
numero= prompt ("el numero esta mal");
}
document.getElementById('Numero').value=numero;
}//FIN DE LA FUNCIÓN