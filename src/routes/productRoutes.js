const express = require('express')
const router = express.Router()

const productController = require('../controller/productController')

router.get('/', productController.getAllProducts)
router.get('/:id', productController.getProductById)
router.get('/pesquisar/:nome', productController.getProductByName)
router.post('/', productController.createProduct)
router.patch('/:id', productController.updateProducts)
router.delete('/:id', productController.deletarProduct)

module.exports = router