class ApiError {
  constructor (statusCode, message, isOperational = true, stack = '') {
    this.code = statusCode
    this.isOperational = isOperational
    this.message = message
    if (stack) {
      this.stack = stack
    } else {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

module.exports = ApiError
