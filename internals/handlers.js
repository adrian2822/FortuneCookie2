var fortuna = require('./fortune.js');
var path = require('path'),
    fs = require('fs'),
    fortune = require('./fortune');
// creando manejadores
// ------
// objeto manejador
var handler = {};
// registro de manejadores en el objeto manejador

var _getAuthor = function (req, res) {
    res.end("<h1>Autor:Adrian</h1>");
};
var _getFortune = function (req, res) {
//    frase=["<h1>Hola</h1>",
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

    console.log('>Se solicita fortuna...');
    // No bloqueante
    fortune.getFortune(function(fortunePaperObj){
        //configurar el encabezado
        res.writeHead(200,{
            "Content-Type" : "application/json"
        });
        console.log(`> Contestando:  ${fortunePaperObj}`);
        res.end(fortunePaperObj);
    });
};

handler["/getauthor"] = _getAuthor;
handler["/getfortune"] = _getFortune;

module.exports = handler;