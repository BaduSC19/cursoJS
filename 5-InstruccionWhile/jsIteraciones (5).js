function mostrar()
{
var sexo = prompt("Ingrese f ó m .");
	while(sexo!="f"&&sexo!="m"){
		sexo=prompt("Otra vez")
	}
document.getElementById('Sexo').value=sexo;
} 