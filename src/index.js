//FIRST! require dotenv: Environment variables are loaded to the OS and they will be ready to use
require('dotenv').config()

const express = require('express')
const path = require('path')
const morgan = require('morgan')

const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// Routes
app.use(require('./routes/index'))

//Static 
app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000)
console.log('Server listening...')