const Movie = require('../models/Movie');
const catcher = require('../utils/catcher')

addMovieController = async (req, res) => {
    const newMovie = new Movie(req.body);
    console.log("Movie added to database:", newMovie)
    await newMovie.save();
    res.status(201).json({
        message: "Pelicula creada con exito",
        data: newMovie
    });

}

module.exports = { addMovie: catcher(addMovieController) }