const jwt = require('jsonwebtoken')
const customAPIError = require('../errors/custom-error')

const login = async (req, res) => {
    const { username, password } = req.body
    
    if(!username || !password) {
        throw new customAPIError('Please provide Username and Password', 400)
    }

    const id = new Date().getDate()
    const token = jwt.sign({
        id,
        username
    }, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })

    res.status(200).json({
        msg: 'User Created',
        token
    })
}

const dashboard = async (req, res) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new customAPIError('No token provided', 401)
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const luckyNumber = Math.random(100)

        res.status(200).json({
            msg: `Hello ${decoded.username}`,
            secret: `Here is your authorized data, Your lucky number ${luckyNumber}`
        })
    }   catch (error) {
        throw new customAPIError('Not Authorized to access this route', 401)
    }

}

module.exports = {
    login,
    dashboard
}