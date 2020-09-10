const mongoose = require('mongoose')

const MONGO_HOST = process.env.MONGO_HOST || 'mongo';
const MONGO_PORT = process.env.MONGO_PORT || 27017;
const MONGO_DB_NAME = process.env.MONGO_DB_NAME || 'todo_api'; 

const MONGO_URI = `mongodb://${MONGO_HOST}:${MONGO_PORT}/${MONGO_DB_NAME}`

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}).then((db) => console.log('MONGO is running')).catch(err => console.error(err))

module.exports = mongoose