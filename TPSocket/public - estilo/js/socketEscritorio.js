var params = new URLSearchParams(location.search);
var nroEsc = params.get('escritorio');

document.getElementById("esc").innerHTML = "Escritorio " + nroEsc;

function atenderTicket() {
    socket.emit('solicitarTicket', nroEsc);
};

var socket = io();

// escuchar 
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor');
})

socket.on('enviarTicket', function(nroTicket) {
    if (nroTicket != null) {
        document.getElementById("ticketActual").innerHTML = "Ticket " + nroTicket;
    } else {
        document.getElementById("ticketActual").innerHTML = "....";
    }
})