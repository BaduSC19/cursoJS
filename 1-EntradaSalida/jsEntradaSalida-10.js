/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var sueldo;
    var nuevoSueldo;
    var aumento;
    sueldo = parseInt(document.getElementById("importe").value);
    
    aumento =sueldo * 25 /100;
    
    
    nuevoSueldo =sueldo +aumento;
    document.getElementById("resultado").value = nuevoSueldo;	
}
