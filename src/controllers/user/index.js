const UserRoutes = require('./routes')

const userRoutes = new UserRoutes().getRoutes()

module.exports = { userRoutes }
