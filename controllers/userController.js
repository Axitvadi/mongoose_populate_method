const mongoose = require("mongoose")
const USER = mongoose.model('user')

exports.data = {
    Adduser: async (req, res) => {
        try {
            const created = await USER.create(req.body)
            if (!created) {
                return res.json({
                    success: false,
                    message: 'failed to create user'
                })
            }
            return res.json({
                success: true,
                message: 'successfully created user'
            })
        } catch (error) {
            return res.json(error)
        }
    },
    getalluser: async (req, res) => {
        try {
            const alldata = await USER.find()
            if(alldata){
                return res.json({
                    success:true,
                    result:alldata
                })
            }
        } catch (error) {
            return res.json(error)
        }
    }
}