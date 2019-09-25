function mostrar() {
    //tomo la edad  
    var mes = document.getElementById('mes').value;
    var dias = ["tiene 28 dias", "tiene 30 dias", "tiene 31 dias"];


    switch (mes) {
        case "Enero":
            alert(dias[2]);
            break;
        case "Febrero":
            alert(dias[0]);
            break;
        case "Marzo":
            alert(dias[2]);
            break;
        case "Abril":
            alert(dias[1]);
            break;
        case "Mayo":
            alert(dias[2]);
            break;
        case "Junio":
            alert(dias[1]);
            break;
        case "Julio":
            alert(dias[2]);
            break;
        case "Agosto":
            alert(dias[2]);
            break;
        case "Septiembre":
            alert(dias[1]);
            break;
        case "Octubre":
            alert(dias[2]);
            break;
        case "Noviembre":
            alert(dias[1]);
            break;
        case "Diciembre":
            alert(dias[2]);
            break;



    }
}