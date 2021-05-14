
const express = require ('express')
const fs = require('fs');

const router  = express.Router()


function getKodersFile(){
    const content = fs.readFileSync('koders.json', 'utf8')
    return JSON.parse(content)  
  }

    //Forma de Charles
  
    router.get('/', async (request, response) => {
      const genderFilter = request.query.gender
      const countFilter = parseInt(request.query.count || 0)
      const nameFilter = request.query.name
      const jsonParsed = getKodersFile()
  
      let kodersData = null
  
      if (genderFilter){
        kodersData = jsonParsed.koders.filter(koder => koder.gender === genderFilter) 
      }
  
      if ( nameFilter){
        const dataToFilter = kodersData || jsonParsed.koders
        kodersData = dataToFilter.splice (0, countFilter)
      }
  
      if ( countFilter){
        const dataToFilter = kodersData || jsonParsed.koders
        kodersData = dataToFilter.splice (0, countFilter)
      }
  
      jsonParsed.koders = kodersData || jsonParsed.koders
      response.json(jsonParsed.koders)
      })
  
  
    router.post('/', (request, response) => {
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
    router.patch('/:id', (request, response) =>{
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
  
  
  
    // DELETE DE CHARLES
  
    router.delete('/:id', (request, response) =>{
      const id = request.params.id
      const content = fs.readFileSync('koders.json', 'utf8')
      const json = JSON.parse(content) 
      const newKoders = json.koders.filter(koder => koder.id != id)
      json.koders = newKoders
      fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')
  
      response.json({
        success: true
      })
    })
  
    // router.delete('/koders/:id', (request, response) =>{
    //   const id = parseInt(request.params.id) 
    //   const content = fs.readFileSync('koders.json', 'utf8')
    //   const json = JSON.parse(content) 
    //   const newKoders =  json.koders.reduce((koders, koderActual) =>{
    //     if ( id != koderActual.id){
    //       koders = [...koders, koderActual]
    //     }
    //     return [koders]
    //   }, [])
    //   json.koders = newKoders
    //   fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')
    //   response.json({
    //     success: true
    //   })
    // })
  
  
    // GET DE CHARLES
    router.get('/:id', (request, response) =>{
      const id = request.params.id
      const content = fs.readFileSync('koders.json', 'utf8')
      const json = JSON.parse(content) 
      const koderFound = json.koders.find((koder) => koder.id == id) 
  
      if (!koderFound){
        response.json({
          success: false,
          message: 'koder not found :c'
        })
      }
    
      response.json({
        success: true,
        message: 'koder found :D ',
        data: {
          koder: koderFound
        }
      })
    })
  
  
  
  
    // router.get('/koders/:id', (request, response) =>{
    //   const id = parseInt(request.params.id) 
    //   const content = fs.readFileSync('koders.json', 'utf8')
    //   const json = JSON.parse(content) 
    //   const newKoders =  json.koders.reduce((koders, koderActual) =>{
    //     if ( id === koderActual.id){
    //       koders = [...koders, koderActual]
    //     }
    //     return koders
    //   }, [])
    //   response.json(newKoders)
  
    //   response.json({
    //     success: true
    //   })
    // })
  
  module.exports = router