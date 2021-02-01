const serverless = require('serverless-http')
const App = require('./src/index')

const app = new App()
const server = app.getApplication()

module.exports.handler = serverless(server)
