const express = require("express")
const router = express.Router()
const user = require("../controllers/userController")
const post = require("../controllers/postController")

// user 
router.post('/adduser',user.data.Adduser)
router.get('/getalluser',user.data.getalluser)

// post
router.post('/addPost',post.data.Addpost)
router.get('/getAllPost',post.data.getallpost)

// POPULATE
router.get('/getAllPostwithUser',post.data.getallpostwithuser)

module.exports = router