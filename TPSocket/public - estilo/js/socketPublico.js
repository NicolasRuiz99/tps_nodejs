var socket = io();

//para cargar los ultimos 4 datos de la cola de atendidos en pantalla

function cargarDatosCelda(colaAtendidos) {
    var data;
    var ultimos4;
    if (colaAtendidos.length > 4) {
        ultimos4 = colaAtendidos.slice(1).slice(-4);
    } else {
        ultimos4 = colaAtendidos;
    }
    console.log(ultimos4);
    var limite = ultimos4.length - 1
    console.log(limite);

    var j = 1;
    for (var i = limite; i >= 0; i--) {
        data = ultimos4[i];
        document.getElementById("lblTicket" + j).innerHTML = "Ticket " + data.nroTicket
        document.getElementById("lblEscritorio" + j).innerHTML = "Escritorio " + data.nroEsc
        j++;
    }
}

// para reordenar los datos en pantalla al agregarse un nuevo turno

function moverDatosCelda(idOrigen, idDestino) {
    console.log("lblTicket" + idOrigen);
    document.getElementById("lblTicket" + idDestino).innerHTML = document.getElementById("lblTicket" + idOrigen).innerText
    document.getElementById("lblEscritorio" + idDestino).innerHTML = document.getElementById("lblEscritorio" + idOrigen).innerText
}

// escuchar 
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

// escuchamos la peticion para añadir nuevo turno a la pantalla

socket.on('mostrarNuevoTurno', function(data) {
    moverDatosCelda("3", "4");
    moverDatosCelda("2", "3");
    moverDatosCelda("1", "2");
    document.getElementById("lblTicket1").innerHTML = "Ticket " + data.nroTicket;
    document.getElementById("lblEscritorio1").innerHTML = "Escritorio " + data.nroEsc;

})

// escuchamos la peticion para mantener actualizados los datos en caso de perdida de conexion

socket.on('actPantalla', function(colaAtendidos) {
    if (colaAtendidos.length > 0) {
        cargarDatosCelda(colaAtendidos);
    }
})