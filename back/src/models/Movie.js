const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true,
        min: [1895, "The year entered is not valid"],
        max: new Date().getFullYear() + 2,
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true

    },
    genre: {
        type: [String],
        required: true
    },
    rate: {
        type: Number,
        required: true
    },
    poster: {
        type: String,
        required: true
    }
}, { collection: 'moviesCollection' });

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;