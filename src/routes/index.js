const {Router} = require("express")

const usersRoutes = require("./users.routes")
const movieRoutes = require("./movie.routes")
const tagsRoutes = require("./tags.routes")


const routes = Router()

routes.use("/users", usersRoutes)
routes.use("/notes", movieRoutes)
routes.use("/tags", tagsRoutes)

module.exports = routes