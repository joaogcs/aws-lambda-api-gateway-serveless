const JsonRequest = require('../json')

export async function postAuthSalesforce () {
  const requestHandler = new JsonRequest(
    process.env.SALESFORCE_API_AUTH || 'url não especificada',
    'POST')

  requestHandler.setHeaders({
    'Content-Type': 'application/json'
  })
  requestHandler.setBody()

  try {
    return await requestHandler.send()
  } catch (error) {
    if (error instanceof Error) {
      throw error
    } else {
      throw Error(error)
    }
  }
}
