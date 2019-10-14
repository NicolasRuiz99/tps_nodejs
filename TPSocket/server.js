const express = require('express');
const socketIO = require('socket.io');
const http = require('http');

const path = require('path');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, './public - estilo');
const port = process.env.PORT || 3000;

// inicializamos la cola de tickets

let colaTickets = []
let colaAtendidos = []

app.use(express.static(publicPath));

let io = socketIO(server)

io.on('connection', (client) => {
    console.log(`Usuario ${client.id} conectado`);

    // enviamos la cantidad de elementos de la cola al cliente

    client.emit('estadoCola', colaTickets.length);

    client.emit('connect', colaAtendidos)

    client.on('disconnect', () => {
        console.log(`Usuario ${client.id} desconectado`);
    });

    // escuchamos la peticion del cliente para cargar la cola de tickets

    client.on('cargarTicket', (nro) => {
        colaTickets.push(nro);
        console.log(`Cola tickets: ${colaTickets}`);
    })

    client.on('solicitarTicket', (nroEsc) => {
        let nroTicket = colaTickets.shift()
        client.emit('enviarTicket', nroTicket)
        if (nroTicket != null) {
            let turno = {
                nroTicket,
                nroEsc
            }
            colaAtendidos.push(turno);
            //console.log(`Cola tickets: ${colaTickets}`);
            //console.log(`Cola atendidos: ${colaAtendidos}`);
            console.log(turno);
            io.sockets.emit('mostrarNuevoTurno', turno)
        }

    })

})

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});