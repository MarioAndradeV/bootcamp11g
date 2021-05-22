
const mongoose = require ('mongoose')

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    lastName: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    age: {
        type: Number,
        min: [18, "Muy joven :c"],
        max: 150,
        required: true
    },
    gender: {
        type: String,
        enum:[ 'm', 'f'],
        required: true
    },
    modulo:{
        type: String,
        enum:[ 'Front', 'front', 'Back', 'back', 'Cloud', 'cloud', 'React', 'react'],
        required: true
    }

})

const model = mongoose.model('mentors', mentorSchema)
module.exports = model