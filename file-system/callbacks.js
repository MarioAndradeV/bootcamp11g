
const ejepmloMuro = {
    construido: false,
    aplanado: false,
    pintado: false
  }

  const tiempodeEspera = 1000

  function construir (muro, cb) {
    setTimeout(() => {
      muro.construido = true
      cb(false, muro)
    }, tiempodeEspera)
  }
  function aplanar (muro, cb) {
    setTimeout(() =>{
        muro.aplanado = true
        cb (false, muro)
    }, tiempodeEspera)
 }
  
  function pintar (muro, cb) {
    setTimeout(() =>{
        muro.pintado = true
        cb (false, muro)
    }, tiempodeEspera)
 }


//   construir(ejepmloMuro, (error, muroConstruido) => {
//     console.log('muroConstruido: ', muroConstruido)
//   })


//   construir(ejepmloMuro, (error, muroConstruido) => {
//     if(error){
//         console.error('No se pudo construir')
//         return //salida temprana
//     }
//     console.log('Muro Construido: ', muroConstruido)
//   })


//   aplanar(ejepmloMuro, (error, muroAplanado) => {
//       console.log('Muro Aplanado: ', muroAplanado)
//   })


construir(ejepmloMuro, (error, muroConstruido) => {
    if(error){
        console.error('No se pudo construir')
        return //salida temprana
    }
    console.log('Muro Construido: ', muroConstruido)
    aplanar(muroConstruido, (error, muroAplanado) => {
        if(error){
            console.error('No se pudo aplanar')
            return //salida temprana
        }
        console.log('Muro Aplanado: ', muroAplanado)
        pintar(muroAplanado, (error, muroPintado) => {
            if(error){
                console.error('No se pudo pintar')
                return //salida temprana
            }
            console.log('Muro pintado: ', muroPintado)
        })
    })
  })


  