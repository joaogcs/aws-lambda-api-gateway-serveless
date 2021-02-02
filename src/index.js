const Express = require('express')
const AllRoutes = require('express-list-endpoints')
const BodyParser = require('body-parser')
const { devRoutes } = require('./controllers/dev/index')
const { userRoutes } = require('./controllers/user/index')

class App {
  constructor () {
    this.server = Express()
    this.commonMiddlewares()
    this.routes()
    this.unhandledRequests()
  }

  getApplication () {
    return this.server
  }

  commonMiddlewares () {
    this.server.set('json spaces', 3) // to format json express response
    this.server.use(BodyParser.json())
  }

  routes () {
    this.server.use('/dev', devRoutes)
    this.server.use('/user', userRoutes)
  }

  unhandledRequests () {
    this.server.use('*', (req, res) => {
      const message = {
        error: `Path ${req.baseUrl + req.path} not found`,
        solution: {
          message: 'View all available routes',
          routes: AllRoutes(this.server)
        }
      }
      res.status(404)
      res.json(message)
    })

    this.server.use('/help', (req, res) => {
      const message = {
        message: 'View all available routes',
        routes: AllRoutes(this.server)
      }
      res.status(200)
      res.json(message)
    })
  }
}

module.exports = App
