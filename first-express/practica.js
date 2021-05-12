
const express = require('express')
const fs = require('fs');
const server = express()
//middleware
server.use(express.json())

server.get('/koders', (request, response) => {
    async function readDoc (){
        const readKoders = await fs.promises.readFile('koders.json', 'utf8')
        console.log(readKoders)
        response.status(401)
        response.json(JSON.parse(readKoders) )
        
    }
    
    readDoc()
        .then(() => console.log('Se obtuvo el Json'))
        .catch(error => console.log('error: ', error ))

    
  })



  server.listen(8080, () => {
    console.log('Server listening in port 8080')
  })