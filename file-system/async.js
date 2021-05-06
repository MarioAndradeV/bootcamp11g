const fs = require('fs');


// fs.promises.writeFile('created.txt', 'Pruebaa')
//     .then(() =>{
//         console.log('Todo cool')
//     })
//     .catch( error => console.error('error', error ))

async function newDoc (){
    await fs.promises.writeFile('nuevo.txt', 'hola xD')
    await fs.promises.appendFile('nuevo.txt', '     AGREGANDO... xD')
}

newDoc()
    .then(() => console.log('Creando y modificando'))
    .catch(error => console.log('error: ', error ))

    // readFile
// appendFile
// unlink
// copyFile
// mkdir
// rmdir <- funciona solo con carpetas vacias
// readdir