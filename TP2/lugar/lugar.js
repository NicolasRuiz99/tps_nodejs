const obtenerLugar = async direccion => {
    const axios = require("axios");
    const instance = axios.create({
        baseURL: "https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=" +
            direccion,
        headers: {
            "x-rapidapi-key": "69bfa0f2f2msh1d0fb652e32168ep1079aejsn78381056e0fe"
        }
    });

    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error("No hay resultados para " + direccion);
    }

    const data = resp.data.Results[0];
    const dir = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        dir,
        lat,
        lng
    };
};

module.exports = {
    obtenerLugar
};