const fs = require('fs');

async function unlink (){
    const data = await fs.promises.unlink('created.txt')
}

unlink()
    .then(() => console.log('Se borró con exito'))
    .catch(error => console.log('error: ', error ))

      