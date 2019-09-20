const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const ddbb = require("./DDBBfcs");

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
        const res = await clima.getClima(coords.lat, coords.lng);


        const info = {
            dir: coords.dir,
            temp: res.temp,
            pres: res.pres,
            hum: res.hum
        }

        ddbb.addItem("./ddbb.json", info) //Cargamos datos obtenidos en un archivo JSON

        return `El clima de ${coords.dir} es de ${res.temp}°`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};

const encodeUlr = encodeURI(argv.direccion);

getInfo(encodeUlr)
    .then(console.log)
    .catch(console.log);