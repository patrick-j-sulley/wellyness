const express = require('express')
const hbs = require('express-handlebars')

const routes = require('./routes')

const server = express()

//Middleware
server.engine('hbs', hbs({
    extname: 'hbs'
}))
server.set