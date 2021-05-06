const fs = require('fs');

async function readdir (){
    const data = await fs.promises.readdir('NuevaCarpeta')
    console.log(data)
}

readdir()
    .then(() => console.log('Se pudo leer la carpeta con exito'))
    .catch(error => console.log('error: ', error ))