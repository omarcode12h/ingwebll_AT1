const rutaExpress=require('express')
const {obtenerEstadosEquipo,addInventarioEquipo, updateInventarioEquipo,deleteInventarioEquipo}= require('..//controllers/inventarioController')

const ruta2=rutaExpress.Router()

ruta2.get("/", obtenerEstadosEquipo);
ruta2.post("/", addInventarioEquipo);
ruta2.put("/:id", updateInventarioEquipo);
ruta2.delete("/:id",deleteInventarioEquipo);





module.exports=ruta2