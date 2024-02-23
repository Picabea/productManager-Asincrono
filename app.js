const express = require('express')
const productManager = require('./ProductManager.js')

const app = express()

app.get('/products', (req, res) => {
    let limit = req.query.limit
    let products = productManager.getProducts()
    if(products){
        if(limit){
            products = products.slice(0, limit)
        }
    }
    res.send(products)
})
app.get('/products/:pid', (req, res) => {
    let products = productManager.getProducts()
    let productId = req.params.pid
    let product = products.find(prod => prod.id == productId)
    product ?res.send(product)
    :res.send('Product not found')
    
})
app.get('/bienvenida', (req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.send('<p style=\'color: blue\'> Hola en azul</p>')
})

// app.get('/usuario/:userId', (req, res) => {
//     const userId = +req.params.userId
//     const user = users.find(user => user.id === userId)
//     user ?res.json(user)
//     :res.send("No se encontro el usuario")
    
// })

app.listen(8080, () => {
    console.log('server listo')
})  