/*********************************************************************************************
 * Autor: Nicolas dos Santos Durão
 * Objetivo: Simular o desenvolvimento de um projeto real, onde a API de gerenciamento de produtos e clientes será o projeto final. O objetivo é que os alunos compreendam não apenas a codificação, mas também a arquitetura, as funcionalidades e a validação de um produto digital para atender a uma necessidade real.
 * Data: 03/09/2025
 * Versão: 1.0
 *********************************************************************************************/
const express = require('express')
const productRoutes = require('./src/routes/productRoutes')
const clientRoutes = require('./src/routes/clientRoutes')

const app = express()
app.use(express.json())
const porta = 8000

app.get('/', (req, res) => {
    res.send("API para Loja Virtual está funcionando!")
})

app.listen(porta, () => {
    console.log(`Servidor rodando em http://localhost:${porta}`)
})

app.use('/api/produtos', productRoutes);
app.use('/api/clientes', clientRoutes)