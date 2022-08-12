function errorHandler(error, request, response, next) {
    const { status = 500, message = "Something went wrong!" } = error;
    return response.status(status).json({ error: message });
  }
  
  module.exports = errorHandler;