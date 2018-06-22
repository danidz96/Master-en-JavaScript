'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/portfolio')
        .then(() => {
            console.log('Conexión a la base de datos establecida con exito...');

            //Creación servidor
            app.listen(port, () => {
                console.log('Servidor corriendo correctamente');
            })
        })
        .catch(err => console.log(err));