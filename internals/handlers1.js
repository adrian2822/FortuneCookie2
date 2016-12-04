var mongodb = require("mongodb");
var mongoClient = mongodb.MongoClient;
var Urlmongo = 'mongodb://aavalos:Eduardo24@ds115798.mlab.com:15798/fortuneapp';
module.exports = {
    "getFortune": function (cb) {
        mongoClient.connect(Urlmongo,
            function (err, db) {
                if (err) {
                    console.log("no se conecto a la base de datos fortuneapp");
                    var fortunePaperResponse = JSON.stringify(fortunePaper);
                    // Ejecuto el callback (cb) pasandole
                    // como parametro el fortunepaper string
                    cb(fortunePaperResponse);
                } else {
                    // Obtengo la coleccion con la que quiero trabajar
                    var papersCollection = db.collection("papers");
                    // Consulto todos los documentos de mi coleccion
                    var objetoRestultado = papersCollection.find();
                    objetoRestultado.toArray(function (err, papers) {
                        // ARREGLO ALEATORIO
                        var randomIndex = Math.round(Math.random(0) * papers.length);
                        console.log("Galleta rota".zebra + randomIndex);
                        var fortunePaperResponse = JSON.stringify(papers[randomIndex]);
                        db.close()
                        console.log("> La fortuna es: " + fortunePaperResponse);
                        cb(fortunePaperResponse);
                    });
                }
            });
    }
};