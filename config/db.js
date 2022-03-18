"use strict"

var mongoose = require('mongoose')

mongoose.Promise = global.Promise
require("../models/userSchema")
require("../models/postSchema")

mongoose.connect("mongodb://localhost:27017/Querypractice")

var db = mongoose.connection

db.once('open',()=>{console.log('successfully connected to database')})

db.on('error',console.error.bind(console,'failed to connect database'))