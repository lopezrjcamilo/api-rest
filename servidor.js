console.log("Hola mi primera API Rest")

const express = require('express');
const moongose = require('mongoose');
const app = express();

const router = express();
app.use(express.urlencoded({extended: true}));
app.use(expresss.json());
//conexion a la base de datos
moongose.connect("mongodb+srv://lopezrjcamilo:8246579130@cluster0.wmuurnd.mongodb.net/BaseDatos?retryWrites=true&w=majority");
router.get('/', (req, res) =>{
    res.send("el inicio de mi API")
});
router.get('/tarea', (req, res) =>{
    TareaSchema.find(function(err, datos){
        if(err){
            console.log("Error leyendo las tareas");
        }else{
            res.send(datos);
        }
    })
})

//informacion que llega para constuir una nueva tarea
Router.post('/tarea', (req, res)=> {
    let nuevaTarea = new TareaSchema({
        idTarea: req.body.id,
        nombreTarea: req.body.nombre,
        detalleTarea: req.body.nombre,
    });
    //guardamos la anterior tarea
    nuevaTarea.save(function(err, datos){
        if(err){
            console.log(err);
        }
        res.send("Tarea almacenada correctamente.")
    })
});

app.use(router);//iniciamos nuestro servidor
//inicializamos un servidor web por el puerto 3000
app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000")
})