
//endpoint -> caso de uso  -> modelo

const Mentors = require('../models/mentors')

function getAll() {
    return Mentors.find()
}

 function postMentor(Mentor){
    return Mentors.create(Mentor)
}

function deleteMentor(idMentor){
    return Mentors.findByIdAndDelete(idMentor)
}

function updateById (id, dataToUpdate){
    return Mentors.findByIdAndUpdate(id, dataToUpdate)
}

module.exports = {
    getAll,
    postMentor,
    deleteMentor, 
    updateById
}