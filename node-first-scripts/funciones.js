// Pasar  por valor o por referencia


// Declaración de una función 
function hola (nombre){
    return `Hola ${nombre}, saludos`
}

//Uso o llamada de una funcion
const x = hola('Mario')
console.log('x: ', x)


const otraFuncion = hola
const res = otraFuncion('Otro')

console.log('res: ', res)

// (){
//     console.log('Hola desde funcion anonima')
// }()

