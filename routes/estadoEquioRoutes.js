const rutaExpress = require("express");
const {
  obtenerEstado,
  crearEstado,
  actualizarEstado,
  eliminarEstado,
} = require("../controllers/EstoEquipoController");

const ruta1 = rutaExpress.Router();

ruta1.get("/", obtenerEstado);
ruta1.post("/", crearEstado);
ruta1.put("/:id", actualizarEstado);
ruta1.delete("/:id", eliminarEstado);

module.exports = ruta1;
