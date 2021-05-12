
const http = require ('http')

const server = http.createServer(( request, response) => {
    console.log('url: ', request.url)
    console.log('method: ', request.method)

    if (request.url == '/koders' && request.method == 'GET'){
        response.write('Aqui estan todos los koders ')
    }
    else if (request.url == '/koders' && request.method == 'POST'){
        response.write('Aqui puedes crear koders ')

    }
    else{
        response.write('No estaba preparado para esto T.T ') 
    }

    //response.write('Hola desde un servidor en node ')
    response.end()
})

server.listen(8080, () =>{
    console.log('Servidor escuchando en el puerto 8080')
})

// /koders

//GET /koders -> Aqui estan todos los koders
//POST /koders -> Aqui puedes crear koders
// X /X -> No estaba preparado para esto

