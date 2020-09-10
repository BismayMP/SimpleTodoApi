const Task = require('../model/task')

const insertTask = async (task) => {
     const data = new Task(task)
     return await data.save()
}

const getAllTask = () => {
    return Task.find((err, res) => (err) ? err : res)
}

const getTask = async (_id) => {
    return await Task.findOne({_id})
}

const deleteTask = async (_id) => {
    return await Task.findOneAndDelete(_id)
}

const updateTask = async (id, task) => {
    return await Task.findByIdAndUpdate(id, task)
}

module.exports = {
    insertTask,
    getTask,
    getAllTask,
    deleteTask,
    updateTask
}