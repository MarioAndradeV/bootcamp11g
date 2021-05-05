const fs = require ('fs')

fs.copyFile('created.txt', 'paste.txt', (error) => {
    if(error){
        console.error('No se pudo copiar el archivo', error)
        return //salida temprana
    }
    console.log('Se copió el archivo')
})