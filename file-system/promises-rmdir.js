const fs = require('fs');

async function rmdir (){
    const data = await fs.promises.rmdir('CarpetaPrueba', {recursive:true} )
}

rmdir()
    .then(() => console.log('Se pudo borrar con exito'))
    .catch(error => console.log('error: ', error ))


