const express = require('express')
const app = express()
const tasks = require('./routes/tasks')

// middlewares
app.use(express.json())

// routes
app.get('/', (req, res) => {
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)

const port = 3600

app.listen(port, console.log(`Server is listening on port ${port}...`))

