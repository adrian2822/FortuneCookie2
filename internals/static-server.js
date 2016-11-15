var fs = require ('fs'),
    mime = require ('mime'),
    path = require ('path'),
    config = require('../config/config.js');


exports.serve = function (url, res) {
    var  urlPath = path.resolve(config.STATIC_PATH + url);
    console.log(`Recurso solicitado: ${urlPath}`.data);
    console.log(`Que paso ¬¬`.data);

    fs.exists(urlPath, function(exists){
        if(!exists){
            //No existe
            res.writeHead(404,{
                'Content-Type':'text/html'
            });
            res.end('<h1> 404 Not Found</h1>')
        }else{
            //existe
            var mimeType = mime.lookup(urlPath);

    fs.readFile(urlPath, function (err, content) {
        if (err) {
            console.log(`Error al leer archivo ${err}`);
            //decidiendo el content type de la extension del archivo solicitado
            res.writeHead(500, {
                "Contenr-Type": "text/plain"
            });
            res.end('Error 500: Internal Error...');
        } else {
            //Sirve el archivo
            res.writeHead(200, {
                "Content-Type": mimeType
            });
            console.log(`>Se sirve el archivo: ${urlPath}`.info);
            res.end(content);
        }
    });

        }
    });
    
};