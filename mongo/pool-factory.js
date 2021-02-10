const mongoose = require('mongoose')

mongoose.connect('mongodb://user_poc:123mudar@localhost:27017/poc_databases', {useNewUrlParser: true })
mongoose.Promise = global.Promise

module.exports = mongoose
