const mongoose = require('mongoose')
const {Schema} = mongoose;

const TaskSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: { 
        type: String, 
        required: true 
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    dueDate: {
        type: Date,
        required: false
    }

})
module.exports = mongoose.model('Tasks', TaskSchema)
