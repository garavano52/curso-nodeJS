'use strict'

const config   = require('./config')
const app      = require('./app')
const mongoose = require('mongoose');

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)  

mongoose.connect(config.db,  (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexióm a la base de datos establecida...')
    app.listen(config.port, () => { 
        console.log(`API REST corriendo en htp://localhost:${config.port}`)
    })
}) 
 

/* 'use strict'     // Código Anterior sin modularizar nada. Todo junto
var express    = require('express');
var bodyParser = require('body-parser')
var mongoose   = require('mongoose');

const Producto = require('./models/product.js');

mongoose.set('useNewUrlParser', true)
mongoose.set('useUnifiedTopology', true)  

const app =  express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded( { extended: false } ))
app.use(bodyParser.json())

app.get('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    Producto.findById(productId, (err, producto) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!producto) return res.status(404).send( { message: 'El producto no existe.' } )
        res.status(200).send( { producto } )
        /* res.status(200).send( { producto: producto } ) // Es lo mismo que arriba por ES6 
    })
})

app.get('/api/product', (req, res) => {
    Producto.find( {} , (err, productos) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!productos) return res.status(404).send( { message: 'No existen productos.' } )
        res.status(200).send({  productos })
    })
})

app.put('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    let update = req.body
    Producto.findByIdAndUpdate( productId, update, (err, productoActualizado) => {
        if (err) return res.status(500).send( { message: `Error al actualizar el producto: ${err}`} )
        res.status(200).send( {producto: productoActualizado } )     
    })
})

app.delete('/api/product/:productId', (req, res) => {
    let productId = req.params.productId
    Producto.findById(productId, (err, producto) => {
        if (err) return res.status(500).send({ message: `Error al borrar el producto: ${err}` })
        producto.remove( err => {
            if (err) return res.status(500).send({ message: `Error al borrar el producto: ${err}` })
            res.status(200).send({ message: 'El producto ha sido eliminado.' } )
        })
    })
})

app.post('/api/product', (req, res) => {
    console.log('POST /api/product')
    console.log(req.body)
    let producto = new Producto()
    producto.name     = req.body.name
    producto.picture  = req.body.picture
    producto.price    = req.body.price 
    producto.category = req.body.category
    producto.save( (err, productoAlmacenado) => { 
        if (err) res.status(500).send( { message: 'Error al salvar en la base de datos' })
        res.status(200).send({ producto: productoAlmacenado } )
    })
})

mongoose.connect('mongodb://localhost:27017/shop',  (err, res) => {
    if (err) {
        return console.log(`Error al conectar a la base de datos: ${err}`)
    }
    console.log('Conexióm a la base de datos establecida...')
    app.listen(port, () => {
        console.log(`API REST corriendo en htp://localhost:${port}`)
    })
}) */





