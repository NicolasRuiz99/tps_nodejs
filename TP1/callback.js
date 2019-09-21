let getUsuarioById = (id, callback) => {
    let usuario = {
        nombre: "Ernesto",
        id
    }

    if (id == 20) {
        callback(`El usuario con id ${id}, no existe en la Base de Datos`);
    } else {
        callback(null, usuario)
    }
}

//Cuando modificamos el id (que sea distinto a 20) nos devolverá siempre el usuario con el nombre Ernesto y el id que mandemos
getUsuarioById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log('Usuario de base de datos', usuario);
});