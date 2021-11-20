const getAllTasks = ((req, res) => {
    res.send('all items')
})

const createTask = ((req, res) => {
    res.send('Create Task')
})

const getTask = ((req, res) => {
    res.send('Show task')
})

const updateTask = ((req, res) => {
    res.send('update items')
})

const deleteTask = ((req, res) => {
    res.send('delete items')
})

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}