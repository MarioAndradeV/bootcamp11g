
const express = require('express')
const fs = require('fs');
const router = express.Router()


function getMentorsFile() {
    const content = fs.readFileSync('koders.json', 'utf8')
    return JSON.parse(content)
}

router.get('/', async (request, response) => {
    const jsonParsed = getMentorsFile()

    console.log(jsonParsed.mentors)
    response.json(jsonParsed.mentors)
})


router.get('/:id', (request, response) => {
    const id = request.params.id
    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)
    const mentorsFound = json.mentors.find((mentors) => mentors.id == id)

    if (!mentorsFound) {
        response.json({
            success: false,
            message: 'mentors not found :c'
        })
    }

    response.json({
        success: true,
        message: 'mentors found :D ',
        data: {
            mentors: mentorsFound
        }
    })
})

router.post('/', (request, response) => {
    const name = request.body.name
    const module = request.body.module
    const newMentors = { name, module }
    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)
    json.mentors.push(newMentors)
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')
    response.json({
        success: true
    })

})

// Recurso/identificador
router.patch('/:id', (request, response) => {
    const id = parseInt(request.params.id)
    const name = request.body.name
    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)
    const newMentors = json.mentors.reduce((mentors, mentorsActual) => {
        if (id === mentorsActual.id) {
            mentorsActual.name = name
        }
        return [...mentors, mentorsActual]
    }, [])
    json.mentors = newMentors
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')
    response.json({
        success: true
    })
})


router.delete('/:id', (request, response) => {
    const id = request.params.id
    const content = fs.readFileSync('koders.json', 'utf8')
    const json = JSON.parse(content)
    const newMentors = json.mentors.filter(mentors => mentors.id != id)
    json.mentors = newMentors
    fs.writeFileSync('koders.json', JSON.stringify(json, null, 2), 'utf8')

    response.json({
        success: true
    })
})



module.exports = router