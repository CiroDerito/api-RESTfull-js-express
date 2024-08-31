const { getMovies } = require('../services/movieService');
const catcher = require('../utils/catcher')

const getAllMovies = async (req, res) => {
    const movies = await getMovies();
    res.status(200).json(movies);
}
module.exports = { getAllMovies: catcher(getAllMovies) };