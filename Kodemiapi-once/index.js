
const server = require('./src/server')
const dbConnect = require('./src/lib/db')

dbConnect()
    .then(() =>{
        console.log('DB Connected');
        server.listen(8080, () => {
            console.log('Server is Listening');
        })
    })
    .catch(error => {
        console.error('DB Connection Error');
    })


    // GET  /koders
    // 1. Crear o que exista el Modelo necesario.
    // 2. Crear el caso de uso necesario.
    // 3. Crear el endpoint necesario.