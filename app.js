require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const path = require('path')
const crud_route = require('./backend/api/router')
const connectDB = require('./backend/system/database/database')

app.use(express.json())
app.use(express.static(__dirname + '/frontend/public'))
app.set('views', path.join(__dirname, '/frontend/view'))
app.set('view engine', 'ejs')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/api/user', crud_route)

require('./frontend/controller/route')(app)
connectDB()

app.listen(process.env.APP_PORT, () => {
    console.log('Server is running with Mongodb on port: ', process.env.APP_PORT)
})