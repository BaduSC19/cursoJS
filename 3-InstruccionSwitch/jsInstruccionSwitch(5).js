function mostrar() {
	
var laHora = document.getElementById('hora').value;
switch(laHora){
	case "7":
	case "8":
	case "9":
	case "10":
	case "11":
	alert(laHora+": Es de Mañana");
	break;
	default:
	break;
	}
}