
const fs = require('fs');

async function readDoc (){
    const readF = await fs.promises.readFile('nuevo.txt', 'utf8')
    console.log(readF)
    
}

readDoc()
    .then(() => console.log('Todo cool'))
    .catch(error => console.log('error: ', error ))