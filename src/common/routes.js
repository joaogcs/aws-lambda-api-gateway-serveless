const { Router } = require('express')

class Routes {
  constructor () {
    this.routes = Router()
    this.loadResources()
  }

  getRoutes () {
    return this.routes
  }

  loadResources () {}
}

module.exports = Routes
