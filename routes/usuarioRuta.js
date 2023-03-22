const express= require('express')

const {Obtenerusuarios, addusuarios, updateusuarios, deleteusuarios}= require('../controllers/usuariosControlador')

const ruta5 = express.Router()


ruta5.get("/uaua", Obtenerusuarios);
ruta5.post("/aa", addusuarios);
ruta5.put("/:id", updateusuarios);
ruta5.delete("/:id",deleteusuarios);


module.exports=ruta5