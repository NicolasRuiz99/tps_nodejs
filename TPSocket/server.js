const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const ddbb = require("./funcionesBBDD");
const rutaData = "./data.json"

const path = require('path');

const app = express();

let server = http.createServer(app);

const publicPath = path.resolve(__dirname, './public - estilo');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

let io = socketIO(server)

// inicializamos la cola de tickets, ultimo ticket y la cola de atendidos con los datos cargados en data.json

let colaTickets;
let ultimoTicket;
let colaAtendidos;

ddbb.jsonReader(rutaData, (err, obj) => {
    if (err) {
        console.log('Error reading file:', err)
        return
    }

    colaTickets = obj.tickets;
    ultimoTicket = obj.ultTicket;
    colaAtendidos = obj.atendidos;
});

io.on('connection', (client) => {
    console.log(`Usuario ${client.id} conectado`);

    // enviamos la cantidad de elementos de la cola de tickets al cliente

    client.emit('estadoCola', ultimoTicket);

    //enviamos la cola de tickets atendidos 

    client.emit('actPantalla', colaAtendidos);

    client.on('disconnect', () => {
        console.log(`Usuario ${client.id} desconectado`);
    });

    // escuchamos la peticion del cliente para cargar la cola de tickets

    client.on('cargarTicket', (nro) => {

        //guardamos el ultimo nro de ticket para mantener el contador, lo añadimos a la cola de tickets y actualizamos json

        colaTickets.push(nro);
        ddbb.addTicket(rutaData, nro);

        ultimoTicket = nro;
        console.log(ultimoTicket);

        ddbb.addUltTicket(rutaData, ultimoTicket);


        console.log(`Cola tickets: ${colaTickets}`);
    })

    // escuchamos la peticion del escritorio para atender un ticket

    client.on('solicitarTicket', (nroEsc) => {

        //eliminamos ticket de la cola y actualizamos json

        let nroTicket = colaTickets.shift()
        ddbb.eliminarTicket(rutaData);

        //enviamos el nro de ticket al escritorio para atenderlo

        client.emit('enviarTicket', nroTicket)

        if (nroTicket != null) {
            let turno = {
                nroTicket,
                nroEsc
            }

            // añadimos ticket a la cola y actualizamos el json

            colaAtendidos.push(turno);
            ddbb.addAtendido(rutaData, turno);


            // enviamos mensaje para actualizar la pantalla de turnos
            io.sockets.emit('mostrarNuevoTurno', turno)


        }

    })

})

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});