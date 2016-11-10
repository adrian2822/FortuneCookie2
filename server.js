var http = require('http');
//Cargando configuraciones
var config = require('./config/config.js');
var PORT = config.PORT;
var IP = config.IP;
var fs = require('fs');
var mime = require('mime');
var path = require('path');
var staticServer  = require('./internals/static-server.js');

//Agregar paqueteria de colores
//Para importar los colores
var colors = require('colors');
//Tema de colors....
colors.setTheme(config.color_theme);
//req       peticion
//res       respuesta
var server = http.createServer(function(req, res){
    var urlPath = req.url;
    //normalizando path en caso de no se pida un recurso
    if(urlPath == '/'){
        urlPath = ('/index.html');
    }
        // se llama al servidor estatico
        staticServer.serve(urlPath, res);
               
    
});

server.listen(PORT, IP, function(){
    console.log(`>Server working @http://${IP}:${PORT}`.info);
    
});