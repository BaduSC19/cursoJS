/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
    var num2;
    var suma;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    
    suma = num1 + num2;

    alert("La suma es " + suma );
}

function restar()
{
	var num1;
    var num2;
    var resta;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    
    resta = num1 - num2;

    alert("La suma es " + resta );
}

function multiplicar()
{ 
	var num1;
    var num2;
    var multi;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    
    multi = num1 * num2;

    alert("La suma es " + multi );
}

function dividir()
{
	var num1;
    var num2;
    var divide;

    num1 = parseInt(document.getElementById("numeroUno").value);
    num2 = parseInt(document.getElementById("numeroDos").value);
    
    divide = num1 / num2;

    alert("La suma es " + divide );
}

