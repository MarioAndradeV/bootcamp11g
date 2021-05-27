
// En este archivo se aloja la definicion de nuestro servidor

const express = require('express')
const cors = require('cors')

const kodersRouter = require('./routers/koders')
const mentorsRouter = require('./routers/mentors')
const usersRouter = require('./routers/users')
const logged = require('./middlewares/logged')

const app = express()
app.use(cors())


app.use(express.json())
app.use(logged)

app.use('/koders', kodersRouter)
app.use('/mentors', mentorsRouter)
app.use('/users', usersRouter)

module.exports = app 