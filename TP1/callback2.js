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

getEmpleado(2, (err, empleado) => {
    if (err) {
        return console.log(err);
    }
    console.log(empleado);
});

let getSalario = (id, callback) => {

    let salarioDB = salarios.find(salario => salario.id == id)
    if (!salarioDB) {
        callback(`No existe un salario con el id ${id}`)
    } else {
        callback(null, salarioDB);
    }
}

getSalario(1, (err, salario) => {
    if (err) {
        return console.log(err);
    }
    console.log(salario);
})