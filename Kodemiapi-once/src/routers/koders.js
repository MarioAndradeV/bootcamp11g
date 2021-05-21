
const express = require('express')
const koders = require('../usecases/koders')

const router = express.Router()

router.get('/', async (request, response) =>{
    try{
        const allKoders = await koders.getAll()

        response.json({
            success: true,
            message: 'All koders',
            data: {
                koders: allKoders

            }
        })
    } catch (error){
        response.status(400)
        response.json({
            success: false,
            message: 'Error at get all koders',
            error: error.message
        })
    }

})

router.post('/', async (request, response) =>{
    try{
        const koder = request.body
        await koders.postKoder(koder)
        // const { name, lastName, age, gender} = request.body
        // const postKoder = await koders.postKoder({ name, lastName, age, gender})
        response.json({
            success: true,
            message: 'Koder created :D'
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
		const idKoder = request.params.id
		await koders.deleteKoder(idKoder)
		response.json({
			success : true,
			message : "Koder deleted :D "
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