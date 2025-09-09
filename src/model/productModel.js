//Listagem de produtos
let product = [
    {id: 1, nome: "Tijolo", descricao: "Tijolo baiano de 6 furos", preco: 1.50, categoria: "Construção", estoque: 5049, ativo: true},
    {id: 2, nome: "Cimento", descricao: "Cimento votorantim de 50kg", preco: 31.90, categoria: "Construção", estoque: 438, ativo: true},
    {id: 3, nome: "Cerâmica", descricao: "Portinari 50x50", preco: 62.49, categoria: "Revestimento", estoque: 275, ativo: true},
    {id: 4, nome: "Tinta", descricao: "Lata de tinta acrílica Coral de 18L, Cinza médio", preco: 369.90, categoria: "pintura", estoque: 0, ativo: false}
]

//Função para buscar todos os produtos
const findAll = () => {
    return product
}

//Buscando produtos por Id
const findById = (id) => {
    return product.find(product => product.id === id)
}

//Buscando produtos por nome
const findByName = (nome) => {
    return product.find(product => product.nome === nome)
}

//Criando um novo produto
const create = (newProduct) => {
    const newId = product.length > 0 ? product[product.length - 1].id + 1 : 1
    const productWithId = {id: newId, ...newProduct}
    product.push(productWithId)
    return productWithId
}

//Atualizando um produto
const update = (id, productAlter) => {
    for (let i = 0; i < product.length; i++){
        if(product[i].id === id) {
            product[i].nome = productAlter.nome
            product[i].descricao = productAlter.descricao
            product[i].preco = productAlter.preco
            product[i].categoria = productAlter.categoria   
            product[i].estoque = productAlter.estoque   
            product[i].ativo = productAlter.ativo   
        }
    }
        
}



module.exports = {
    findAll,
    findById,
    findByName,
    create,
    update
}