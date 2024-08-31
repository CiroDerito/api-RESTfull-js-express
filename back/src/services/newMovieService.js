const Movie = require('../models/Movie');

const addMovie = async (movieData) => {
    const { title, year, director, duration, genre, rate, poster } = movieData;
    if (!title || !year || !director || !duration || !genre || !rate || !poster) {
        throw new Error('All fields are required');
    }

    const newMovie = new Movie({
        title,
        year,
        director,
        duration,
        genre,
        rate,
        poster
    });

    await newMovie.save();
    return newMovie;
};

module.exports = {
    addMovie
};