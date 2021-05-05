
const fs = require ('fs')

fs.writeFile('created.txt', 'Hola desde Node fs', 'utf8', (error) => {
    if(error){
        console.error('No se pudo crear el archivo', error)
        return //salida temprana
    }
    console.log('Se escribió el archivo')
})