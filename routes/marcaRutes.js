const express= require('express')
const {ObtenerMarcas,addMarcas,updateMarca,deleteMarcas} = require('../controllers/marcasController')

const ruta3=express.Router();

ruta3.get("/", ObtenerMarcas);
ruta3.post("/", addMarcas);
ruta3.put("/:id", updateMarca);
ruta3.delete("/:id",deleteMarcas);

module.exports=ruta3