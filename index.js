const express = require('express')
const app = express()
const bodyparser = require('body-parser')
require("./config/db")
const router = require("./routes/index")

app.use(bodyparser.json({
    limit: '1024mb'
}))
app.use(bodyparser.urlencoded({
    limit: '1024mb',
    extended: false
}))

app.use(router)

const port = 4000
app.listen(port, () => {
    console.log('server successfully connected !')
})