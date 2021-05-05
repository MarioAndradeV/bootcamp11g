const fs = require ('fs')

fs.readFile('created.txt', 'utf8', (error, data) => {
    if(error){
        console.error('No se pudo leer el archivo', error)
        return //salida temprana
    }
    console.log('El contenido del archivo es: '+ data)
})