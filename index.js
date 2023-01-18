import express from "express";
import routes from "./src/routes/recipeRoutes"

const app = express();
const PORT = 3000;

routes(app)

app.get("/", (req, res) => {
    res.send(`Node and Express server is running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
