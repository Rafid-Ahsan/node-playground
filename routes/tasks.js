const expresss = require('express')
const router = expresss.Router()

// controllers
const { 
    getAllTasks, 
    createTask, 
    getTask, 
    updateTask, 
    deleteTask 
} = require('../controllers/tasks')

router.route('/').get(getAllTasks)

module.exports = router