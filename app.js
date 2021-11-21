const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')
const errorHandler = require('./middleware/error-handler')

// global middlewares
app.use(express.static('./public'))
app.use(express.json())

// routes
app.use('/api/v1/tasks', tasks)

const port = process.env.PORT || 3600

// custom middleware
app.use(notFound)
app.use(errorHandler)

const start = async() => {
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is listening on port ${port}...`))
    }   catch (error) {
        console.log(error)
    }
}

start()