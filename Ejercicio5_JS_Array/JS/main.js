// var kodersList = [
//     [
//         "Fernanda",
//         "Palacios Vera"
//     ],
//     [
//         "Jorge",
//         "Ochoa"
//     ],
//     [
//         "Naomi",
//         "Puertos"
//     ],
//     [
//         "Rurick",
//         "Maqueo Poissot"
//     ]
// ]
// /*
//     -crear un nuevo array que contenga los nombres completos de todos los koders de kodersList
// */

// const createNewArray = () => {
//     let newArray = []
//     for( i = 0; i < kodersList.length; i++){
//       newArray.push( kodersList[i].join(" "))
//     }
//     return newArray
//   }
  
//   var joinedNames = createNewArray()
  
//   console.log( joinedNames )
  
//   /*
//     Ingresar un nombre
//     validar si existe algún koder cuyo primer nombre coincida con el nombre escrito
//   */

//     var Name = prompt("Ingresa el nombre ")

//     const checkName = name => {
//         for (i = 0; i<joinedNames.length; i++){
//             let firstName = joinedNames[i].split(" ")[0]
//             console.log(firstName)

//         }
//         var n = kodersList.includes(Name)
//         console.log(n)
//     }

//     checkName()

    

var productsList = [
    {
        name:"producto 1",
        price:12.45,
        category:"Miscellaneous"
    },
    {
        name:"producto 2",
        price:25.13,
        category:"Vegetables"
    },
    {
        name:"producto 3",
        price:45.00,
        category:"Cloths"
    },
    {
        name:"producto 4",
        price:12500.00,
        category:"Computers"
    },
    {
        name:"producto 5",
        price:15500.00,
        category:"Computers"
    },
    {
        name:"producto 6",
        price:8729.00,
        category:"Computers"
    },{
        name:"producto 7",
        price:150.00,
        category:"Cloths"
    },{
        name:"producto 8",
        price:100.00,
        category:"Miscellaneous"
    },{
        name:"producto 9",
        price:50.00,
        category:"Vegetables"
    },{
        name:"producto 10",
        price:200.00,
        category:"Cloths"
    }
]


/*
    -quiero conocer la cantidad de productos en el array
    -quiero conocer el costo total de todos los productos del array
    -quiero conocer la cantidad de productos de cada categoría
        (Vegetables, Cloths, Miscellaneous, Computers)
    -quiero un nuevo array para cada categoría
    -quiero un nuevo array de strings que tenga lo siguiente
        [
            "El { productName } tiene un costo de { price }"
        ]
*/

// for( i=0; i<productsList.length; i++){
//     var numProducts = numProducts+1


// }



var totalPrice = 0
var numVeg = 0
var numCloths = 0
var numMisce = 0
var numComp = 0
var newVegArray = []
var newClothsArray = []
var newMisceArray = []
var newCompArray = []
var stringArray = []



// function ejercicio(params) {
    
// }



for( i=0; i<productsList.length; i++){
    let item = productsList[i]
    let itemPrice = item.price
    let categoryTotal = item.category
    let nameId = item.name
    let totalItemPrice = item
    totalPrice += itemPrice
    
    
    stringArray.push(`El ${nameId} tiene un costo de ${itemPrice}`)



    if(categoryTotal == "Vegetables"){
        numVeg += 1
        newVegArray.push (totalItemPrice)
    }
    if(categoryTotal == "Cloths"){
        numCloths += 1
        newClothsArray.push (totalItemPrice)
    }
    if(categoryTotal == "Miscellaneous"){
        numMisce += 1
        newMisceArray.push (totalItemPrice)
    }
    if(categoryTotal == "Computers"){
        numComp += 1
        newCompArray.push (totalItemPrice)
    }

}

    
    console.log(`El total de productos en la lista es ${productsList.length}`)
    console.log(`El costo total de todos los productos es: $${totalPrice}`)
    console.log(` El total de productos de la categoría Vegetales es ${numVeg}` )
    console.log(` El total de productos de la categoría Cloths es ${numCloths}`)
    console.log(` El total de productos de la categoría Miscellaneous  es ${numMisce}`)
    console.log(` El total de productos de la categoría Computers  es ${numComp}`)
    console.log(newVegArray)
    console.log(newClothsArray)
    console.log(newMisceArray)
    console.log(newCompArray)
    console.log(stringArray)
    

    




