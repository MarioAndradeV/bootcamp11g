const fs = require ('fs')

fs.unlink('created.txt', (error) => {
    if(error){
        console.error('No se pudo borrar el archivo', error)
        return //salida temprana
    }
    console.log('Se realizó el unlink del archivo sobre la carpeta')
})