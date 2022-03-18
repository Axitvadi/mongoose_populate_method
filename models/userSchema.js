const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    job: {
        type: String
    }
})

let user = mongoose.model('user',userSchema)

module.exports = user