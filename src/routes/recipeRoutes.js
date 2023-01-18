const routes = (app) => {
    app.route('/recipe')
    .get((req, res) => {
        res.send("GET request sucessful")
    })
    .post((req, res) => {
        res.send("POST request sucessful")
    })

    app.route('/recipe/:recipeID')
    .put((req, res) => {
        res.send("PUT request sucessful")
    })
    .delete((req, res) => {
        res.send("DELETE request sucessful")
    })
}

export default routes