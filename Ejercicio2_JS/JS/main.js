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

//alert ("El area del triángulo es: "+ area)
