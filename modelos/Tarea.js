const moongose = require('moongose');

let TareaSchema = new moongose.Schema({
    idTarea: Number,
    nombreTarea: String,
    detalleTarea: String
});

module.exports = moongose.model('tarea', TareaSchema,'Tarea')