//Simulemos una base de datos -->
//BBDD empleados
let empleados = [{
    id: 1,
    nombre: 'Ernesto'
}, {
    id: 2,
    nombre: 'Marcelo'
}, {
    id: 3,
    nombre: 'Pedro'
}];

//BBDD Salarios
let salarios = [{
    id: 1,
    salario: 1000
}, {
    id: 2,
    salario: 2000
}];

//Creamos una funcion para obtener empleado por id

let getEmpleado = (id, callback) => {

    let empleadoDB = empleados.find(empleado => empleado.id == id); //Barre toda la funcion sobre los id

    if (!empleadoDB) {
        callback(`No existe un empleado con el id ${id}`)
    } else {
        callback(null, empleadoDB);
    }
}

/*
getEmpleado(3, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});
*/

//Obtenemos el salario

let getSalario = (id, callback) => {
    getEmpleado(id, (err, empleado) => {
        if (err) {
            callback(err);
        } else {
            let salarioDB = salarios.find(salario => salario.id == id)
            if (!salarioDB) {
                callback(`No existe un salario para ${empleado.nombre}`)
            } else {
                callback(null, {
                    nombre: empleado.nombre,
                    salario: salarioDB.salario
                });
            }
        }
    });
}

getSalario(3, (err, res) => {
    if (err) {
        return console.log(err);
    }
    console.log(`El salario de ${res.nombre} es de ${res.salario}`);
})