// Ejercicio 1 //

// let weight = parseInt(prompt("Ingresa tu peso en Kilogramos"));
// let height = parseFloat(prompt("Ingresa tu altura en metros"));
// let bodyComposition;
// let IMC = weight / (Math.pow(height, 2));
// IMC = IMC.toFixed(1);
// if(IMC < 18.5){
//     bodyComposition = "Peso inferior al normal, IMC menos a 18.5"
// } else if(IMC >= 18.5 && IMC <= 24.9){
//     bodyComposition = "Normal, IMC 18.5 - 24.9"
// } else if(IMC >= 25.0 && IMC <= 29.9){
//     bodyComposition = "Peso superior al normal, IMC 25.0 - 29.9"
// } else if(IMC >= 30.0){
//     bodyComposition = "Obesidad, IMC mayor a 30.0"
// }
// console.log(`Tu IMC es de ${IMC} - ${bodyComposition}`);



//Ejercicio 2 //
let nationality = prompt("Introduce el nombre de tu país de Origen");
let gender = prompt("Introduce tu género");
let height = parseFloat(prompt("Introduce tu altura en centímetros"));
let heightAverage;
switch (nationality){
    case 'México':
        heightAverage = gender === "masculino" ?  170 : 160.8;
        if(height < heightAverage){
            console.log("Tu altura es menor al promedio");
        } else if(height > heightAverage){
            console.log("Tu altura es mayor al promedio");
        } else{
            console.log("Tu altura es promedio");
        }
        break;
    case 'Australia':
        heightAverage = gender === "masculino" ?  179.2 : 165.9;
        if(height < heightAverage){
            console.log("Tu altura es menor al promedio");
        } else if(height > heightAverage){
            console.log("Tu altura es mayor al promedio");
        } else{
            console.log("Tu altura es promedio");
        }
        break;
    case 'Canadá':
        heightAverage = gender === "masculino" ?  178.1 : 163.9;
        if(height < heightAverage){
            console.log("Tu altura es menor al promedio");
        } else if(height > heightAverage){
            console.log("Tu altura es mayor al promedio");
        } else{
            console.log("Tu altura es promedio");
        }
        break;
    case 'Brasil':
        heightAverage = gender === "masculino" ?  173.6 : 160.9;
        if(height < heightAverage){
            console.log("Tu altura es menor al promedio");
        } else if(height > heightAverage){
            console.log("Tu altura es mayor al promedio");
        } else{
            console.log("Tu altura es promedio");
        }
        break;
    case 'Reino Unido':
        heightAverage = gender === "masculino" ?  177.5 : 164.4;
        if(height < heightAverage){
            console.log("Tu altura es menor al promedio");
        } else if(height > heightAverage){
            console.log("Tu altura es mayor al promedio");
        } else{
            console.log("Tu altura es promedio");
        }
        break;
    default:
        console.log("El país ingresado no se encuentra en nuestra base de datos");
        break;
}






//Ejercicio 3 //

var lado = prompt("Ingresa el lado del cubo en metros")
var material = prompt("Ingresa el material del cubo:\n Acero \n Cobre \n Oro \n Plata \n Diamante ")


var vol
var masa
var peso
var densidadAcero = 7850.00
var densidadCobre = 8940.00
var densidadOro = 19300.00
var densidadPlata = 10490.00
var densidadDiamante = 3515.00



switch(material){
    case "Acero":
    case "acero":
        vol= lado ** 3; 
        masa= densidadAcero*vol;
        peso = masa*9.81;
        alert ("La masa del cubo de " + material+" y de lado "+lado+ " m es de: " + masa+ " Kg"+ "\n El peso del cubo es: "+ peso.toFixed(2) + " N")
        break;
        
    case "Cobre":
    case "cobre":
        vol= lado ** 3; 
        masa= densidadCobre*vol;
        peso = masa*9.81;
        alert ("La masa del cubo de " + material+" y de lado "+lado+ " m es de: " + masa+ " Kg"+ "\n El peso del cubo es: "+ peso.toFixed(2) + " N")
        break;
        
    case "Oro":
    case "oro":
        vol= lado ** 3; 
        masa= densidadOro*vol;
        peso = masa*9.81;
        alert ("La masa del cubo de " + material+" y de lado "+lado+ " m es de: " + masa+ " Kg"+ "\n El peso del cubo es: "+ peso.toFixed(2) + " N")
        break;
        
    case "Plata":
    case "plata":
        vol= lado ** 3; 
        masa= densidadPlata*vol;
        peso = masa*9.81;
        alert ("La masa del cubo de " + material+" y de lado "+lado+ " m es de: " + masa+ " Kg"+ "\n El peso del cubo es: "+ peso.toFixed(2) + " N")
        break;
        
    case "Diamante":
    case "diamante":
        vol= lado ** 3; 
        masa= densidadDiamante*vol;
        peso = masa*9.81;
        alert ("La masa del cubo de " + material+" y de lado "+lado+ " m es de: " + masa+ " Kg"+ "\n El peso del cubo es: "+ peso.toFixed(2) + " N")
        break; 
        
    default:
        alert ("No hay datos de la densidad de ese material")    
}


