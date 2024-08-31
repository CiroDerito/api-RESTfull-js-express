const deleteMovie = require('../services/deleteService');
const catcher = require('../utils/catcher')


const deleteMovieController = async (req, res) => {
    const { id } = req.params;
    const result = await deleteMovie(id);
    console.log('Movie deleted to Db', result)

    if (result.deletedCount === 0) {
        return res.status(404).json({ message: "Película no encontrada" });
    }

    res.status(200).json({ message: "Película eliminada con éxito" });
}

module.exports = { deleteMovie: catcher(deleteMovieController) }