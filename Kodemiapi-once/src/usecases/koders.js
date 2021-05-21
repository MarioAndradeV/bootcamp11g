
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

module.exports = {
    //getAll: getAll
    getAll,
    postKoder,
    deleteKoder

}