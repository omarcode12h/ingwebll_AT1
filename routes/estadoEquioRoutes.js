const rutaExpress=require('express')
const {ObtenerEstado,addEquipo,updateEstadoEquipo,deleteequipo}= require('../controllers/EstoEquipoController')

const ruta1 = rutaExpress.Router()



 ruta1.get('/', ObtenerEstado)
 ruta1.post("/", addEquipo);
 ruta1.put("/:id", updateEstadoEquipo); 
 ruta1.delete("/:id",deleteequipo);

 module.exports=ruta1