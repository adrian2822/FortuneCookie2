 //Logica que obtiene un mensaje
        // Aleatorio
var fortunePapers = [
     "Por fin se imprimio esta cosa",
      "Hazlo o no lo hagas, no hay intentos",
      "Que la fuerza te acompañe",
      "El amor es...Tengo hambre",
      "Vive deprisa, muere joven y deja un cadaver obeso atras",
      "Dios es mi personaje ficticio favorito" 
         ];      
module.exports = {
    "getFortune" : function (cb) {
       

         var selector = 
         Math.floor(
             Math.random() * (fortunePapers.length - 0) + 0
             );
         var fortuneMessage = fortunePapers[selector];
         //Armando objeto respuesta
         var fortunePaper = JSON.stringify({
             "message" : fortuneMessage
         });

         //Ejecuto el callback pasandole como parametro el fortunePaper
         cb(fortunePaper);

    }

};