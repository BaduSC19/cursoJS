function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	for ( var i=0; i < 5; i++){

		numero = parseInt(prompt("Ingrese su numero: "));
		//acumulador = acumulador + numero;
	 acumulador+=numero;
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}

/*function mostrar()
{

	var contador=0;
	var acumulador=0;

	while(contador < 5) {

		acumulador = acumulador + parseInt(prompt("Ingrese un nùmero.."));
		contador++;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}
*/

/*
function mostrar()
{
var seguir = 's';

	while ( seguir == 's'){
	alert("Hola mundo como le va?");
	seguir = prompt("Quiere que lo salude de nuevo?");
	}
}
*/


/*foo();
function foo() {
 	for (let x = 0; x < 10 ; x++){ 
	console.log(x);
 
 	}
 	console.log(" " + x);
}*/