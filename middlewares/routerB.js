
const express = require('express')

const router = express.Router()

router.use((request, response, next) =>{
    console.log('Middleware de router b')
    next()

})

router.get('/', (request, response) =>{
    response.json({
        message: 'router b'
    })
})

module.exports = router