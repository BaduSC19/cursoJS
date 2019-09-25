function mostrar()
{

	var nota=-1;
	var acumNota=0;
	var contNotas=0;
	var contNT=0;
	var primera=true;
	var primeraF=true;
	var primeraM=true;
	var notaMax;
	var notaMin;
	var notaMaxF;
	var notaMinF;
	var notaMaxM;
	var notaMinM;
	var sexo;
	while(confirm("")){

		while(nota<1||nota>10){
			console.log(nota);
			nota=prompt("");
			nota=parseInt(nota);
		}
		while(sexo!="f"&&sexo!="m"){
			sexo=prompt("")
		}
		contNT++;
		if (nota>=4) {
			acumNota+=nota;
			contNotas++;
		}
		if (primera) {
			primera=false;
			notaMax=nota;
			notaMin=nota;
		}else{
			if (nota>notaMax) {
				notaMax=nota;
			}
			if (nota<notaMin) {
				notaMin=nota;
			}
		}
		if (primeraF) {
			primeraF=false;
			notaMaxF=nota;
			notaMinF=nota;
		}else{
			if (nota>notaMaxF) {
				notaMaxF=nota;
			}
			if (nota<notaMinF) {
				notaMinF=nota;
			}
		}
		if (primeraM) {
			primeraM=false;
			notaMaxM=nota;
			notaMinM=nota;
		}else{
			if (nota>notaMaxM) {
				notaMaxM=nota;
			}
			if (nota<notaMinM) {
				notaMinM=nota;
			}
		}
		nota=-1;
		sexo="k";
	}



}//FIN DE LA FUNCIÓN