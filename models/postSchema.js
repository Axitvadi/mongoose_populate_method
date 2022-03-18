const mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    }
})

let post = mongoose.model('post',postSchema)

module.exports = post