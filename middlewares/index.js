
const express = require('express')
const router = require('./routerB')
const routerB = require('./routerB')

const server = express()


// function middleware (request, response, next){
//     console.log('middleware externo')
//     next()
// }

// function factoryMiddleware () {
//     return function (request, response, next){
//         console.log('middleware factory');
//         next()
//     }
// }

// server.use(middleware)
// // server.use(factoryMiddleware())

server.use((request, response, next) =>{
    console.log('Middleware a nivel de aplicacion ')
    next()
})


server.use('/b', routerB)

server.get( '/', (request, response, next) =>{
    console.log('Middleware a nivel de ruta')
    next()
}, (request, response) =>{
    response.json({ message: 'API Midlleware'})
})

server.get('/a', (request, response) =>{
    response.json({ message: 'Ruta a' })
})

router.get('/hola', (request, response, next) =>{
    console.log('Middleware router b ruta hola')
    next()
}, (request, response) => {
    response.json({ message: ' router b hola' })

})
    


server.listen(8080, () =>{
    console.log('Server Listening')
})

//MIdlleware 3 niveles
// -Nivel de aplicacion o servidor
// -Nivel de router
// -Nivel de ruta