const fs = require ('fs')

fs.appendFile('created.txt', ' .....Data to append', 'utf8', (error) => {
    if(error){
        console.error('No se pudo crear el archivo', error)
        return //salida temprana
    }
    console.log('Se realizó el append')
})