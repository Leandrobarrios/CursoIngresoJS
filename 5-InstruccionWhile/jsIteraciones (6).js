function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var numeroIngresado;

while(contador<5)
{

contador++;//para q la linea se ejecute solo 5 veces
numeroIngresado= prompt("ingrese el numero");
console.log(contador);
numeroIngresado=parseInt(numeroIngresado);
acumulador=(acumulador+numeroIngresado);



}



document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN