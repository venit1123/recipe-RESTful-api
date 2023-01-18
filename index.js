import express from "express";
import routes from "./src/routes/recipeRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

// mongoose connection
mongoose.Promise = global.Promise //using promises so when we make a call they are going to wait for a response and not return an error.
mongoose.connect("mongodb://localhost/RECIPEdb", {
    useNewUrlParser: true
})

// bodyparser that allows to do the JSON back and forward between Mongo DB and server
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

routes(app)

app.get("/", (req, res) => {
    res.send(`Node and Express server is running on port ${PORT}`)
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});
