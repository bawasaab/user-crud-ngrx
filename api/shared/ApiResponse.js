class ApiResponse {
  constructor (statusCode, message, data) {
    this.code = statusCode
    this.message = message
    this.data = data
  }
}

module.exports = ApiResponse
