const path = require('path')

class JsonResponse {
  constructor (response) {
    this.response = response
  }

  setHeaders (headers) {
    this.response.set(headers)
  }

  setStatus (httpStatusCode) {
    this.httpStatusCode = httpStatusCode
  }

  setPayload (payload) {
    this.payload = payload
  }

  handleError (error) {
    if (error instanceof Error) {
      this.httpStatusCode = 500
      this.payload = { message: error.message }
    } else {
      this.httpStatusCode = error.httpCode
      this.payload = { message: error.message }
    }
  }

  send () {
    this.response
      .status(this.httpStatusCode || 500)
      .json(this.payload)
  }

  sendFile (file, callback) {
    this.response.download(file, path.basename(file), callback)
  }
}

module.exports = JsonResponse
