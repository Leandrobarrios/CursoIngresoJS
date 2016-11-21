function Mostrar()
{
//tomo la edad  
var edad;
var estadocivil;

edad=document.getElementById('edad').value;
estadocivil=document.getElementById('estadoCivil').value;


 if(edad<18 && estadocivil !="Soltero") 
	{alert ("es muy pequeño para no ser Soltero");}


}//FIN DE LA FUNCIÓN