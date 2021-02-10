const mongoose = require('./pool-factory')

const schema = new mongoose.Schema({
    TaskStatus: String,
    TaskType: String,
    ObjectLinkingId: String,
    ObjectName: String,
    ObjectType: String,
    ObjectState: String,
    Location: String,
    SlaDomainId: String,
    SlaDomain: String,
    SlaDomainState: String,
    StartTime: String,
    EndTime: String,
    Duration: String,
    DataTransferred: String,
    DataStored: String
})

const Model = mongoose.model('events', schema);

module.exports = Model