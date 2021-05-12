

//Callbacks

function irACasa (avisar){
    console.log('lendo a casa...')
    console.log('Llegamos a casa')
    avisar()
}

function llamarAMama (){
    console.log('Hola mama ya llegué a casa')
}

irACasa(llamarAMama)


// Factory functions

function a (b){
    console.log('a')
    return function (){
        console.log('b: ', b)
    }
}

a('hola')()


//Factory function ejemplo real de validaciones ( tenemos una funcion generadora de funciones)
function generadorDeValidadoresDeRoles (roles){
    return function(rol){
        if( roles.includes(rol)){
            console.log('permitido')

        } else{
            console.log('denegado')
        }
    }
}

const soloAdmin = generadorDeValidadoresDeRoles(['admin'])
const adminYuser = generadorDeValidadoresDeRoles(['admin','user'])

soloAdmin('admin')
soloAdmin('user')
console.log('---')
adminYuser('admin')
adminYuser('user')