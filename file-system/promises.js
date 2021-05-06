function construir (muro){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.construido = true

            if (muro.construido){
                resolve(muro)
            }else{
                const error  = new Error ('No se pudo construir ')
                reject(error)
            }
        }, 1000)
    })
}


function aplanar (muro){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.aplanado = true
            const error = muro.aplanado ? null : new Error ('No se pudo aplanar')

            if (error){
                reject(error)
                return
            }
            resolve(muro)
            
        }, 2000)
    })
}


function pintar (muro){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            muro.pintado = true
            const error = muro.pintado ? null : new Error ('No se pudo pintar')
            if (error) return reject(error)  
            resolve(muro)
        }, 1000)
    })
}



// construir({})
//     .then((muroConstruido) =>{
//         console.log('muro construido: ', muroConstruido)

//         aplanar(muroConstruido)
//             .then((muroAplanado) =>{
//                 console.log('muro aplanado: ', muroAplanado)
                
//                 pintar(muroAplanado)
//                 .then((muroPintado) =>{
//                     console.log('muro pintado: ', muroPintado) 
//                 })
//                 .catch((error) =>{
//                     console.error('error al pintar: ', error);
//                 })
//             })
//             .catch((error) =>{
//                 console.error('error al aplanar: ', error);
//             })
//     })
//     .catch((error) =>{
//         console.error('error al construir: ', error);
//     })



// Con async y await

async function principal (){
    const muroConstruido = await construir({})
    console.log('muro construido', muroConstruido)

    const muroAplanado = await aplanar (muroConstruido)
    console.log('muro aplanado', muroAplanado)

    const muroPintado = await pintar (muroAplanado)
    console.log('muro pintado', muroPintado)
}

principal()
    .then(() => console.log('Todo cool'))
    .catch((error) =>{
        console.log('algo salio mal: ', error)
    })