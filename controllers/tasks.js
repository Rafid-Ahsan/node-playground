const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async')

const getAllTasks = asyncWrapper(async (req, res) => {
    const tasks = await Task.find({})
    res.status(201).json({ 
        status: 'success',
        data: {
            tasks,
            nbHits: tasks.length
        }
    })
})

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json({
        status: 'success',
        data: {
            task
        }
    })
    res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res, next) => {
    const { id:taskID } = req.params
    const task = await Task.findOne({ _id: taskID })

    if(!task) {
        const error = new Error('Not Found')
        error.status = 404
        next(error)
    }

    res.status(200).json({ task })
})

const updateTask = asyncWrapper(async (req, res) => {
    const { id:taskID } = req.params
    const task = await Task.findOneAndUpdate({ _id:taskID }, req.body, {
        new: true,
        runValidators: true
    })

    if(!task) {
        const error = new Error('Not Found')
        error.status = 404
        return res.status(404).json({ msg: `No Task with ID: ${taskID}` })
    }

    res.status(200).json({ task })
})

const deleteTask = asyncWrapper(async (req, res) => {
    const { id:taskID } = req.params
    const task = await Task.findByIdAndDelete({ _id:taskID })

    if(!task) {
        return res.status(404).json({ msg: `No Task with ID: ${taskID}` })
    }

    res.status(200).json({ task: null, status: 'success' })
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}