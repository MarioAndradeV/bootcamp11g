
const mongoose = require('mongoose');

const DB_USER = 'MarioAndrade'
const DB_PASSWORD = 'kodemia123'
const DB_HOST = 'kodemia-once.j3kgd.mongodb.net'
const DB_NAME = 'kodemia'

const url = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`

// schema
const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    age: {
        type: Number,
        min: 0,
        max: 150,
        required: true
    },
    gender: {
        type: String,
        enum:[ 'm', 'f'],
        required: true
    },

})

const Koder = mongoose.model('koders', koderSchema)

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})

    .then((conn) =>{
        console.log('DB Connected :D : ', conn)
        // Para consultar 

        // Koder.find({
        //     gender: 'f'
        // })
        //     .then((kodersFound) => {
        //         console.log('kodersFound: ', kodersFound)
        //     })
        //     .catch( error => {
        //         console.error('error: ', error);
        //     })

        // Para crear
        Koder.create({
            name: 'Mario',
            lastName: 'Andrade',
            age: 21,
            gender: 'm'
        })
            .then((koderCreated) =>{
                console.log('koderCreated: ', koderCreated)
            })
            .catch((error) =>{
                console.error('error: ', error)
            })

    })
    .catch((error) => {
        console.error('error: ', error)
    } )


