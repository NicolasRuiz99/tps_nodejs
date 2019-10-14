var socket = io();
var cont = 0;

function agregarTicket() {
    cont++;
    document.getElementById("lblNuevoTicket").innerHTML = "Ticket " + cont;
    socket.emit('cargarTicket', cont)
}

// escuchar 
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

//checkeamos el estado de la cola de tickets para asignar numero de tickets

socket.on('estadoCola', function(ultimoTicket) {
    cont = ultimoTicket;
})