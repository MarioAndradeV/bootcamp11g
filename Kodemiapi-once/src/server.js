
// En este archivo se aloja la definicion de nuestro servidor

const express = require('express')
const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/mentors')
const logged = require('./middlewares/logged')

const app = express()


app.use(express.json())
app.use(logged)

app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)

module.exports = app 