const fs = require('fs');

async function mkdir (){
    const data = await fs.promises.mkdir('NuevaCarpeta')
}

mkdir()
    .then(() => console.log('Se creo la carpeta con exito'))
    .catch(error => console.log('error: ', error ))