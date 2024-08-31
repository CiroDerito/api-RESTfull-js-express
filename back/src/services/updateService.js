const Movie = require('../models/Movie');

const updateMovie = async (id, updateData) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!updatedMovie) {
            throw new Error('Película no encontrada');
        }

        return updatedMovie;
    } catch (error) {
        throw new Error(`Error al actualizar la película: ${error.message}`);
    }
};

module.exports = {
    updateMovie
};