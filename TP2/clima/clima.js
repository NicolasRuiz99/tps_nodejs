const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lng +
        "&appid=5133e06ff2617085e5e05bccf763f53f&units=metric"
    );

    const temp = resp.data.main.temp;
    const pres = resp.data.main.pressure;
    const hum = resp.data.main.humidity;

    return {
        temp,
        pres,
        hum
    };
};

module.exports = {
    getClima
};