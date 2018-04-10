var axios = require("axios");

var axiosInstance = axios.create({
  baseURL: "https://api.stackexchange.com/2.2/"
  /* other custom settings */
});

module.exports = axiosInstance;
