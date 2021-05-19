
const express = require('express')
const mongoose = require('mongoose');
const Koder = require('./koderModel')

const server = express()

//middleware
server.use(express.json())

//DataBase
const DB_USER = 'MarioAndrade'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia-once.j3kgd.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`



server.get('/koders', async (request, response) => {
    const gender = request.query.gender
    const allKoders = await Koder.find({gender})

    response.json({
        message: 'all koders',
        success: true,
        data: {
            koders: allKoders
        }
    })
})

server.post('/koders', async (request, response) =>{
    const postKoder = request.body
    if(!postKoder.name || !postKoder.lastName || !postKoder.age || !postKoder.gender){
        return response.json({
            success: false,
            message: 'mentor not post :c'
        })
    }
    await Koder.create(postKoder)
     response.json({
        success: true,
        message: 'mentor post :D ',
        data: {
            newKoder: postKoder
        }
    })
})

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        server.listen(8080, () => {
            console.log('Server is listening')
        
        })

    })
    .catch ((error) => {
        console.error( 'error', error);

    })