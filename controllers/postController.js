const mongoose = require("mongoose")
const POST = mongoose.model('post')

exports.data = {
    Addpost: async (req, res) => {
        try {
            const created = await POST.create(req.body)
            if (!created) {
                return res.json({
                    success: false,
                    message: 'failed to create post'
                })
            }
            return res.json({
                success: true,
                message: 'successfully created post'
            })
        } catch (error) {
            return res.json(error)
        }
    },getallpost: async (req, res) => {
        try {
            const alldata = await POST.find()
            if(alldata){
                return res.json({
                    success:true,
                    result:alldata
                })
            }
        } catch (error) {
            return res.json(error)
        }
    },
    getallpostwithuser: async (req, res) => {
        try {
            const alldata = await POST.find().populate("user_id")
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