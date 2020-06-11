'use strinct'

const mongoose = require('mongoose')
const Schema   = mongoose.Schema

const ProductSchema = Schema( {
    name: String,
    picture: String,
    price: { type: Number, default: 0 },
    category: { type: String, enum: ['computadoras','telefonos','accesorios'] },
    description: String
})

module.exports = mongoose.model('Producto', ProductSchema)





