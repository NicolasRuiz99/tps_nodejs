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

let getEmpleado = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id == id)

    if (!empleadoDB) {
        throw new Error(`No existe el empleado con el ID ${ id }`)
    } else {
        return empleadoDB;
    }
}

let getSalario = async(id) => {

    let empleadoDB = empleados.find(empleado => empleado.id == id)

    if (!empleadoDB) {
        throw new Error(`No existe el empleado con el ID ${ id }`)
    } else {
        let salarioDB = salarios.find(salario => salario.id == id)
        if (!salarioDB) {
            throw new Error(`No existe un salario para ${ empleadoDB.nombre }`)
        } else {
            return {
                nombre: empleadoDB.nombre,
                salario: salarioDB.salario
            };
        }
    }
}

getEmpleado(3).await()