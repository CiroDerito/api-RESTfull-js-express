const movieService = require('../services/updateService');
const catcher = require('../utils/catcher')
const updateMovie = async (req, res) => {
    const { id } = req.params;
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const updateData = { title, year, director, duration, genre, rate, poster };
    const updatedMovie = await movieService.updateMovie(id, updateData);

    res.status(200).json({
        message: "Película modificada con éxito",
        data: updatedMovie
    });
}

module.exports = {
    updateMovie: catcher(updateMovie)
};
