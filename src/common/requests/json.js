const axios = require('axios')

class JsonRequest {
  constructor (domain, method) {
    this.domain = domain
    this.method = method || 'GET'
  }

  setHeaders (headers) {
    this.headers = headers
  }

  setBody (body) {
    this.body = body
  }

  handleError (error) {
    if (error instanceof (Error)) {
      this.response = { error: 500, message: error.message }
    } else {
      this.response = { error: error.httpCode, message: error.message }
    }
    throw Error(JSON.stringify(this.response))
  }

  async send () {
    const requestOptions = {
      method: this.method,
      url: this.domain,
      headers: this.headers,
      data: this.body
    }

    return axios(requestOptions)
      .then((response) => {
        return response
      })
      .catch((error) => {
        if (error.response) {
          this.handleError(error.response.data, error.response.status)
        } else if (error.request) {
          this.handleError('The request was made but no response was received to ' + error.request._currentUrl)
        } else {
          this.handleError('Something happened in setting up the request that triggered an Error ' + error.message)
        }
      })
  }
}

module.exports = JsonRequest
