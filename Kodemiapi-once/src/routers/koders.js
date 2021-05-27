
const express = require('express')
const koders = require('../usecases/koders')

//middleware de auth

const authMiddlewares = require('../middlewares/auth')

const router = express.Router()

//router.use(auth)

router.get('/', authMiddlewares.auth, async (request, response) =>{
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

router.post('/', authMiddlewares.authRoles(['admin']), async (request, response) =>{
    try{
        const koder = request.body
        await koders.postKoder(koder)
        // Linea de charles
        // const koderCreated = koders.create(request.body)
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

router.patch('/:id', async (request, response) => {	
	try{
		const { id } = request.params
        const koderUpdated = await koders.updateById(id, request.body)
		response.json({
			success : true,
			message : "Koder updated :D ",
            data: {
                koder: koderUpdated
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