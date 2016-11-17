 //Logica que obtiene un mensaje
        // Aleatorio
var fortunePapers = [
     "En todo tiempo ama el amigo y es un hermano en tiempos de...",
      "La necedad esta ligada al corazon del muchacho",
      "El principio de la sabiduria es el temor de dios",
      "El amor es paciente, e inmutable"     
         ];      
module.exports = {
    "getFortune" : function (cb) {
       

         var selector = Math.floor(Math.random()*fortunePapers.length);
         var fortuneMessage = fortunePapers[selector];
         //Armando objeto respuesta
         var fortunePaper = JSON.stringify({
             "message" : fortuneMessage
         });

         //Ejecuto el callback pasandole como parametro el fortunePaper
         cb(fortunePaper);

    }

};