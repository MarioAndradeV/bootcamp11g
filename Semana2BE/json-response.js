const http = require ('http')

const server = http.createServer(( request, response) => {
    //response.setHeader('Content-Type', 'application/json')

    response.writeHead(200, { 'Content-Type': 'application/json'})


    const jsonResponse = { message: 'Hola mundo'}
    const jsonString = JSON.stringify(jsonResponse)

    response.write(jsonString)
    response.end()
})

server.listen(8080, () =>{
    console.log('El server esta listo')
})