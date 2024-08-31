require("dotenv").config()
const app = require("./src/server");
const conDb = require("./src/config/conDb")
const { PORT } = process.env


conDb().then((res) => {
    app.listen(PORT, () => {
        console.log(`Listening on port: ${PORT}`);
    });
})
    .catch((err) => {
        console.log("No fue posible conectar el servidor");

    })
