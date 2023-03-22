const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))


const ruta1=require('./routes/estadoEquioRoutes')
const ruta2=require('./routes/inventarioRuta')
const ruta3=require('./routes/marcaRutes')
const ruta4=require('./routes/tipoEquipoRutas')
const ruta5=require('./routes/usuarioRuta')



app.use("/tiposEqipos",ruta4 );
app.use("/estadosEquipos",ruta1 );
app.use("/usuarios",ruta5 );
app.use("/marcas", ruta3 );
app.use("/inventario", ruta2);


 module.exports= app