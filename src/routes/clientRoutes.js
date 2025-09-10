const express = require('express')
const router = express.Router()

const clientController = require('../controller/clientController')

router.get('/', clientController.getAllClients)
router.get('/:id', clientController.getClientById)
router.get('/nome/:nome', clientController.getClientByName)
router.post('/', clientController.createClient)
router.patch('/:id', clientController.updateClients)
router.delete('/:id', clientController.deleteClients)

module.exports = router