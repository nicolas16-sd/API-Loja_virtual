const productModel = require('../model/productModel')

const getAllProducts = (req, res) => {
    const product = productModel.findAll()
    res.status(200).json(product)
}

const getProductById = (req, res) => {
    const id = parseInt(req.params.id)

    const product = productModel.findById(id)

    if(product){
        res.status(200).json(product)
    } else {
        res.status(404).json({mensagem: "Produto não encontrado no Banco de Dados!"})
    }
}

const getProductByName = (req, res) => {
    
    const nome = req.params.nome;

    const product = productModel.findByName(nome)
    if(product){
        res.status(200).json(product)
    } else {
       
        res.status(404).json({mensagem: "Produto nãoooo encontrado no banco de dados!"})
    }
}

const createProduct = (req, res) => {
    const {nome, descricao, preco, categoria, estoque, ativo} = req.body

    if(!nome || !descricao || preco === null || !categoria || estoque === null || ativo === null) {
        return res.status(400).json({alerta: "Todos os campos devem ser preenchidos!"})
    } else {
        const newProduct = productModel.create({nome, descricao, preco, categoria, estoque, ativo})
        res.status(201).json(newProduct)
    }
}

const updateProducts = (req, res) => {
    const {nome, descricao, preco, categoria, estoque, ativo} = req.body
    let id = parseInt(req.params.id);

    productModel.update(id, {nome, descricao, preco, categoria, estoque, ativo});
    res.status(200).json(id);
}

module.exports = {
    getAllProducts,
    getProductById,
    getProductByName,
    createProduct,
    updateProducts
}