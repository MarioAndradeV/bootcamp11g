const fs = require('fs');

async function appendT (){
    const data = await fs.promises.appendFile('nuevo.txt','  Texto del append', 'utf8')
}

appendT()
    .then(() => console.log('Todo cool'))
    .catch(error => console.log('error: ', error ))