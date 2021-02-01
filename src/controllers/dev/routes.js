const Routes = require('../../common/routes')
const JsonResponse = require('../../common/responses/json')
const MathController = require('./controllers')
const logger = require('../../util/logger')

class DevRoutes extends Routes {
  constructor () {
    super()
    this.mathController = new MathController()
  }

  loadResources () {
    this.routes.get('/:a/:b', (req, res) => {
      const result = this.mathController.sum(req.params.a, req.params.b)
      logger.log({ level: 'info', message: result })

      const responseHandler = new JsonResponse(res)
      responseHandler.setPayload({ message: result })
      responseHandler.setStatus(200)
      responseHandler.send()
    })
  }
}

module.exports = DevRoutes
