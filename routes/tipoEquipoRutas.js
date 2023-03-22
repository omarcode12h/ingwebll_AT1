const express=require('express')
const {ObtenerDatoEquipo,addDatoEquipo,updateDatoEquipo,deleteDatosEquipo}=require('../controllers/TipoEquipoController')

const ruta4=express.Router();


ruta4.get("/gh", ObtenerDatoEquipo);
ruta4.post("/", addDatoEquipo);
ruta4.put("/:id", updateDatoEquipo);
ruta4.delete("/:id",deleteDatosEquipo);

module.exports=ruta4;
