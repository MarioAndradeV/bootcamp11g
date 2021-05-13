
const { request, response } = require('express');
const express = require('express')
const fs = require('fs');
const server = express()
//middleware
server.use(express.json())

// server.get('/koders', (request, response) => {
//     async function readDoc (){
//         const readKoders = await fs.promises.readFile('koders.json', 'utf8')
//         console.log(readKoders)
//         response.status(401)
//         response.json(JSON.parse(readKoders) )
        
//     }
    
//     readDoc()
//         .then(() => console.log('Se obtuvo el Json'))
//         .catch(error => console.log('error: ', error ))

    
//   })



  



  //Forma de Charles

  server.get('/koders', (request, response) => {
    const json = fs.readFileSync('koders.json', 'utf8')
    console.log('json: ', json )
    const jsonParsed = JSON.parse(json)
    response.json(jsonParsed.koders)
        
    })


  server.post('/koders', (request, response) => {
    const name = request.body.name
    const gender = request.body.gender

    const newKoder = { name, gender }

    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)

    json.koders.push(newKoder)

    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')
    response.json({
      success: true
    })
      
  })

    // Recurso/identificador
  server.patch('/koders/:id', (request, response) =>{
    const id = parseInt(request.params.id) 
    const name = request.body.name

    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content) 

    const newKoders =  json.koders.reduce((koders, koderActual) =>{
      if ( id === koderActual.id){
        koderActual.name = name
      }
      return [...koders, koderActual]


    }, [])

    json.koders = newKoders
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
      success: true
    })

  })



  server.delete('/koders/:id', (request, response) =>{
    const id = parseInt(request.params.id) 
    
    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content) 

    const newKoders =  json.koders.reduce((koders, koderActual) =>{
      if ( id != koderActual.id){
        koders = [...koders, koderActual]
      }
      return [koders]
    }, [])
    json.koders = newKoders
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
      success: true
    })

  })


  server.get('/koders/:id', (request, response) =>{
    const id = parseInt(request.params.id) 
    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content) 

    const newKoders =  json.koders.reduce((koders, koderActual) =>{
      if ( id === koderActual.id){
        koders = [...koders, koderActual]
      }
      return koders


    }, [])
    response.json(newKoders)

    response.json({
      success: true
    })

  })

    server.listen(8080, () => {
      console.log('Server listening in port 8080')
    })