
const express = require('express')
const mentors = require('../usecases/mentors')

const router = express.Router()

router.get('/', async (request, response) =>{
    try{
        const allMentors = await mentors.getAll()
        response.json({
            success: true,
            message: 'All Mentors',
            data: {
                mentors: allMentors
            }
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all Mentors',
            error: error.message
        })
    }
})

router.post('/', async (request, response) =>{
    try{
        const mentor = request.body
        await mentors.postMentor(mentor)
        response.json({
            success: true,
            message: 'Mentor created :D'
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: error.message
        })
        
    }
})

router.delete('/:id', async (request, response) => {	
	try{
		const idMentor = request.params.id
		await mentors.deleteMentor(idMentor)
		response.json({
			success : true,
			message : "Mentor deleted :D "
		})
	}
	catch(error){
		response.status(400)
		response.json({
			succes : false,
			message : error.message
		})
	}
})

router.patch('/:id', async (request, response) => {	
	try{
		const { id } = request.params
        const mentorUpdated = await mentors.updateById(id, request.body)
		response.json({
			success : true,
			message : "Mentor updated :D ",
            data: {
                mentor: mentorUpdated
            }
		})
	}
	catch(error){
		response.status(400)
		response.json({
			succes : false,
			message : error.message
		})
	}
})

module.exports = router