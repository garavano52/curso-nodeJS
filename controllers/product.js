'use strict'
const Producto = require('../models/product');

function getProduct (req, res) {
    let productId = req.params.productId
    Producto.findById(productId, (err, producto) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!producto) return res.status(404).send( { message: 'El producto no existe.' } )
        res.status(200).send( { producto } )
        /* res.status(200).send( { producto: producto } ) // Es lo mismo que arriba por ES6 */
    })
}

function getProducts (req, res) {
    Producto.find( {} , (err, productos) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!productos) return res.status(404).send( { message: 'No existen productos.' } )
        res.status(200).send({  productos })
    })
}

function saveProduct(req, res) {
    /* console.log('POST /api/product')    console.log(req.body) */
    let producto = new Producto()
    producto.name     = req.body.name
    producto.picture  = req.body.picture
    producto.price    = req.body.price 
    producto.category = req.body.category
    producto.save( (err, productoAlmacenado) => { 
        if (err) res.status(500).send( { message: 'Error al salvar en la base de datos' })
        res.status(200).send({ producto: productoAlmacenado } )
    })
}

function updateProduct (req, res) {
    let productId = req.params.productId
    let update = req.body
    Producto.findByIdAndUpdate( productId, update, (err, productoActualizado) => {
        if (err) return res.status(500).send( { message: `Error al actualizar el producto: ${err}`} )
        res.status(200).send( {producto: productoActualizado } )     
    })
}

function deleteProduct (req, res) {
    let productId = req.params.productId
    Producto.findById(productId, (err, producto) => {
        if (err) return res.status(500).send({ message: `Error al borrar el producto: ${err}` })
        producto.remove( err => {
            if (err) return res.status(500).send({ message: `Error al borrar el producto: ${err}` })
            res.status(200).send({ message: 'El producto ha sido eliminado.' } )
        })
    })
}

module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}
