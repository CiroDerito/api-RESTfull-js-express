const Movie = require('../models/Movie');

const deleteMovie = async (id) => {
    try {
        const result = await Movie.deleteOne({ _id: id });
        return result;

    } catch (error) {
        throw new Error(`Error al borrar película: ${error.message}`);
    }
}

module.exports = deleteMovie;