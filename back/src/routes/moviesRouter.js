const { Router } = require("express");
const { getAllMovies } = require("../controllers/moviesController");
const { addMovie } = require("../controllers/moviePostController")
const { updateMovie } = require("../controllers/updateController");
const { deleteMovie } = require('../controllers/deleteController');

const movieRouter = Router();

movieRouter.get("/", getAllMovies);
movieRouter.post("/", addMovie);
movieRouter.put("/:id", updateMovie);
movieRouter.delete("/:id", deleteMovie);
module.exports = movieRouter;
