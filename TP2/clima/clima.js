const axios = require("axios");

const getClima = async(lat, lng) => {
    const resp = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather?lat=" +
        lat +
        "&lon=" +
        lng +
        "&appid=5133e06ff2617085e5e05bccf763f53f&units=metric"
    );

    return resp.data.main.temp;
};

module.exports = {
    getClima
};