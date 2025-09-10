const clientModel = require('../model/clientModel')

const getAllClients = (req, res) => {
    const clients = clientModel.findAll()
    res.status(200).json(clients)
}

const getClientById = (req, res) => {
    const id = parseInt(req.params.id)

    const client = clientModel.findById(id)

    if(client){
        res.status(200).json(client)
    } else {
        res.status(404).json({mensagem: "Cliente não encontrado no Banco de Dados!"})
    }
}

const getClientByName = (req, res) => {
    const nome = req.params.nome;

    const client = clientModel.findByName(nome)
    if(client){
        res.status(200).json(client)
    } else {
        res.status(404).json({mensagem: "Cliente não encontrado!"})
    }
}

const createClient = (req, res) => {
    const {nome, email, telefone, endereco, ativo} = req.body

    if(!nome || !email || !telefone || !endereco || !ativo){
        return res.status(400).json({alerta: "Todos os campos devem ser preenchidos!"})
    } else {
        const newClient = clientModel.create({nome, email, telefone, endereco, ativo})
        return res.status(201).json(newClient)
    }
}

const updateClients = (req, res) => {
    const {nome, email, telefone, endereco, ativo} = req.body
    let id = parseInt(req.params.id)

    clientModel.update(id, {nome, email, telefone, endereco, ativo})
    res.status(200).json(id)
}

const deleteClients = (req, res) => {
    let id = parseInt(req.params.id)

    if(id) {
        clientModel.deleted(id)
        res.status(200).json(id)
    } else {
        res.status(404).json({mensagem: "Cliente não encontrado!"})
    }
}

module.exports = {
    getAllClients,
    getClientById,
    getClientByName,
    createClient,
    updateClients,
    deleteClients
}