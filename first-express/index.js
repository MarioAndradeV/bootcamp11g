const express = require('express')
const server = express()
//middleware
server.use(express.json())


server.get('/hola', (request, response) => {
  response.write('GET /Hola')
  response.end()
})

server.get('/koders', (request, response) => {
    // response.write('Aqui estan todos los koders')
    // response.end()
    response.status(401)
    response.json({message: "Aqui va la lista de koders"})
  })

server.post('/koders', (request, response) => {
    const cuerpo = request.body
    console.log('body: ', cuerpo.name)
    response.json({
        message: 'ok'
    })
    // response.write('Aqui puedes crear koders')
    // response.end()
})

server.put('/koders', (request, response) => {
    response.write('Aqui puedes sustituir un koder')
    response.end()
})

server.listen(8080, () => {
  console.log('Server listening in port 8080')
})