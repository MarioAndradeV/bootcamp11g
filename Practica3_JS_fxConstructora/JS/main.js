// let today = new Date();
// let fechacad = new Date(2021,4,2)

// month=today.getMonth()+1
// day = today.getDay

// caducidad = fechacad -today

// console.log(today)
// console.log(month)
// console.log(caducidad)


//let  less10 = product.filter( product => product.cantidadVendida < 10)
//let  less15_days = product.filter(product => product.FechaCaducidad < 15)

//console.log(less10)
//console.log(less15_days)

function product (name, description, cost, classification, gain, last6, totalSale, expirationDate){
    this.name = name;
    this.description = description;
    this.cost = cost;
    this.classification = classification;
    this.gain = gain;
    this.last6 = last6;
    this.totalSale = totalSale
    this.expirationDate = expirationDate;
    this.sellPrice = function (){
        return  this.cost * (this.gain+1) ;
    }
    this.daysBeforeExperation = function (){
        let today = new Date ();
        let caducidad = new Date (this.expirationDate)
        console.log(today)
        let año = caducidad.getFullYear() - today.getFullYear();
        let mes = caducidad.getMonth() - today.getMonth();
        let dia = caducidad.getDay() - today.getDay();
        console.log(caducidad.getMonth())
        console.log(`faltan ${año} años/ faltan ${mes} meses / faltan ${dia} dias, para expirar`)
        return año
    }
    this.averagePrice = function (){
        const avg = last6.reduce((accum, current) => accum + current)/last6.length
        return avg.toFixed(2)
    }
}
const newArrayProducts = [
    sandia = new product ( "sandía", "fruta", 10, "perecedero", .05, [10,10.5,11,10,10,11], 62, "2022,04,5" ),
    platano = new product ( "platano", "fruta", 10, "perecedero", .05, [10,10.5,11,10,10,11], 62, "2022,04,5" ),
    gerber = new product ( "gerber", "fruta", 10, "perecedero", .05, [10,10.5,11,10,10,11], 50, "2021,04,1" ),
    planta = new product ( "planta", "fruta", 10, "perecedero", .05, [10,10.5,11,10,10,11], 50, "2021,04,1" )
]
console.log( newArrayProducts)
let moreThan50 = newArrayProducts.filter (product => product.totalSale >50)
let  less10 = newArrayProducts.filter( product => product.totalSale < 10)
let  less15_days = newArrayProducts.filter(product => product.daysBeforeExperation < 15)
console.log(less10)
console.log(less15_days)

console.log(product(sandia))
