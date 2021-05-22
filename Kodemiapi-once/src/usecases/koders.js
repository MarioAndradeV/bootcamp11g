
//endpoint -> caso de uso  -> modelo

const Koders = require('../models/koders')

function getAll() {
    return Koders.find()
}

 function postKoder(Koder){
    return Koders.create(Koder)
}

function deleteKoder(idKoder){
    return Koders.findByIdAndDelete(idKoder)
}

function updateById (id, dataToUpdate){
    return Koders.findByIdAndUpdate(id, dataToUpdate)
}
// funcion de charles para get
// function create ({ name, lastName, age, gender}){
//     return Koders.create({name, lastName, age, gender})
// }

module.exports = {
    //getAll: getAll
    getAll,
    postKoder,
    deleteKoder, 
    updateById

}