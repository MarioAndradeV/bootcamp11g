// Las promesas son objetos 

// Constructor

//Resolve = funcion 
// Pasa  la promesa de pendiente a resuelto

// reject = funcion 
// Pasa la promesa  de pendiente a rechazado 


const promesa = new Promise((resolve, reject) => {
    const todoCool = true
    if(todoCool){
        resolve('ok')
    }else{
        reject('not ok :( ')
    }

})


promesa
    .then((resultado) => { console.log(resultado)})
    .catch((error) => { console.error(error)})