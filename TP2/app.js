const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");

const argv = require("yargs").options({
    direccion: {
        alias: "d",
        desc: "Direccion de la ciudad para obtener el clima: ",
        demand: true
    }
}).argv;

const getInfo = async direccion => {
    try {
        const coords = await lugar.obtenerLugar(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.dir} es de ${temp}°`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

const encodeUlr = encodeURI(argv.direccion);

getInfo(encodeUlr)
    .then(console.log)
    .catch(console.log);

//lugar.obtenerLugar(encodeUlr).then(console.log);

/*
clima
    .getClima(-31.732885, -58.39889)
    .then(console.log)
    .catch(console.log);
*/