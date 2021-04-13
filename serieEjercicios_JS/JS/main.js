
function getInitials (name){
    const nameSplitted = name.split(" ")
    let initials = ""
    nameSplitted.forEach((word) => {
       initials += word.charAt(0) + '.'
    }) 
    console.log(name)
    console.log(initials)
    
}
getInitials("Mariana Lizzeth Limon Granados")
getInitials("Mario Andrade Velázquez")


function vocales (...String){
    console.log(String)
    const object ={}
    String.forEach((str) =>{
        const quantity = str.match(/[aeiou]/gi).length
        object[str] = quantity
    })
    return object
}
 console.log(vocales("Hola", "Adios", "Mario", "Abecedario"))   



// const arrayNames = [
//     ["Ruben", "Flores"],
//     ["Andre", "Vazquez"],
//     ["Fernanda", "Palacios"],
//     ["Goerge", "Camarillo"],
//     ["Ale", "Paez"],
//     ["Shari", "Andrade"],
//     ["Erick", "Trujillo"],
//     ["Arce", "Gutiérrez"],
//     ["Juan", "Hernandez"]
// ]