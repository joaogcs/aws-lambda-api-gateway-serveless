const DevRoutes = require('./routes')

const devRoutes = new DevRoutes().getRoutes()

module.exports = { devRoutes }
