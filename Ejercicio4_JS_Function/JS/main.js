//-----Ejercicio Clase------//

// var numKoders = prompt("Escribe el número de Koders a registrar ")
// var koder
// var koder2 

// function nombre (){
//     koder = prompt("Ingresa tu nombre ")
    

// }

// function apellido (){
//     koder2 = prompt("Ingresa tu apellido")
    

// }

// for( i= 0; i<numKoders; i++){
//     nombre(koder)
//     apellido(koder2)

//     console.log(koder,koder2)
// }


//-----Práctica------//

var numKoders 
var Name 
var lastName
var Koders = []
var agregar
var aleatorio
 



function Registro (num){
    for ( i= 0; i<num; i++){
        Name = prompt("Ingresa el nombre ")
        lastName = prompt("Ingresa el Apellido ")
        Name += " "
        Name += lastName
        Koders.push(Name);
        
    }
    console.log(Koders)

}


do{
    agregar = prompt("Si Desea agregar Koders escribir 1, \nSi desea borrar un Koder al azar escribir 2, \nSi desea cerrar escribir 3")

    if ( agregar == "1"){
        numKoders = prompt("Escribe el número de Koders a registrar ")
        Registro (numKoders)
    

    }
    else if (agregar == "2"){
        aleatorio = Math.floor((Math.random()* ( parseInt(numKoders) -0)));
        console.log("El número de index borrado es " + aleatorio)

        Koders.splice(aleatorio , 1)
        console.log(Koders)
    
    }

}while(agregar == "1" || agregar == "2" )







