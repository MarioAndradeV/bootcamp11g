//Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:
//Obtener la edad a partir de la fecha de nacimiento
//Obtener promedio de sus scores
//Colección de Koder que pertenezcan a JavaScript
//Colección de Koder que pertenezcan a Python

const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]


function koder ( name,lastName,birthday, generation, bootcamp /*scores=[module1, score,module2, score2,module3, score3 ]*/){
    this.name =name;
    this.lastName =lastName;
    this.birthday =birthday;
    this.generation =generation;
    this.bootcamp =bootcamp;
    //this.scores =scores;

}
var birthday = new Date()

const koderJavi = new koder('Javier','López','1996/06/24','9','JavaScript')
const koderAle = new koder('Ale','Paez','1998/05/12','1','Python')
const koderJuan = new koder('Juan Pablo','Sánchez','1994/10/26','10','JavaScript')
const koderOscar = new koder('Oscar','Ruiz','1996/06/24','1','Python')
const koderJavier = new koder('Javier','López','1996/06/24','9','JavaScript')


console.log(koderJavi)
console.log(koderAle)
console.log(koderJuan)
console.log(koderOscar)
console.log(koderJavier)


const averageKoder = (koderName) =>{
    let koder1 = kodersCollection.find(koder => koder.scores === koderName)
    let promedio = koder1/koder.length
    console.log(promedio)
}   

let koderJS = newa

averageKoder("Oscar")




