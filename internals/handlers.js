var path = require('path');
var fs = require('fs');
var fortune = require('./fortune');
var mongoose = require('mongoose');
//creando manejadores 
var _getAuthor = function (req, res) {
    res.end("<h1>Autor: Adrian<h1>");
};
//----
// Objeto manejado
var handler = {};
// Registro de manejadores en el objeto manejador 
handler["/getauthor"] = _getAuthor;
mongoose.connect('mongodb://localhost:27017/fortuneapp');
var Papers = new mongoose.Schema({
    message: 'string'
    },{collection: 'papers'});

fortunePapers = mongoose.model('papers',Papers);


var _getFortune = function(req, res){
console.log("> Se solicita fortuna...");
    // // Obtenemos el mensaje de la suerte
    fortune.getFortune(function (fortunePaper) {
        res.writeHead(200, {
            "Content-Type": "application/json"
        });
        console.log("Tu galleta dice: " + fortunePaper);
        // Respondemos al Objeto
        res.end(fortunePaper);
    });
    //frase=["<h1>Hola</h1>",
//        "<h1>Nuestra propia naturaleza puede ser una carga y a veces una maldición – Adam Warlock",
//        "<h1>Si eres bueno para algo, nunca lo hagas gratis –  The Joker</h1>",
//        "<h1>No tiene nada de malo sentir miedo, siempre y cuando no te dejes vencer - Captain America</h1>",
//        "<h1>A veces, la verdad no es suficiente. A veces la gente merece más. A veces la gente merece que recompensen su fe - Batman</h1>",
//        "<h1>No es quien soy debajo… sino mis acciones lo que me definen - Batman</h1>"];


//        var fraseAleatoria;
//       fraseAleatoria = Math.random() * frase.length;
//       fraseAleatoria = Math.floor(fraseAleatoria);
//       var mensaje = frase[fraseAleatoria];
//       res.end(mensaje);

   // var fraseObtenida = fortuna.obtenerFrase();
    //res.end(fraseObtenida);
};

handler["/getfortune"] = _getFortune;


module.exports = handler;