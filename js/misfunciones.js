
function __(id) {
	var id = document.getElementById(id);
	return id;
}

function Titulo() {
	document.title = "Clase 5";
	// MensajeEmergente();
	DiasSemana();
	IniciarHora();
}

function MensajeEmergente() {
	var DatoUsuario = prompt("Ingrese su usuario");
	if (DatoUsuario) {
		DatoUsuario = DatoUsuario;
	} else {
		DatoUsuario = "Sin Nombre";
	}
		__('titulo').innerHTML = "<h1>"+DatoUsuario+"</h1>";
		__('titulo1').innerHTML = "otro dato";
	
}

function DiasSemana() {
	var Dias = ["lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
	var i = 0;
	var resultado = "";
	while(i < Dias.length) {
		resultado = resultado+Dias[i]+"<br>";
		i++;
	}
	__('titulo2').innerHTML = resultado;
}

function IniciarHora() {
	var Hoy = new Date();
	var Hora = Hoy.getHours();
	var Min = Hoy.getMinutes();
	var Seg = Hoy.getSeconds();

	Min = checkTime(Min);
	Seg = checkTime(Seg);

	__('reloDigital').innerHTML = Hora+":"+Min+":"+Seg;

	var Tiempo = setTimeout('IniciarHora()',500);
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

