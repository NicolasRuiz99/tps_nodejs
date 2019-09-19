let empleados = [{
    id: 1,
    nombre: 'Tito'
}, {
    id: 2,
    nombre: 'Pedro'
}, {
    id: 3,
    nombre: 'Juan'
}];

let salarios = [{
    id: 1,
    salario: 3000
}, {
    id: 2,
    salario: 4000
}];

let getEmpleado = (id) => {
    return new Promise((resolve, reject) => {
        // La promesa es una funcion, que tiene dos callback, resolve y reject
        // El "resolve", se llama si la promesa es exitosa, si logra encontrar un empleado
        // El "reject" se llama si no es exitosa, si no existe un empleado en la BBDD
        let empleadoDB = empleados.find(empleado => empleado.id == id)

        if (!empleadoDB) {
            reject(`No existe el empleado con el ID ${ id }`)
        } else {
            resolve(empleadoDB)
        }
    })
}

let getSalario = (id) => {
    return new Promise((resolve, reject) => {
        getEmpleado(id)
            .then(empleado => {
                let salarioDB = salarios.find(salario => salario.id == id)
                if (!salarioDB) {
                    reject(`No existe un salario para ${ empleado.nombre }`)
                } else {
                    resolve({
                        nombre: empleado.nombre,
                        salario: salarioDB.salario
                    })
                }
            })
            .catch(err => {
                reject(err);
            })
    })
}

/*
getEmpleado(2)
    .then(empleado => {
        console.log(`El empleado con el ID ${empleado.id} es ${empleado.nombre}`);
    })
    .catch(err => {
        console.log(err);
    })
*/

getSalario(3)
    .then((res) => {
        console.log(`El empleado ${res.nombre} tiene un salario de ${res.salario}`);
    })
    .catch(err => {
        console.log(err);
    })