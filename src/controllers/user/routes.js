const Routes = require('../../common/routes')
const JsonResponse = require('../../common/responses/json')
const UserController = require('./controllers')
const logger = require('../../util/logger')

class UserRoutes extends Routes {
  constructor () {
    super()
    this.userController = new UserController()
  }

  loadResources () {
    this.routes.get('/:id', (req, res) => {
      const result = this.userController.doSomething(req.params.id)
      logger.log({ level: 'info', message: result })

      const responseHandler = new JsonResponse(res)
      responseHandler.setPayload({ message: result })
      responseHandler.setStatus(200)
      responseHandler.send()
    })
  }
}

module.exports = UserRoutes
