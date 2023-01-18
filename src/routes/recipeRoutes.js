const routes = (app) => {
    app.route('/recipe')
    .get((req, res,  next) => {
        console.log(`HERE: ${req.originalUrl}`)
        console.log(`HERE2: ${req.method}`)
        next();
    }, (req, res, next) => {
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

/* Note: A middleware is an express function that access the request 
    and response objects and acts on them 
*/