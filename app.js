const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rutaEstado = require("./routes/estadoEquioRoutes");
const rutaInventario = require("./routes/inventarioRuta");
const rutaMarca = require("./routes/marcaRutes");
const rutaTipos = require("./routes/tipoEquipoRutas");
const rutaUsuarios = require("./routes/usuarioRuta");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/tiposEqipos", rutaTipos);
app.use("/estadosequipos", rutaEstado);
app.use("/usuarios", rutaUsuarios);
app.use("/marcas", rutaMarca);
app.use("/inventario", rutaInventario);

module.exports = app;
