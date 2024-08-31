const renderMovies = require('./renderMovie.js');
const axios = require("axios");

const fetchMovies = axios.get("http://localhost:3000/movies");

fetchMovies
  .then((res) => {
    renderMovies(res.data)


  })
  .catch((reason) => {
    console.log(reason);
  });