const fs = require('fs')

function resetFile(filePath, obj) {
    let jsonData = JSON.stringify(obj, null, 2);
    fs.writeFileSync(filePath, jsonData, err => {
        if (err) {
            console.log('Error writing file', err)
        } else {
            console.log('Successfully wrote file')
        }
    })
}

function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch (err) {
            return cb && cb(err)
        }
    })
}

//para añadir un ticket a la cola de espera

function addTicket(filePath, obj) {
    jsonReader(filePath, (err, res) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }

        res['tickets'].push(obj);
        fs.writeFileSync(filePath, JSON.stringify(res, null, 2), (err) => {
            if (err) {
                console.log('Error writing file:', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    })
};

//para acutalizar el ultimo ticket de la cola

function addUltTicket(filePath, nro) {
    jsonReader(filePath, (err, res) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }

        res['ultTicket'] = nro;
        fs.writeFileSync(filePath, JSON.stringify(res, null, 2), (err) => {
            if (err) {
                console.log('Error writing file:', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    })
};

//para agregar un turno a la cola de atendidos

function addAtendido(filePath, obj) {
    jsonReader(filePath, (err, res) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }

        res['atendidos'].push(obj);
        fs.writeFileSync(filePath, JSON.stringify(res, null, 2), (err) => {
            if (err) {
                console.log('Error writing file:', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    })
};

//para eliminar ticket de la cola de tickets

function eliminarTicket(filePath) {
    jsonReader(filePath, (err, res) => {
        if (err) {
            console.log('Error reading file:', err)
            return
        }

        res['tickets'].shift();
        fs.writeFileSync(filePath, JSON.stringify(res, null, 2), (err) => {
            if (err) {
                console.log('Error writing file:', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
    })
};


// le damos forma al json para crear el archivo persistente (donde guardar la cola tickets, atendidos y el ultimo ticket)

/*
resetFile("./data.json", {
    tickets: [],
    ultTicket: 0,
    atendidos: []
})
*/

module.exports = {
    addTicket,
    addUltTicket,
    addAtendido,
    jsonReader,
    eliminarTicket
};