let clients = [
    {id: 1, nome: "Nicolas Durinho", email: "durinho@gmail.com", telefone: "(11) 98765-4321", endereco: "Ambuitá", dataCadastro: new Date(), ativo: true},
    {id: 2, nome: "Nikolas Negot", email: "negot@gmail.com", telefone: "(11) 56789-1234", endereco: "Pindamonhangaba", dataCadastro: new Date(), ativo: true},
    {id: 3, nome: "Weslei Viadinho", email: "weslei@gmail.com", telefone: "(11) 40002-8922", endereco: "Suburbano", dataCadastro: new Date(), ativo: true},
    {id: 4, nome: "Pedrinho", email: "pedroautista@gmail.com", telefone: "(11) 09586-2368", endereco: "Engneheiro Cardoso", dataCadastro: new Date(), ativo: true},
]

const findAll = () => {
    return clients
}

const findById = (id) => {
    return clients.find(clients => clients.id === id)
}

const findByName = (nome) => {
    return clients.find(clients => clients.nome === nome)
}

const create = (newClient) => {
    const newId = clients.length > 0 ? clients[clients.length - 1].id + 1 : 1
    const dataCadastro = new Date();
    const clientWithId = {id: newId, dataCadastro, ...newClient}
    clients.push(clientWithId)
    return clientWithId
}

const update = (id, clientsAlter) => {
    for (let i = 0; i < clients.length; i++){
        if(clients[i].id === id){
            clients[i].nome = clientsAlter.nome
            clients[i].email = clientsAlter.email
            clients[i].telefone = clientsAlter.telefone
            clients[i].endereco = clientsAlter.endereco
            clients[i].ativo = clientsAlter.ativo
        }
    }
}

const deleted = (id) => {
    for (let i = 0; i < clients.length; i++) {
        if(clients[i].id === id){
            clients.splice(i, 1)
        }
    }
} 

module.exports = {
    findAll,
    findById,
    findByName,
    create,
    update,
    deleted
}