const errorHandlerMiddleware = (err, req, res, next) => {
    res.status(err.status).json({ msg: err.message })
}

module.exports = errorHandlerMiddleware