
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
    const age = request.query.age
    const isMinAge = new Boolean(request.query.is_min_age) 

    const filters = {}

    if (gender) filters.gender = gender

    if (age) {
        if(isMinAge.valueOf()){
            filters.age = { $gte: age }
        } else {
            filters.age = age
        }
    }
        
    const allKoders = await Koder.find(filters)
    response.json({
        message: 'all koders',
        success: true,
        data: {
            koders: allKoders
        }
    })
})

server.post('/koders', async (request, response) =>{
    //Deconstruccion
   
    // if(!name || !lastName || !age || !gender){
    //     response.status(400)
    //     response.json({
    //         success: false,
    //         message: 'mentor not post :c'
    //     })
    //     return
    // }

    // Vamos a usar try catch para manejar errores
    try{
        const { name, lastName, age, gender} = request.body
        await Koder.create({ name, lastName, age, gender})

        response.json({
            success: true,
            message: 'Koder created :D'
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
        
    }

  




    // const postKoder = request.body
    // if(!postKoder.name || !postKoder.lastName || !postKoder.age || !postKoder.gender){
    //     return response.json({
    //         success: false,
    //         message: 'mentor not post :c'
    //     })
    // }
    // await Koder.create(postKoder)
    //  response.json({
    //     success: true,
    //     message: 'mentor post :D ',
    //     data: {
    //         newKoder: postKoder
    //     }
    // })
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