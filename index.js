'use strict'

var express = require('express');
var bodyParser = require('body-parser')

const app =  express();
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded( { extended: false } ))
app.use(bodyParser.json())

app.get('/hola/:name', (req, res) => {
    res.send( { message: `Hola ${req.params.name}` } )
})

app.listen(port, () => {
    console.log(`API REST corriendo en htp://localhost:${port}`)
})
