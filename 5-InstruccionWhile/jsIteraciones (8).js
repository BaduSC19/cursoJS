function mostrar()
{

	var num;
	var positivo=0;
	var negativo=1;
	var respuesta=true;
	while(confirm("mas numeros?")){
		num=prompt("");
		num=parseInt(num);
		if (num>=0) {
			positivo+=num;
		}else{
			negativo*=num;
		}
	}


	document.getElementById('suma').value=positivo;
	document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN