var path = require ('path'),
     fs = require('fs');
     // creando manejadores
     var _getAuthor = function(req,res){
         res.end("<h1>Autor:Adrian</h1>");
     };
// ------
// objeto manejador
var handler = {};
// registro de manejadores en el objeto manejador
handler["/getauthor"] = _getAuthor;
module.exports = handler;