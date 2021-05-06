const fs = require('fs');

async function copy (){
    const data = await fs.promises.copyFile('created.txt', 'paste.txt')
}

copy()
    .then(() => console.log('Se copio con exito'))
    .catch(error => console.log('error: ', error ))

  
  
   